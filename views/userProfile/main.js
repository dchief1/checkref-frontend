import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {
    Text,
    Heading,
    Box,
    Flex,
    FormControl,
    Input,
    FormLabel,
    Select,
    Image,
    Link,
} from '@chakra-ui/core';
import {NotificationManager} from 'react-notifications';
import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';

const main = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        setLoading(true);
        try {
            e.preventDefault();
            NotificationManager.success('Updated successfully');
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProfileMainContent>
            <Box mb={['2.3rem', '2.7rem']}>
                <Heading
                    mb={['.75rem', '.75rem', 0]}
                    as="h1"
                    fontSize={['18px', '20px', '23px', '25px']}
                >
                    User Profile
                </Heading>
            </Box>
            <Flex flexDir={['column', 'column', 'row']} justifyContent="space-between">
                <Box flexBasis={['50%']}>
                    <form onSubmit={handleSubmit}>
                        <FormControl mb="1.5rem">
                            <FormLabel mb="0px" fontWeight="bold" htmlFor="firstName">
                                First name
                            </FormLabel>
                            <Input
                                isRequired
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                backgroundColor="inherit"
                                id="firstName"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb="0px" fontWeight="bold" htmlFor="lastName">
                                Last name
                            </FormLabel>
                            <Input
                                isRequired
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                backgroundColor="inherit"
                                id="lastName"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="email">
                                Email
                            </FormLabel>
                            <Input
                                isRequired
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                backgroundColor="inherit"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="phone">
                                Phone number
                            </FormLabel>
                            <Input
                                isRequired
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                backgroundColor="inherit"
                                id="phone"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <Button isLoading={loading} height="2.3rem" mb="2rem" type={'submit'}>
                            Save
                        </Button>
                    </form>
                </Box>

                <Box mb="2rem"></Box>
            </Flex>
        </ProfileMainContent>
    );
};

export default main;
