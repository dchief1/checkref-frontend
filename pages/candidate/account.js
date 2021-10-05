import React from 'react';
import Head from 'next/head';
import PrivateComponent from '../../components/privateComponent';
import Account from '../../views/candidate/account';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Candidate Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Account />
        </PrivateComponent>
    );
};

export default Index;
