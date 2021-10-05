import React from 'react';
import Head from 'next/head';
import GlobalReminder from '../../views/globalReminder';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Company Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlobalReminder />
        </PrivateComponent>
    );
};

export default Index;
