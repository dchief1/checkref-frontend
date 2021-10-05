import React from 'react';
import Head from 'next/head';
import Pricing from '../../views/admin/pricing';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Pricing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Pricing />
        </>
    );
};

export default Index;
