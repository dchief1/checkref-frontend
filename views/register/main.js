import React, {useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Container from '../../components/container';
import {Text, Link as ChakraLink, Box, Image, Heading, FormControl, Input} from '@chakra-ui/core';
import Button from '../../components/button';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import {NotificationManager} from 'react-notifications';
import {registerUser, clearErrors, clearMessage} from '../../store/actions/authActions';

const RegisterFormControl = props => {
    return <FormControl marginBottom="1rem" {...props} />;
};

const RegisterFormInput = props => {
    return (
        <Input
            background="#EDEDED"
            color="brand.lightBlack"
            _placeholder={{color: '#444444'}}
            borderRadius="0"
            borderStyle="1px solid"
            borderColor="#BCBCBC"
            py="1.4rem"
            required
            {...props}
        />
    );
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.phone) {
        errors.phone = 'Phone number is required';
    }
    if (!values.company) {
        errors.company = 'Company name is required';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
};

const main = props => {
    const {
        registerUser,
        message,
        registerLoading,
        registerSuccess,
        error,
        clearErrors,
        clearMessage,
    } = props;
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            company: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            registerUser({
                ...values,
                role: 'admin',
                // above will be edited later
            });
        },
    });

    useEffect(() => {
        if (message && registerSuccess) {
            formik.resetForm();
            NotificationManager.success(message);
            clearMessage();
            setTimeout(() => {
                router.push('/login');
            }, 2100);
        }
    }, [message]);

    useEffect(() => {
        if (error) {
            NotificationManager.error(error);
            clearErrors();
        }
    }, [error]);

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
                        <form onSubmit={formik.handleSubmit}>
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
                                    id="company"
                                    aria-describedby="company_name"
                                    placeholder="Company Name"
                                    name="company"
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.company && formik.errors.company ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.company}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="firstName"
                                    aria-describedby="first_name"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.firstName}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="lastName"
                                    aria-describedby="last_name"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.lastName}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="text"
                                    id="phone"
                                    aria-describedby="phone_number"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.phone}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="email"
                                    id="email"
                                    aria-describedby="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.email}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <RegisterFormControl>
                                <RegisterFormInput
                                    type="password"
                                    id="password"
                                    aria-describedby="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <Box as="small" color="red.400">
                                        {formik.errors.password}
                                    </Box>
                                ) : null}
                            </RegisterFormControl>

                            <Button
                                isLoading={registerLoading}
                                loadingText="Submitting"
                                type="submit"
                                width="100%"
                            >
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

const mapStateToProps = ({auth: {error, registerLoading, registerSuccess, message}}) => ({
    error,
    registerLoading,
    registerSuccess,
    message,
});

export default connect(mapStateToProps, {registerUser, clearErrors, clearMessage})(main);
