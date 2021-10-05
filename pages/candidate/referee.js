import React from 'react';
import Head from 'next/head';
import AddReferee from '../../views/candidate/add';

const CandidateAddReferee = () => {
    return (
        <>
            <Head>
                <title>Checkref | Add Referee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AddReferee />
        </>
    );
};

export default CandidateAddReferee;
