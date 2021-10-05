import React from 'react';
import Head from 'next/head';
import Referral from '../../views/referral';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Referral</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Referral />
        </PrivateComponent>
    );
};

export default Index;
