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
    const [formValue, setFormValue] = useState({
        otp: '',
        password: '',
    });
    const [requestState, setRequestState] = useState({
        loading: false,
    });

    const {password, otp} = formValue;

    const handleChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const sendResetRequest = async payload => {
        setRequestState({...requestState, loading: true});
        try {
            await axios.post(`${rootEndPoint}/user/reset-password`, payload);
            setFormValue({
                otp: '',
                password: '',
            });
            NotificationManager.success('Password successfully reset!');
            setTimeout(() => {
                router.push('/login');
            }, 2500);
        } catch (err) {
            if (err?.response?.data) {
                NotificationManager.error(err?.response?.data?.message);
            } else {
                NotificationManager.error('Something went wrong. Please try again.');
            }
        } finally {
            setRequestState({...requestState, loading: false});
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendResetRequest(formValue);
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
                                Password Reset
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
                                Enter the otp sent to your email and set a new password.
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
                                    id="otp"
                                    name="otp"
                                    value={otp}
                                    onChange={handleChange}
                                    aria-describedby="otp"
                                    placeholder="Enter otp"
                                />
                            </FormControl>
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
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handleChange}
                                    minLength={6}
                                    aria-describedby="password"
                                    placeholder="Enter your new password"
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
                                    OTP expired?{' '}
                                    <Link href="/forgot-password">
                                        <a>
                                            <ChakraLink color="brand.orange">Resend</ChakraLink>
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
