import * as React from 'react';
import {Spinner} from '@chakra-ui/core';

const SpinnerComponent = () => {
    return (
        <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#F37121"
            size="5rem"
            d="block"
            mx="auto"
            mt={8}
        />
    );
};

export default SpinnerComponent;
