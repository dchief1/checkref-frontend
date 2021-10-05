import React from 'react';
import Head from 'next/head';
import Invoices from '../../views/invoices';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Invoices</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Invoices />
        </PrivateComponent>
    );
};

export default Index;
