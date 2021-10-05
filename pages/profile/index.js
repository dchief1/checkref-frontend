import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Dashboard from '../../views/dashboard';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/profile/dashboard');
    });
    return (
        <div>
            <Head>
                <title>Checkref | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </div>
    );
};

export default Index;
