import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Dashboard from '../../views/dashboard';
import PrivateComponent from '../../components/privateComponent';

const Index = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (localStorage.checkref_user) {
            setUser(JSON.parse(localStorage.checkref_user));
        }
    }, []);
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Dashboard user={user} />
        </PrivateComponent>
    );
};

export default Index;
