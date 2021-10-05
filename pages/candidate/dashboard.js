import React from 'react';
import Head from 'next/head';
import PrivateComponent from '../../components/privateComponent';
import Dashboard from '../../views/candidate/dashboard';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Candidate Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard />
        </PrivateComponent>
    );
};

export default Index;
