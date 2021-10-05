import React from 'react';
import Head from 'next/head';
import Help from '../../views/help';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Help</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Help />
        </PrivateComponent>
    );
};

export default Index;
