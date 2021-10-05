import React from 'react';
import Head from 'next/head';
import Billing from '../../views/billing';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Billing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Billing />
        </PrivateComponent>
    );
};

export default Index;
