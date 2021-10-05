import React from 'react';
import Head from 'next/head';
import Referee from '../../views/referee';

const RefereePage = () => {
    return (
        <>
            <Head>
                <title>Checkref | Referee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Referee />
        </>
    );
};

export default RefereePage;
