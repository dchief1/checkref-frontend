import React from 'react';
import Head from 'next/head';
import Settings from '../../views/admin/settings';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Settings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Settings />
        </>
    );
};

export default Index;
