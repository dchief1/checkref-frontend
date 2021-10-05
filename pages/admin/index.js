import * as React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

const Index = () => {
    const router = useRouter();
    React.useLayoutEffect(() => {
        router.replace('/admin/dashboard');
    }, []);
    return (
        <>
            <Head>
                <title>Checkref | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};

export default Index;
