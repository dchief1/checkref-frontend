import React from 'react';
import Head from 'next/head';
import ForgotPassword from '../views/forgotPassword';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Forgot Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ForgotPassword />
        </div>
    );
};

export default Index;
