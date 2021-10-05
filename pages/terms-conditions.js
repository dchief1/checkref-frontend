import React from 'react';
import Head from 'next/head';
import TermsConditions from '../views/termsConditions';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Terms and Conditions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TermsConditions />
        </div>
    );
};

export default Index;
