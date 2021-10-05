import React from 'react';
import Head from 'next/head';
import Register from '../views/register';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />
        </div>
    );
};

export default Index;
