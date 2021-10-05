import React from 'react';
import {
    Heading,
    Box,
    Image,
    Text,
    Flex,
    List,
    ListItem,
    ListIcon,
    FormControl,
    Input,
    Button,
} from '@chakra-ui/core';
import Link from 'next/link';
import Container from '../../components/container';

const HowItWorksFormControl = props => {
    return (
        <FormControl borderRadius="0" border="1px solid #666666" marginBottom="1rem" {...props} />
    );
};

const HowItWorksFlex = props => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={['2.5rem', '2.5rem', '3.2rem']}
            {...props}
        />
    );
};

const HowItWorks = () => {
    return (
        <>
            <Box id="how_it_works" py="3rem" backgroundColor="brand.skyBlue">
                <Container>
                    <Heading
                        fontWeight="800"
                        size="xl"
                        textAlign="center"
                        as="h2"
                        marginBottom={['2rem', '2rem', '2.6rem']}
                    >
                        How it works
                    </Heading>
                    <HowItWorksFlex>
                        <Box flexBasis="90%">
                            <Image width={['1.8rem']} mb="1rem" src="/icons/plus.svg" />
                            <Heading size="lg" mb="1rem" as="h4">
                                The Recruiter
                            </Heading>
                            <Text maxWidth="550px" color="brand.lightBlack" fontSize={['16px']}>
                                The Recruiter creates a new reference request on Checkref platform{' '}
                                providing the details of the Candidate to be referenced.
                            </Text>
                        </Box>
                        <Box display={['none', 'none', 'block']}>
                            <Image src="/images/how_works1.svg" />
                        </Box>
                    </HowItWorksFlex>
                    <HowItWorksFlex>
                        <Box ml="-1.2rem" display={['none', 'none', 'block']}>
                            <Image src="/images/how_works2.svg" />
                        </Box>
                        <Box flexBasis="90%">
                            <Box ml={[0, 0, 'auto']} maxWidth="550px">
                                <Image width={['1.5rem']} mb="1rem" src="/icons/envelop.svg" />
                                <Heading size="lg" mb="1rem" as="h4">
                                    The Job Seeker
                                </Heading>
                                <Text color="brand.lightBlack" fontSize={['16px']}>
                                    The Candidate receives the reference request with a prompt to
                                    add contact details of the most recent Referees. Once complete,
                                    Checkref collects the references via our secure platform.
                                </Text>
                            </Box>
                        </Box>
                    </HowItWorksFlex>
                    <HowItWorksFlex>
                        <Box flexBasis="90%">
                            <Image width={['1.8rem']} mb="1rem" src="/icons/verify.svg" />
                            <Heading size="lg" mb="1rem" as="h4">
                                The Referee
                            </Heading>
                            <Text maxWidth="550px" color="brand.lightBlack" fontSize={['16px']}>
                                The referee completes and submits a simple questionnaire via our
                                secure platform. Automated reminders are sent at intervals to ensure
                                this is completed.
                            </Text>
                        </Box>
                        <Box display={['none', 'none', 'block']}>
                            <Image src="/images/how_works3.svg" />
                        </Box>
                    </HowItWorksFlex>
                    <HowItWorksFlex mb="1.5rem">
                        <Box ml="-1.2rem" display={['none', 'none', 'block']}>
                            <Image src="/images/how_works4.svg" />
                        </Box>
                        <Box flexBasis="90%">
                            <Box maxWidth="550px" ml={[0, 0, 'auto']}>
                                <Image width={['1.8rem']} mb="1rem" src="/icons/report.svg" />
                                <Heading size="lg" mb="1rem" as="h4">
                                    The Report
                                </Heading>
                                <Text maxWidth="550px" color="brand.lightBlack" fontSize={['16px']}>
                                    Once completed, the Recruiter is sent a report with detailed
                                    feedback about the Candidate.
                                </Text>
                            </Box>
                        </Box>
                    </HowItWorksFlex>
                </Container>
            </Box>
            <Box py="3rem" backgroundColor="brand.white">
                <Container>
                    <Flex
                        flexDirection={['column', 'column', 'row']}
                        justifyContent="space-between"
                    >
                        <Box marginBottom={['2rem', '2rem', 0]} flexBasis="50%">
                            <Heading fontWeight="800" mb="1.3rem" size="lg" as="h4">
                                Do you know who you are hiring?
                            </Heading>
                            <Text mb="1.7rem">
                                Register with Checkref today and get your first 3 Employee reference
                                checks FREE.
                            </Text>
                            <Heading mb="1rem" fontWeight="800" size="md" as="h5">
                                Benefits include
                            </Heading>
                            <List marginLeft=".5rem" spacing={3}>
                                <ListItem d="flex" color="brand.lightBlack">
                                    <ListIcon mt={['5px']} icon="markGood" />
                                    Request Employee Reference in 30 seconds
                                </ListItem>
                                <ListItem d="flex" color="brand.lightBlack">
                                    {' '}
                                    <ListIcon mt={['5px']} icon="markGood" /> Customize reference
                                    questions{' '}
                                </ListItem>
                                <ListItem d="flex" color="brand.lightBlack">
                                    {' '}
                                    <ListIcon mt={['5px']} icon="markGood" /> Fully automated email
                                    and text reminders
                                </ListItem>
                                <ListItem d="flex" color="brand.lightBlack">
                                    {' '}
                                    <ListIcon mt={['5px']} icon="markGood" /> Team and user
                                    management{' '}
                                </ListItem>
                                <ListItem d="flex" color="brand.lightBlack">
                                    {' '}
                                    <ListIcon mt={['5px']} icon="markGood" /> Streamline your
                                    employee onboarding process
                                </ListItem>
                                <ListItem d="flex" color="brand.lightBlack">
                                    {' '}
                                    <ListIcon mt={['5px']} icon="markGood" /> Increase reference
                                    validation and compliance
                                </ListItem>
                            </List>
                        </Box>
                        <Box mb={['1.5rem', '1.5rem', 0]} flexBasis="50%">
                            <Box
                                width={['100%', '100%', '75%']}
                                boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
                                background="brand.white"
                                marginLeft="auto"
                                padding="1.6rem 2.4rem"
                            >
                                <form>
                                    <Heading
                                        textAlign="center"
                                        mb="1.2rem"
                                        fontWeight="800"
                                        size="md"
                                        as="h5"
                                    >
                                        Create your Free Account
                                    </Heading>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            required
                                            type="text"
                                            id="company_name"
                                            aria-describedby="company_name"
                                            placeholder="Company Name"
                                        />
                                    </HowItWorksFormControl>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            required
                                            type="text"
                                            id="first_name"
                                            aria-describedby="first_name"
                                            placeholder="First Name"
                                        />
                                    </HowItWorksFormControl>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            required
                                            type="text"
                                            id="last_name"
                                            aria-describedby="last_name"
                                            placeholder="Last Name"
                                        />
                                    </HowItWorksFormControl>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            required
                                            type="text"
                                            id="phone_number"
                                            aria-describedby="phone_number"
                                            placeholder="Phone Number"
                                        />
                                    </HowItWorksFormControl>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            required
                                            type="email"
                                            id="email"
                                            aria-describedby="email"
                                            placeholder="Email Address"
                                        />
                                    </HowItWorksFormControl>
                                    <HowItWorksFormControl>
                                        <Input
                                            borderRadius="0"
                                            border="none"
                                            py="1.4rem"
                                            type="password"
                                            id="password"
                                            aria-describedby="password"
                                            placeholder="Password"
                                        />
                                    </HowItWorksFormControl>
                                    <Button
                                        _focus={{outline: 0}}
                                        backgroundColor="brand.orange"
                                        fontWeight="normal"
                                        width={['100%']}
                                        type="submit"
                                        borderRadius="4px"
                                        color="brand.white"
                                        px="2rem"
                                        height="2.8rem"
                                        _hover={{backgroundColor: 'brand.orange'}}
                                    >
                                        Create Free Account
                                    </Button>
                                    <Text
                                        color="brand.lightBlack"
                                        mt="1rem"
                                        fontSize={['12.8px', '16px']}
                                    >
                                        By creating an Account, you agree to our{' '}
                                        <Link href="/terms">
                                            <Text color="brand.orange" as="a">
                                                Terms and Conditions
                                            </Text>
                                        </Link>
                                        . Read our{' '}
                                        <Link href="/privacy-policy">
                                            <Text color="brand.orange" as="a">
                                                Privacy Policy
                                            </Text>
                                        </Link>
                                    </Text>
                                </form>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box pt="3rem" pb="4rem" backgroundColor="brand.skyBlue">
                <Container>
                    <Heading
                        fontWeight="800"
                        fontSize={['25px', '30px', '36px']}
                        textAlign="center"
                        as="h2"
                        marginBottom={['2rem', '2.5rem']}
                    >
                        Trusted by 100+ Companies
                    </Heading>
                    <Flex
                        flexDir={['column', 'column', 'row']}
                        // style={{gap: '5rem'}}
                        justifyContent={['space-between']}
                        alignItems="center"
                        marginBottom="1.5rem"
                    >
                        <Image
                            width={['40%', '40%', '15%']}
                            mb={['3rem', '4rem', 0]}
                            src="/images/payflow.svg"
                        />
                        <Image mb={['4rem', '4rem', 0]} src="/images/mkobo.svg" />
                        <Image mb={['4rem', '4rem', 0]} src="/images/hyt.svg" />
                        <Image mb={['4rem', '4rem', 0]} src="/images/payplus.svg" />
                        <Image src="/images/h.svg" />
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default HowItWorks;
