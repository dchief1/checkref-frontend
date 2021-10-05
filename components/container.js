import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@chakra-ui/core';

const Container = props => {
    const {profile} = props;
    return (
        <Box
            as="div"
            px={['.9rem', '1.4rem', '1.7rem', '1.2rem', '.5rem']}
            maxWidth={['800px', '800px', '850px', profile ? '1050px' : '1150px']}
            mx="auto"
            {...props}
        ></Box>
    );
};

Container.propTypes = {
    profile: PropTypes.string,
};

export default Container;
