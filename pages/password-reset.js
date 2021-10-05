import React from 'react';
import Head from 'next/head';
import PasswordReset from '../views/passwordReset';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Password Reset</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PasswordReset />
        </div>
    );
};

export default Index;
