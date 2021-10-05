import React from 'react';
import Head from 'next/head';
import QuestionSet from '../../views/questionSet';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Question Set</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <QuestionSet />
        </PrivateComponent>
    );
};

export default Index;
