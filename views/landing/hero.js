import React from 'react';
import {Box, Flex, Heading, Image, Text} from '@chakra-ui/core';

import Link from 'next/link';
import Container from '../../components/container';
import Navbar from '../../components/navbar';

const Hero = () => {
    return (
        <div>
            <Navbar />
            <Box
                height={['auto', '100vh', 'auto']}
                pt={['8rem', '10rem']}
                pb={['1.5rem', '5rem']}
                backgroundColor="brand.dullPink"
            >
                <Container>
                    <Flex
                        flexDirection={['column', 'column', 'row']}
                        justifyContent="space-between"
                        alignItems={['flex-start', 'flex-start', 'center']}
                    >
                        <Box
                            mt={['-1rem', '0']}
                            marginBottom={['3rem', '3rem', '5rem']}
                            flexBasis="50%"
                        >
                            <Heading
                                as="h1"
                                fontSize={['25px', '25px', '32px', '40px', '45px']}
                                fontWeight="800"
                                color="brand.darkBlue"
                                mb="2.4rem"
                            >
                                Simplify Your{' '}
                                <Box as="br" display={['none', 'none', 'none', 'block']} />{' '}
                                Employment{' '}
                                <Box as="br" display={['none', 'none', 'none', 'block']} />{' '}
                                Reference{' '}
                                <Box as="br" display={['none', 'block', 'none', 'none']} /> Checking
                                Process
                            </Heading>
                            <Link href="/register">
                                <Text
                                    color="brand.white"
                                    backgroundColor="brand.orange"
                                    borderRadius="4px"
                                    padding={[
                                        '.7rem 1rem',
                                        '.7rem 1rem',
                                        '.85rem 1.2rem',
                                        '1rem 1.5rem',
                                    ]}
                                    href="/register"
                                    as="a"
                                    fontSize="20px"
                                >
                                    Sign Up for Free
                                </Text>
                            </Link>
                        </Box>
                        <Box
                            marginRight={['2rem', '2rem', 0]}
                            marginLeft={['auto', 'auto', '0']}
                            flexBasis="50%"
                        >
                            <Image
                                ml={['34%', '34%', '40%']}
                                mb={['3rem', '3rem', '-3rem']}
                                width={['50%', '60%', '30%']}
                                src="/images/avatar1.svg"
                            />
                            <Image
                                width={['50%', '60%', '30%']}
                                mt="-4rem"
                                ml={['-3rem', '-3rem', 0]}
                                src="/images/avatar2.svg"
                            />
                            <Image
                                width={['50%', '60%', '30%']}
                                mb="-6rem"
                                ml="50%"
                                src="/images/avatar3.svg"
                            />
                            <Image
                                width={['50%', '60%', '30%']}
                                ml={['-30%', '-30%', '10%']}
                                mb="-2rem"
                                mt={['4rem', '4rem', '-4.5rem']}
                                src="/images/avatar4.svg"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </div>
    );
};

export default Hero;
