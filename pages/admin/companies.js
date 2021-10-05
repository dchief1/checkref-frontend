import React from 'react';
import Head from 'next/head';
import Companies from '../../views/admin/companies';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Companies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Companies />
        </>
    );
};

export default Index;
