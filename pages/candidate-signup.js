import React from 'react';
import Head from 'next/head';
import CandidateSignup from '../views/candidateSignup';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Checkref | Signup</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CandidateSignup />
        </div>
    );
};

export default Index;
