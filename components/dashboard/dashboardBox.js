import React from 'react';
import {Box} from '@chakra-ui/core';

const DashboardBox = props => {
    return (
        <Box
            backgroundColor="brand.white"
            borderRadius="10px"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.1)"
            p=".8rem 1.3rem"
            {...props}
        />
    );
};

export default DashboardBox;
