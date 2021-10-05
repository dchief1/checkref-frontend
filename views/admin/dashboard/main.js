import React from 'react';
import AdminMainContent from '../../../components/admin/adminMainContent';
import Overview from './overview';
import Credits from './credits';
import Accounts from './accounts';

const main = () => {
    return (
        <AdminMainContent>
            <Overview />
            <Credits />
            <Accounts />
        </AdminMainContent>
    );
};

export default main;
