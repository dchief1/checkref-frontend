import React from 'react';
import {Heading, Text, Box, Flex, Image} from '@chakra-ui/core';
import Container from '../../components/container';
import HowItWorks from './howItWorks';
import Pricing from './pricing';

const Main = () => {
    return (
        <>
            <Box pt={['1rem', 0]}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Image
                        ml={['-8rem', '-5.5rem', '-4rem']}
                        mt={['-12.5rem', '-11rem', '-10rem']}
                        zIndex="-99"
                        src="/images/about_left.svg"
                    />
                    <Image
                        mt={['-12rem', '-11rem', '-10rem']}
                        zIndex="-99"
                        src="/images/about_right.svg"
                    />
                </Flex>
                <Container>
                    <Box mt="-5.5rem">
                        <Heading size="xl" fontWeight="800" as="h2" mb="1.2rem" textAlign="center">
                            About
                        </Heading>
                        <Text mb="2rem" fontSize={['16px', '18px']}>
                            Checkref is a digital automated reference checking tool. It simplifies
                            and streamlines, the reference checking process thereby increasing the
                            validity and compliance of your Employee reference checks.
                        </Text>{' '}
                        <Text fontSize={['16px', '18px']}>
                            {' '}
                            Checkref makes it easy for{' '}
                            <Text fontWeight="bold" as="span">
                                HR professionals{' '}
                            </Text>{' '}
                            and{' '}
                            <Text fontWeight="bold" as="span">
                                Recruitment agencies
                            </Text>{' '}
                            to easily request employee references. You provide the candidates’
                            details and Checkref will take care of collecting your candidates
                            references; with automated emails, text messages and phone calls until
                            every reference has been completed and also provide your team with
                            detailed reports.
                        </Text>
                    </Box>
                </Container>
                <Image
                    position="relative"
                    mt="2rem"
                    mb="-7rem"
                    zIndex="-999"
                    src="/images/about_bottom.svg"
                />
            </Box>
            <HowItWorks />
            <Pricing />
        </>
    );
};

export default Main;
