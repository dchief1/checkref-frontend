import React from 'react';
import Head from 'next/head';
import Login from '../views/login';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </div>
    );
};

export default Index;
