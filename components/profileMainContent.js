import React from 'react';
import {Box} from '@chakra-ui/core';
import ProfileNavbar from './profileNavbar';
import Container from './container';

const profileMainContent = ({children, color}) => {
    return (
        <Box backgroundColor="#f7f9ff" ml={[0, 0, '200px', '220px']}>
            <ProfileNavbar />
            <Box
                backgroundColor={color ? color : 'inherit'}
                pb={['4rem', '5rem']}
                minHeight="100vh"
                px="10px"
                pt={['5.6rem', '7.4rem']}
            >
                <Container profile="true">{children}</Container>
            </Box>
        </Box>
    );
};

export default profileMainContent;
