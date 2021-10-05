import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Container from '../../components/container';
import {
    Text,
    Flex,
    Link as ChakraLink,
    Box,
    Image,
    Heading,
    FormControl,
    Input,
} from '@chakra-ui/core';
import Button from '../../components/button';
import {connect} from 'react-redux';
import {NotificationManager} from 'react-notifications';
import {clearErrors, clearMessage, loginUser} from '../../store/actions/authActions';

const LoginFormControl = props => {
    return (
        <FormControl borderRadius="0" border="1px solid #BCBCBC" marginBottom="1rem" {...props} />
    );
};

const main = props => {
    const {
        clearErrors,
        clearMessage,
        loginUser,
        error,
        message,
        loginLoading,
        loginSuccess,
        user: checkrefUser,
    } = props;
    const router = useRouter();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const {email, password} = user;
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(user);
    };

    useEffect(() => {
        if (error) {
            NotificationManager.error(error);
            clearErrors();
        }
    }, [error]);

    useEffect(() => {
        if (message && loginSuccess) {
            setUser({
                email: '',
                password: '',
            });
            NotificationManager.success(message);
            clearMessage();
            setTimeout(() => {
                // this might be changed when handling admin redirect
                if (checkrefUser?.role?.toLowerCase() == 'candidate') {
                    router.push('/candidate/dashboard');
                } else {
                    router.push('/profile/dashboard');
                }
            }, 1000);
        }
    }, [message]);
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
                                as="h4"
                                fontWeight="800"
                                fontSize="20px"
                                mb={['1.5rem', '2rem']}
                                textAlign="center"
                            >
                                Sign in
                            </Heading>

                            <LoginFormControl>
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
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    aria-describedby="email"
                                    placeholder="Email Address"
                                />
                            </LoginFormControl>

                            <LoginFormControl>
                                <Input
                                    background="#EDEDED"
                                    color="brand.darkBlack"
                                    _placeholder={{color: '#444444'}}
                                    borderRadius="0"
                                    border="none"
                                    py="1.4rem"
                                    required
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    aria-describedby="password"
                                    placeholder="Password"
                                />
                            </LoginFormControl>
                            <Button
                                isLoading={loginLoading}
                                loadingText="Submitting"
                                type="submit"
                                width="100%"
                            >
                                Login to your account
                            </Button>
                            <Flex
                                flexDir={['column', 'row']}
                                mt={['2rem']}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Link href="/forgot-password">
                                    <ChakraLink>Forgot password?</ChakraLink>
                                </Link>
                                <Box
                                    d={['none', 'block']}
                                    background="#C4C4C4"
                                    height="8px"
                                    width="8px"
                                    borderRadius="50%"
                                ></Box>
                                <Link href="/register">
                                    <ChakraLink>Signup for an account</ChakraLink>
                                </Link>
                            </Flex>
                        </form>
                    </Box>

                    <Box mt="3rem">
                        <Text lineHeight={['24px']} mt={['4rem']} textAlign="center">
                            &copy;2020 CR80VTY Media Ltd. All Rights Reserved. RC: 1336377
                        </Text>
                        <Box mt={['.6rem']} textAlign="center">
                            <Link href="/terms-conditions">
                                <ChakraLink>Terms of use</ChakraLink>
                            </Link>{' '}
                            &nbsp; | {'    '} &nbsp;
                            <Link href="/privacy-policy">
                                <ChakraLink>Privacy Policy</ChakraLink>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = ({auth: {error, loginLoading, loginSuccess, message, user}}) => ({
    user,
    error,
    loginLoading,
    loginSuccess,
    message,
});

export default connect(mapStateToProps, {loginUser, clearErrors, clearMessage})(main);
