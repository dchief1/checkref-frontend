import React from 'react';
import Head from 'next/head';
import Candidates from '../../views/admin/candidates';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Candidates</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Candidates />
        </>
    );
};

export default Index;
