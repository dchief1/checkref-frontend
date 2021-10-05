import React from 'react';
import Head from 'next/head';
import CompanyProfile from '../../views/companyProfile';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Company Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CompanyProfile />
        </PrivateComponent>
    );
};

export default Index;
