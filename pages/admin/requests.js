import React from 'react';
import Head from 'next/head';
import Requests from '../../views/admin/requests';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Requests</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Requests />
        </>
    );
};

export default Index;
