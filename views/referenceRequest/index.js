import React from 'react';
import ProfileSideNav from '../../components/profileSideNav';
import Main from './main';

const ReferenceRequest = ({user}) => {
    return (
        <div>
            <ProfileSideNav />
            <Main user={user} />
        </div>
    );
};

export default ReferenceRequest;
