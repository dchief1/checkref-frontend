import React from 'react';
import {Button} from '@chakra-ui/core';

const button = props => {
    return (
        <Button
            _focus={{outline: 0}}
            backgroundColor="brand.orange"
            fontWeight="normal"
            borderRadius="4px"
            color="brand.white"
            px={['2rem']}
            height="2.8rem"
            _hover={{backgroundColor: 'brand.orange'}}
            {...props}
        />
    );
};

export default button;
