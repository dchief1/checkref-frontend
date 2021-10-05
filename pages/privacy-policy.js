import React from 'react';
import Head from 'next/head';
import Privacy from '../views/privacy';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Privacy />
        </div>
    );
};

export default Index;
