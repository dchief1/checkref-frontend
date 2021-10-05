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
import {nigeriaStates, companySectors} from '../../utils/companyProfileData.json';
import {NotificationManager} from 'react-notifications';
import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';
import UserService from '../../services/user.service';
import {isInAmpMode} from 'next/amp';

const main = () => {
    const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(false);
    const imageInput = useRef(null);
    useEffect(() => {
        const user = UserService.getUser();
        if (user == null) {
            return;
        }
        console.log(user);
        setCompany(user.company);
    }, []);

    function changeImageHandler() {
        if (imageInput.current.files.length === 0) {
            return;
        }

        /** @type {File} */
        const file = imageInput.current.files[0];
        if (file.size > 300000) {
            alert('maximum file size of logo should be 300kb');
        }
        setCompany({...company, logo: window.URL.createObjectURL(file)});
    }

    async function uploadCompanyLogo() {
        if (imageInput.current.files.length === 0) {
            return company.logo || '';
        }
        /** @type {File} */
        const file = imageInput.current.files[0];
        const formData = new FormData();
        formData.append('logo', file, file.name.replace(/\s/gi, '_'));

        const data = await axios.post('/company/logo', formData).then(res => res.data.data);
        return data.logo;
    }

    const updateCompany = key => event => {
        if (key === 'rc') {
            const value = event.target.value;
            if (value.length > 8 || /\D/.test(value)) {
                return;
            }
        }
        setCompany({...company, [key]: event.target.value});
    };

    const submit = async e => {
        setLoading(true);
        try {
            e.preventDefault();

            const [res, logo] = await Promise.all([
                axios.put('/company', company),
                uploadCompanyLogo(),
            ]);

            if (res.status === 200) {
                NotificationManager.success(res.data.message);
                setCompany(res.data.data);
                const user = UserService.getUser();
                UserService.setUser({...user, company: {...company, logo}});
            }
        } catch (err) {
            if (!err.response) {
                return;
            }
            NotificationManager.error(err.response.data.message);
        }
        setLoading(false);
    };

    console.dir(imageInput.current);

    return (
        <ProfileMainContent>
            <Input type={'file'} onChange={changeImageHandler} hidden={true} ref={imageInput} />
            <Box mb={['2.3rem', '2.7rem']}>
                <Heading
                    mb={['.75rem', '.75rem', 0]}
                    as="h1"
                    fontSize={['18px', '20px', '23px', '25px']}
                >
                    Company Profile
                </Heading>
            </Box>
            <Flex
                flexDir={['column-reverse', 'column-reverse', 'row']}
                justifyContent="space-evenly"
            >
                <Box flexBasis={['50%']}>
                    <form onSubmit={submit}>
                        <FormControl mb="1.5rem">
                            <FormLabel mb="0px" fontWeight="bold" htmlFor="organizationName">
                                Organization Name
                            </FormLabel>
                            <Input
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                value={company.name}
                                onChange={updateCompany('name')}
                                backgroundColor="inherit"
                                id="organizationName"
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb="0px" fontWeight="bold" htmlFor="organizationEmail">
                                Organization Email
                            </FormLabel>
                            <Input
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="email"
                                value={company.email}
                                onChange={updateCompany('email')}
                                backgroundColor="inherit"
                                id="organizationEmail"
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="businessSector">
                                Business RC
                            </FormLabel>
                            <Input
                                mt="0px"
                                border="0"
                                borderRadius="0"
                                borderBottom="1px solid #bdbdbd"
                                width={['100%', '65%', '80%', '65%']}
                                type="text"
                                value={company.rc || ''}
                                onChange={updateCompany('rc')}
                                backgroundColor="inherit"
                                id="organizationName"
                            />
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="businessSector">
                                Business Sector
                            </FormLabel>
                            <Select
                                backgroundColor="inherit"
                                border="1px solid #bdbdbd"
                                borderRadius="4px"
                                value={company.sector || ''}
                                onChange={updateCompany('sector')}
                                width={['100%', '65%', '80%', '65%']}
                                placeholder="Select sector"
                            >
                                {companySectors.map(sector => (
                                    <option key={sector} value={sector}>
                                        {sector}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="city">
                                City/State
                            </FormLabel>
                            <Select
                                backgroundColor="inherit"
                                border="1px solid #bdbdbd"
                                borderRadius="4px"
                                width={['100%', '65%', '80%', '65%']}
                                value={company.state || ''}
                                onChange={updateCompany('state')}
                                placeholder="Select state"
                            >
                                {nigeriaStates.map(state => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl mb="1.5rem">
                            <FormLabel mb=".6rem" fontWeight="bold" htmlFor="country">
                                Country
                            </FormLabel>
                            <Select
                                backgroundColor="inherit"
                                border="1px solid #bdbdbd"
                                borderRadius="4px"
                                width={['100%', '65%', '80%', '65%']}
                                value={'Nigeria'}
                                isDisabled={true}
                                placeholder="Select country"
                            >
                                <option value={'Nigeria'}>Nigeria</option>
                            </Select>
                        </FormControl>

                        <Button height="2.3rem" mb="2rem" type={'submit'} isLoading={loading}>
                            Save
                        </Button>
                    </form>
                </Box>

                <Box mb="2rem">
                    <Box>
                        <Image
                            cursor="pointer"
                            onClick={() => imageInput.current.click()}
                            mx={[0, 0, 'auto']}
                            p="1.6rem"
                            backgroundColor="#e9e9e9"
                            borderRadius="50%"
                            height={'200px'}
                            width="auto"
                            src={company.logo || '/images/upload_logo.svg'}
                        />
                    </Box>
                    <Text
                        fontSize={['18px', '21px']}
                        mt="1.5rem"
                        onClick={() => imageInput.current.click()}
                    >
                        <Link>Upload company logo here</Link>
                    </Text>
                </Box>
            </Flex>
        </ProfileMainContent>
    );
};

export default main;
