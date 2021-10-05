import React from 'react';
import {Text, Heading} from '@chakra-ui/core';
import ProfileMainContent from '../../components/profileMainContent';

const main = () => {
    return (
        <ProfileMainContent>
            <Heading as="h1" size="xl" mb="4rem">
                Help
            </Heading>
        </ProfileMainContent>
    );
};

export default main;
