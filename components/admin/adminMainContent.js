import React from 'react';
import {Box} from '@chakra-ui/core';
import Container from './../container';
import AdminNavbar from './adminNavbar';

const adminMainContent = ({children, color}) => {
    return (
        <Box backgroundColor="#f7f9ff" ml={[0, 0, '200px', '220px']}>
            <AdminNavbar />
            <Box
                backgroundColor={color ? color : 'inherit'}
                pb={['4rem', '5rem']}
                minHeight="100vh"
                px="10px"
                pt={['5.5rem', '5.5rem', '4.4rem']}
            >
                <Container profile="true">{children}</Container>
            </Box>
        </Box>
    );
};

export default adminMainContent;
