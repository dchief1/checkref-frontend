import React from 'react';
import Head from 'next/head';
import Recruiters from '../../views/admin/recruiters';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Recruiters</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Recruiters />
        </>
    );
};

export default Index;
