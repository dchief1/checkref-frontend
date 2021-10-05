import React from 'react';
import Link from 'next/link';
import Container from '../../components/container';
import {Text, Link as ChakraLink, Box, Image, Heading, FormControl, Input} from '@chakra-ui/core';
import Button from '../../components/button';

const RegisterFormControl = props => {
    return (
        <FormControl borderRadius="0" border="1px solid #BCBCBC" marginBottom="1rem" {...props} />
    );
};

const RegisterFormInput = props => {
    return (
        <Input
            background="#EDEDED"
            color="brand.lightBlack"
            _placeholder={{color: '#444444'}}
            borderRadius="0"
            border="none"
            py="1.4rem"
            required
            {...props}
        />
    );
};

const main = () => {
    return (
        <Box
            pt=".5rem"
            pb="4rem"
            minHeight="100vh"
            color="brand.white"
            background="linear-gradient(180deg, #18287E 0%, #111D5E 100%)"
        >
            <Container>
                <Box mx="auto" pt={['2rem']} mb={['3rem']}>
                    <Link href="/">
                        <a>
                            {' '}
                            <Image mx="auto" src="/images/login_logo.svg" />
                        </a>
                    </Link>
                </Box>
                <Box>
                    <Box
                        mx="auto"
                        backgroundColor="brand.white"
                        borderRadius="4px"
                        maxWidth={['550px']}
                        px={['1.5rem', '3rem', '5rem']}
                        py={['2rem']}
                        color="brand.darkBlack"
                    >
                        <form>
                            <Heading
                                fontWeight="800"
                                fontSize="20px"
                                mb={['1.5rem', '2rem']}
                                textAlign="center"
                            >
                                Create your Free Account
                            </Heading>
                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="first_name"
                                    aria-describedby="first_name"
                                    placeholder="First Name"
                                />
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="last_name"
                                    aria-describedby="last_name"
                                    placeholder="Last Name"
                                />
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="phone_number"
                                    aria-describedby="phone_number"
                                    placeholder="Phone Number"
                                />
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="email"
                                    id="email"
                                    aria-describedby="email"
                                    placeholder="Email Address"
                                />
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="password"
                                    id="password"
                                    aria-describedby="password"
                                    placeholder="Password"
                                />
                            </RegisterFormControl>

                            <Button type="submit" width="100%">
                                Create Free Account
                            </Button>
                            <Box mt={['2rem']}>
                                <Text textAlign="center">
                                    By Creating an account, you agree to our {'  '}
                                    <Link href="/terms-conditions">
                                        <a>
                                            <ChakraLink color="brand.orange">
                                                Terms and Conditions
                                            </ChakraLink>
                                        </a>
                                    </Link>
                                    . Read our{' '}
                                    <Link href="/privacy-policy">
                                        <a>
                                            <ChakraLink color="brand.orange">
                                                Privacy Policy
                                            </ChakraLink>
                                        </a>
                                    </Link>
                                </Text>
                            </Box>
                        </form>
                    </Box>

                    <Text textAlign="center" mt="1.3rem">
                        Already have an account?{' '}
                        <Link href="/login">
                            <a>
                                <ChakraLink color="brand.orange">Login</ChakraLink>
                            </a>
                        </Link>
                    </Text>

                    <Box mt="1.5rem">
                        <Text lineHeight={['24px']} mt={['3.5rem']} textAlign="center">
                            &copy;2020 CR80VTY Media Ltd. All Rights Reserved. RC: 1336377
                        </Text>
                        <Box mt={['.6rem']} textAlign="center">
                            <Link href="/terms-conditions">
                                <a>
                                    <ChakraLink>Terms of use</ChakraLink>
                                </a>
                            </Link>{' '}
                            &nbsp; | {'    '} &nbsp;
                            <Link href="/privacy-policy">
                                <a>
                                    <ChakraLink>Privacy Policy</ChakraLink>
                                </a>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default main;
