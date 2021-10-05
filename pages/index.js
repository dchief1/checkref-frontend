import React from 'react';
import Head from 'next/head';
import Landing from '../views/landing';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Landing />
        </div>
    );
};

export default Index;
