import React, {useEffect, useState} from 'react';
import Head from 'next/head';
// import Teams from '../../views/teams';
import loadable from '@loadable/component';
import PrivateComponent from '../../components/privateComponent';

const Teams = loadable(() => import('../../views/teams'), {fallback: ''});

const Index = () => {
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Teams</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Teams />
        </PrivateComponent>
    );
};

export default Index;
