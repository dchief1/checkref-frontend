import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
import {NotificationContainer} from 'react-notifications';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import axios from 'axios';
import store from '../store/store';
import {ThemeProvider, CSSReset, theme} from '@chakra-ui/core';
import '../styles/globals.css';
import Head from 'next/head';
import customIcons from '../utils/customIcons';
import {rootEndPoint} from '../utils/endpoints';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';

const customTheme = {
    ...theme,
    fonts: {
        body: 'Lato, system-ui, sans-serif',
        heading: 'Lato, system-ui, sans-serif',
        mono: 'Menlo, monospace',
    },
    fontWeights: {
        ...theme.fontWeights,
        heading: 800,
        bolder: 800,
        boldest: 900,
    },
    colors: {
        ...theme.colors,
        brand: {
            darkBlue: '#111D5E',
            skyBlue: '#F5F6FF',
            dullPink: '#FFECE0',
            darkBlack: '#121113',
            lightBlack: '#444444',
            orange: '#F37121',
            black: '#000000',
            white: '#ffffff',
        },
    },
    icons: {
        ...theme.icons,
        ...customIcons,
    },
};

function MyApp({Component, pageProps}) {
    const router = useRouter();
    console.log(router.pathname);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = rootEndPoint;
        axios.defaults.headers = {
            authorization: `Bearer ${localStorage.getItem('checkref_token')}`,
            'content-type': 'application/json',
        };
        axios.interceptors.response.use(
            res => Promise.resolve(res),
            err => {
                if (!err.response) {
                    NotificationManager.error('Check your network connection');
                }

                if (err.response.status === 401 && router.pathname !== '/login') {
                    setTimeout(() => {
                        router.replace('/login');
                        typeof window != 'undefined' && localStorage.clear();
                    }, 0);
                }
                return Promise.reject(err);
            },
        );
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <CSSReset />
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
                <NotificationContainer />
            </ThemeProvider>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const wrappedRedux = wrapper.withRedux(MyApp);

export default dynamic(() => Promise.resolve(wrappedRedux), {
    ssr: false,
});
