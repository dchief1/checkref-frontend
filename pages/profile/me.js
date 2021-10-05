import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import PrivateComponent from '../../components/privateComponent';
import ProfileSideNav from '../../components/profileSideNav';
import ProfileMainContent from '../../components/profileMainContent';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Link,
    Text,
} from '@chakra-ui/core';
import UserService from '../../services/user.service';
import Button from '../../components/button';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

const Index = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const imageInput = useRef(null);

    useEffect(() => {
        setUser(UserService.getUser());
    }, []);

    const updateUser = key => event => {
        setUser({...user, [key]: event.target.value});
    };

    function changeImageHandler() {
        if (imageInput.current.files.length === 0) {
            return;
        }

        /** @type {File} */
        const file = imageInput.current.files[0];
        if (file.size > 300000) {
            alert('maximum file size of image should be 300kb');
        }
        setUser({...user, image: window.URL.createObjectURL(file)});
    }

    async function uploadUserImage() {
        if (imageInput.current.files.length === 0) {
            return user.image || '';
        }
        /** @type {File} */
        const file = imageInput.current.files[0];
        const formData = new FormData();
        formData.append('image', file, file.name.replace(/\s/gi, '_'));

        const data = await axios.post('/user/image', formData).then(res => res.data.data);
        return data.image;
    }

    const submit = async e => {
        setLoading(true);
        try {
            e.preventDefault();

            const [res, image] = await Promise.all([axios.put('/user', user), uploadUserImage()]);

            if (res.status === 200) {
                NotificationManager.success(res.data.message);
                setUser(res.data.data);
                UserService.setUser({...res.data.data, image});
                setUser({
                    ...user,
                    image,
                });
            }
        } catch (err) {
            setLoading(false);
            if (!err.response) {
                return;
            }
            NotificationManager.error(err.response.data.message);
        }
        setLoading(false);
    };

    return (
        <PrivateComponent>
            <Head>
                <title>Checkref | Company Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <ProfileSideNav />
                <ProfileMainContent>
                    <Input
                        type={'file'}
                        onChange={changeImageHandler}
                        hidden={true}
                        ref={imageInput}
                    />

                    <Box mb={['2.3rem', '2.7rem']}>
                        <Heading
                            mb={['.75rem', '.75rem', 0]}
                            as="h1"
                            fontSize={['18px', '20px', '23px', '25px']}
                        >
                            User Profile
                        </Heading>
                    </Box>
                    <Flex
                        flexDir={['column-reverse', 'column-reverse', 'row']}
                        justifyContent="space-evenly"
                    >
                        <Box flexBasis={['50%']}>
                            <form onSubmit={submit}>
                                <FormControl mb="1.5rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="firstName">
                                        First Name
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        value={user.firstName}
                                        onChange={updateUser('firstName')}
                                        backgroundColor="inherit"
                                        id="firstName"
                                    />
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="lastName">
                                        Last name
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        value={user.lastName}
                                        onChange={updateUser('lastName')}
                                        backgroundColor="inherit"
                                        id="lastName"
                                    />
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="email">
                                        Email
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        isDisabled={true}
                                        value={user.email}
                                        backgroundColor="inhserit"
                                        id="email"
                                    />
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="phone">
                                        Phone
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        isDisabled={true}
                                        value={user.phone}
                                        backgroundColor="inherit"
                                        id="phone"
                                    />
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="team">
                                        Team
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        isDisabled={true}
                                        value={user?.team?.name}
                                        backgroundColor="inhserit"
                                        id="team"
                                    />
                                </FormControl>

                                <Button
                                    height="2.3rem"
                                    mb="2rem"
                                    type={'submit'}
                                    isLoading={loading}
                                >
                                    Save
                                </Button>
                            </form>
                        </Box>

                        <Flex align="center" flexDir="column" mb="2rem">
                            <Box>
                                <Image
                                    mx={[0, 0, 'auto']}
                                    p="1.6rem"
                                    backgroundColor="#e9e9e9"
                                    borderRadius="50%"
                                    height={'200px'}
                                    width="auto"
                                    cursor="pointer"
                                    onClick={() => imageInput.current.click()}
                                    src={user.image || '/images/upload_logo.svg'}
                                />
                            </Box>
                            <Text
                                fontSize={['18px', '21px']}
                                mt="1.5rem"
                                onClick={() => imageInput.current.click()}
                            >
                                <Link textAlign="center">Upload user image</Link>
                            </Text>
                        </Flex>
                    </Flex>
                </ProfileMainContent>
            </div>
        </PrivateComponent>
    );
};

export default Index;
