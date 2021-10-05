import React from 'react';
import Head from 'next/head';
import Reports from '../../views/admin/reports';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Reports</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Reports />
        </>
    );
};

export default Index;
