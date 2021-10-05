import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Flex, Text, Heading} from '@chakra-ui/core';
import Button from '../../../components/button';

const OverViewCards = ({header, headerValue, lastMonth, change, negativeChange}) => {
    return (
        <Box
            flex="1"
            flexBasis={['100%', '100%', '32%']}
            mb={[4, 4, 4, 0]}
            p={['1rem', '1.5rem', '1.5rem 2rem']}
            border="1px solid #E5E5E5"
            borderRadius="4px"
            backgroundColor="brand.white"
            width={['100%', '100%', 'auto']}
        >
            <Text mb={4} fontSize="sm" color="#50514F" textTransform="uppercase">
                {header}
            </Text>
            <Text mb={10} color="#000" fontWeight={600} fontSize={['md', 'lg']}>
                {headerValue}
            </Text>
            <Flex align="center" justify={['space-between']}>
                <Box>
                    <Text mb={4} fontSize="sm" color="#50514F">
                        LAST MONTH
                    </Text>
                    <Text fontSize={['md', 'lg']} fontWeight={600}>
                        {lastMonth}
                    </Text>
                </Box>

                <Box>
                    <Text mb={4} fontSize="sm" color="#50514F">
                        CHANGE
                    </Text>
                    <Text
                        fontSize={['md', 'lg']}
                        color={negativeChange ? '#FC1B17' : '#06690A'}
                        fontWeight={600}
                    >
                        {change}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};
OverViewCards.propTypes = {
    header: PropTypes.string.isRequired,
    headerValue: PropTypes.string.isRequired,
    lastMonth: PropTypes.any,
    change: PropTypes.any,
    negativeChange: PropTypes.bool,
};

const Overview = () => {
    return (
        <Box mb={[10, 16]}>
            <Heading mb={4} as="h1" size="lg">
                Overview
            </Heading>
            <Flex mb={4} justify="flex-end">
                <Button height="2rem" px="1rem" rightIcon="chevron-down">
                    Last 24 Hours
                </Button>
            </Flex>

            <Flex
                gridColumnGap={['1rem']}
                align="stretch"
                justify={['space-between']}
                flexWrap="wrap"
                flexDir={['column', 'column', 'row']}
            >
                <OverViewCards
                    header="Total sales amount"
                    headerValue="NGN 450,000"
                    lastMonth="N300,000"
                    change="+N25,000"
                />
                <OverViewCards
                    header="new registrations"
                    headerValue="687"
                    lastMonth="500"
                    change="+187"
                />
                <OverViewCards
                    header="total request sent"
                    headerValue="450"
                    lastMonth="300"
                    change="-150"
                    negativeChange
                />
            </Flex>
        </Box>
    );
};

export default Overview;
