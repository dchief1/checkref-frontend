import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Container from '../../components/container';
import {Text, Link as ChakraLink, Box, Image, Heading, FormControl, Input} from '@chakra-ui/core';
import Button from '../../components/button';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import {rootEndPoint} from '../../utils/endpoints';

const main = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [requestState, setRequestState] = useState({
        loading: false,
    });

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const sendForgotRequest = async email => {
        setRequestState({...requestState, loading: true});
        try {
            await axios.post(`${rootEndPoint}/user/send-password-otp`, {email});
            setEmail('');
            NotificationManager.success('Otp successfully sent to your email!');
            setTimeout(() => {
                router.push('/password-reset');
            }, 2500);
        } catch (err) {
            NotificationManager.error('Something went wrong. Please try again.');
        } finally {
            setRequestState({...requestState, loading: false});
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendForgotRequest(email);
    };
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
                        <form onSubmit={handleSubmit}>
                            <Heading
                                fontWeight="800"
                                fontSize="20px"
                                mb={['.5rem']}
                                textAlign="center"
                            >
                                Forgot your password?
                            </Heading>

                            <Text
                                mx="auto"
                                maxWidth={['300px']}
                                fontWeight={['bold']}
                                as="small"
                                d={['block']}
                                mb={['1.5rem', '2rem']}
                                textAlign={['center']}
                            >
                                Enter your email address below to get an otp sent to you.
                            </Text>

                            <FormControl
                                borderRadius="0"
                                border="1px solid #BCBCBC"
                                marginBottom="1rem"
                            >
                                <Input
                                    background="#EDEDED"
                                    color="brand.lightBlack"
                                    _placeholder={{color: '#444444'}}
                                    borderRadius="0"
                                    border="none"
                                    py="1.4rem"
                                    required
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleChange}
                                    aria-describedby="email"
                                    placeholder="Enter your Email Address"
                                />
                            </FormControl>

                            <Button isLoading={requestState.loading} type="submit" width="100%">
                                Request new password
                            </Button>
                            <Box mt={['2rem']}>
                                <Text mb={['.6rem']} textAlign="center">
                                    Remember your password?{' '}
                                    <Link href="/login">
                                        <a>
                                            <ChakraLink color="brand.orange">Login</ChakraLink>
                                        </a>
                                    </Link>
                                </Text>

                                <Text textAlign="center">
                                    Got the otp?{' '}
                                    <Link href="/password-reset">
                                        <a>
                                            <ChakraLink color="brand.orange">
                                                Set a new password
                                            </ChakraLink>
                                        </a>
                                    </Link>
                                </Text>
                            </Box>
                        </form>
                    </Box>

                    <Box mt="3rem">
                        <Text lineHeight={['24px']} mt={['4rem']} textAlign="center">
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
