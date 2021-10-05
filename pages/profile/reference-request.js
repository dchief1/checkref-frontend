import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import ReferenceRequest from '../../views/referenceRequest';
import PrivateComponent from '../../components/privateComponent';

const ReferenceRequestPage = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (localStorage.checkref_user) {
            setUser(JSON.parse(localStorage.checkref_user));
        }
    }, []);
    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Reference Request</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ReferenceRequest user={user} />
        </PrivateComponent>
    );
};

export default ReferenceRequestPage;
