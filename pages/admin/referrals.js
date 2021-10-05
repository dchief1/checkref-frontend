import React from 'react';
import Head from 'next/head';
import Referrals from '../../views/admin/referrals';

const Index = () => {
    return (
        <>
            <Head>
                <title>Checkref | Referrals</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Referrals />
        </>
    );
};

export default Index;
