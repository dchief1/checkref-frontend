import React from 'react';
import Head from 'next/head';
import Dashboard from '../../views/admin/dashboard';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Admin Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </>
    );
};

export default Index;
