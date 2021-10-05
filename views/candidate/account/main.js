import * as React from 'react';
import axios from 'axios';
import {
    Box,
    Image,
    Flex,
    FormControl,
    Heading,
    Text,
    FormLabel,
    Input,
    Link,
} from '@chakra-ui/core';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {NotificationManager} from 'react-notifications';
import UserService from '../../../services/user.service';
import CandidateMainContent from '../../../components/candidate/candidateMainContent';
import Button from '../../../components/button';

const main = () => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [displayLinkedIn, setDisplayLinkedIn] = React.useState(false);
    const imageInput = React.useRef(null);

    React.useEffect(() => {
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
        <CandidateMainContent>
            <Box mx="auto" maxWidth="800px">
                <Input type={'file'} onChange={changeImageHandler} hidden={true} ref={imageInput} />
                <Box mb={['2.3rem', '2.7rem']}>
                    <Heading
                        mb={['.75rem', '.75rem', 0]}
                        as="h1"
                        fontSize={['18px', '20px', '23px', '25px']}
                    >
                        Account
                    </Heading>
                </Box>
                <Flex
                    flexDir={['column-reverse', 'column-reverse', 'row']}
                    justifyContent="space-between"
                >
                    <Box flexBasis={['60%']}>
                        <form onSubmit={submit}>
                            {!user.linkedIn && (
                                <Button
                                    width={['100%', '65%', '80%', '65%']}
                                    mb="1.5rem"
                                    backgroundColor="#0E76A8"
                                    _hover={{backgroundColor: '#0E76A8'}}
                                    onClick={() => setDisplayLinkedIn(true)}
                                    d={displayLinkedIn ? 'none' : 'flex'}
                                >
                                    <RiLinkedinBoxLine
                                        size={24}
                                        style={{marginRight: '10px'}}
                                        color="#ffffff"
                                    />{' '}
                                    Verify with LinkedIn
                                </Button>
                            )}

                            {displayLinkedIn && (
                                <FormControl mt="1rem">
                                    <FormLabel mb="0px" fontWeight="bold" htmlFor="firstName">
                                        Your LinkedIn profile link
                                    </FormLabel>
                                    <Input
                                        isRequired
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="url"
                                        backgroundColor="inherit"
                                        id="linkedIn"
                                        value={user.linkedIn}
                                        onChange={updateUser('linkedIn')}
                                    />
                                </FormControl>
                            )}

                            <FormControl my="1.5rem">
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
                                    backgroundColor="inherit"
                                    id="firstName"
                                    value={user.firstName}
                                    onChange={updateUser('firstName')}
                                />
                            </FormControl>

                            <FormControl mb="1.5rem">
                                <FormLabel mb="0px" fontWeight="bold" htmlFor="lastName">
                                    Last Name
                                </FormLabel>
                                <Input
                                    mt="0px"
                                    border="0"
                                    borderRadius="0"
                                    borderBottom="1px solid #bdbdbd"
                                    width={['100%', '65%', '80%', '65%']}
                                    type="text"
                                    backgroundColor="inherit"
                                    id="lastName"
                                    value={user.lastName}
                                    onChange={updateUser('lastName')}
                                />
                            </FormControl>

                            <FormControl mb="1.5rem">
                                <FormLabel mb="0px" fontWeight="bold" htmlFor="phoneNumber">
                                    Phone Number
                                </FormLabel>
                                <Input
                                    mt="0px"
                                    border="0"
                                    borderRadius="0"
                                    borderBottom="1px solid #bdbdbd"
                                    width={['100%', '65%', '80%', '65%']}
                                    type="text"
                                    backgroundColor="inherit"
                                    id="phoneNumber"
                                    isDisabled={true}
                                    value={user.phone}
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
                                    type="email"
                                    backgroundColor="inherit"
                                    id="email"
                                    isDisabled={true}
                                    value={user.email}
                                />
                            </FormControl>

                            <Button
                                isLoading={loading}
                                px="5rem"
                                height="2.3rem"
                                mb="2rem"
                                type={'submit'}
                            >
                                Save
                            </Button>
                        </form>
                    </Box>

                    <Flex
                        flexDir="column"
                        justifyContent="flex-start"
                        flexBasis={['35%']}
                        align="center"
                        mb="2rem"
                    >
                        <Image
                            mx={[0, 0, 'auto']}
                            p="1.6rem"
                            backgroundColor="#e9e9e9"
                            borderRadius="50%"
                            maxWidth="50%"
                            height="auto"
                            cursor="pointer"
                            onClick={() => imageInput.current.click()}
                            src={user.image || '/images/upload_logo.svg'}
                        />

                        <Text
                            onClick={() => imageInput.current.click()}
                            fontSize={['18px', '21px']}
                            mt="1.5rem"
                            cursor="pointer"
                        >
                            <Link>Upload your picture here</Link>
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </CandidateMainContent>
    );
};

export default main;
