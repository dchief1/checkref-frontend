import React from 'react';
import Head from 'next/head';
import Faq from '../views/faq';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Faq />
        </div>
    );
};

export default Index;
