import * as React from 'react';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import {
    Text,
    Heading,
    Box,
    Flex,
    InputRightAddon,
    InputGroup,
    Image,
    FormControl,
    Input,
} from '@chakra-ui/core';
import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';
// import UserService from '../../services/user.service';

const main = () => {
    // const [company, setCompany] = React.useState(UserService.getCompany() || {});
    const [loadingSend, setLoadingSend] = React.useState(false);
    const [numberOfRecipients, setNumberOfRecipients] = React.useState(1);
    const [recipients, setRecipients] = React.useState(
        Array(numberOfRecipients)
            .fill('_')
            .map(e => {
                return '';
            }),
    );

    const handleChange = (e, idx) => {
        const editedRecipients = [...recipients];
        editedRecipients[idx] = e.target.value;
        setRecipients(editedRecipients);
    };

    const handleAddRecipient = () => {
        setNumberOfRecipients(prev => prev + 1);
        const copy = [...recipients, ''];
        setRecipients(copy);
    };

    const handleRemoveRecipient = idx => {
        setNumberOfRecipients(prev => prev - 1);
        const copy = [...recipients];
        copy.splice(idx, 1);
        setRecipients(copy);
    };

    const sendReferrals = () => {
        setLoadingSend(true);
        Promise.all(recipients.map(e => axios.post('/referral', {email: e})))
            .then(values => {
                NotificationManager.success('Referrals successfully sent!');
                setNumberOfRecipients(1);
                setRecipients(['']);
            })
            .catch(err => {
                console.log(err);
                NotificationManager.success('Referrals successfully sent!');
            })
            .finally(() => setLoadingSend(false));
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendReferrals();
    };
    return (
        <ProfileMainContent>
            <Box mb={['1.5rem', '2rem']}>
                <Heading
                    mb={['.75rem', '.75rem', 0]}
                    as="h1"
                    fontSize={['18px', '20px', '23px', '25px']}
                >
                    Referral
                </Heading>
            </Box>
            <Box width="100%">
                <Box
                    color="brand.white"
                    px={['1rem', '3rem']}
                    background="#0779E4"
                    borderRadius="10px 10px 0px 0px;"
                >
                    <Flex justify="space-between">
                        <Box mr={[0, '1rem']} py={['.6rem', '1.3rem']}>
                            <Text mb=".5rem" fontSize={['20px', '24px']}>
                                Refer Colleagues & Earn Credit
                            </Text>
                            <Text fontSize={['14px', '16px']}>
                                Introduce a colleague to Checkref and get FREE credit when they send
                                their first reference request.
                            </Text>
                        </Box>
                        <Box textAlign="center">
                            <Box
                                p={['.6rem', '1rem 1.6rem']}
                                borderRadius="0px 0px 5px 5px"
                                backgroundColor="#F37121"
                            >
                                <Text>3</Text>
                                <Text>Credits</Text>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    py={['2rem', '2.5rem']}
                    textAlign="center"
                    backgroundColor="brand.white"
                    borderRadius="0px 0px 10px 10px"
                >
                    <Box px={['.8rem', 0]} maxWidth="550px" mx="auto">
                        <Image mb="1rem" mx="auto" src="/images/referral_mobile_gift.svg" />
                        <Heading
                            mb={['.8rem', '1.1rem']}
                            as="h2"
                            fontSize={['18px', '24px', '32px', '35px']}
                        >
                            Invite other people and get free credit for every referral
                        </Heading>
                        <Text as="small" d="block" mb={['.8rem', '1.2rem']} color="#50514F">
                            Your referrals will get 3 free credits also
                        </Text>

                        <form onSubmit={handleSubmit}>
                            <Box mx="auto" maxWidth="350px">
                                {Array(numberOfRecipients)
                                    .fill('_')
                                    .map((_, idx) => (
                                        <FormControl key={idx} marginBottom={['.8rem', '1.2rem']}>
                                            <InputGroup>
                                                <Input
                                                    borderRadius="0"
                                                    border="1px solid"
                                                    borderColor="#BDBDBD"
                                                    required
                                                    type="email"
                                                    id="email"
                                                    aria-describedby="email"
                                                    placeholder="Recipient's address"
                                                    onChange={e => handleChange(e, idx)}
                                                    value={recipients[idx]}
                                                />
                                                {idx + 1 == numberOfRecipients && idx <= 3 ? (
                                                    <InputRightAddon
                                                        ml="5px"
                                                        backgroundColor="brand.darkBlue"
                                                        color="brand.white"
                                                        cursor="pointer"
                                                        onClick={handleAddRecipient}
                                                    >
                                                        +
                                                    </InputRightAddon>
                                                ) : (
                                                    <InputRightAddon
                                                        ml="5px"
                                                        backgroundColor="brand.darkBlue"
                                                        color="brand.white"
                                                        cursor="pointer"
                                                        onClick={() => handleRemoveRecipient(idx)}
                                                    >
                                                        -
                                                    </InputRightAddon>
                                                )}
                                            </InputGroup>
                                        </FormControl>
                                    ))}
                                <Text as="small" d="block" mb="1rem" color="#50514F">
                                    Tip: Use the Add (+) Icon to add multiple Emails
                                </Text>

                                <Button
                                    isLoading={loadingSend}
                                    mx="auto"
                                    width={['85%', '100%']}
                                    type="submit"
                                >
                                    Send Invite
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>

            <Flex
                flexDir={['column', 'column', 'row']}
                mt="2rem"
                justify="space-around"
                align={['center', 'center', 'stretch']}
            >
                <Box
                    width={['200px', '200px', '23%', '20%']}
                    mb={['.6rem', '.7rem', 0]}
                    p={['1rem 2rem']}
                    textAlign="center"
                    backgroundColor="brand.white"
                    boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="5px"
                >
                    <Text color="#878787">21</Text>
                    <Image mx="auto" my=".5rem" src="/images/gift.svg" />
                    <Text>Referrals sent</Text>
                </Box>
                <Box
                    width={['200px', '200px', '23%', '20%']}
                    mb={['.6rem', '.7rem', 0]}
                    p={['1rem 2rem']}
                    textAlign="center"
                    backgroundColor="brand.white"
                    boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="5px"
                >
                    <Text color="#878787">21</Text>
                    <Image mx="auto" my=".5rem" src="/images/handshake.svg" />
                    <Text>Successful Referrals</Text>
                </Box>
                <Box
                    width={['200px', '200px', '23%', '20%']}
                    mb={['.6rem', '.7rem', 0]}
                    p={['1rem 2rem']}
                    textAlign="center"
                    backgroundColor="brand.white"
                    boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="5px"
                >
                    <Text color="#878787">21</Text>
                    <Image mx="auto" my=".5rem" src="/images/free_credit.svg" />
                    <Text>Free Credit</Text>
                    <Text d="block" as="small">
                        (Your referrals)
                    </Text>
                </Box>
                <Box
                    width={['200px', '200px', '23%', '20%']}
                    mb={['.6rem', '.7rem', 0]}
                    p={['1rem 2rem']}
                    textAlign="center"
                    backgroundColor="brand.white"
                    boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="5px"
                >
                    <Text color="#878787">21</Text>
                    <Image mx="auto" my=".5rem" src="/images/free_credit.svg" />
                    <Text>Free Credit</Text>
                    <Text d="block" as="small">
                        (Your free credits)
                    </Text>
                </Box>
            </Flex>
        </ProfileMainContent>
    );
};

export default main;
