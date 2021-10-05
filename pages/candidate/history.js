import React from 'react';
import Head from 'next/head';
import PrivateComponent from '../../components/privateComponent';
import History from '../../views/candidate/history';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Candidate History</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <History />
        </PrivateComponent>
    );
};

export default Index;
