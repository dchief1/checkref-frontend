import React from 'react';
import {useRouter} from 'next/router';
import Container from '../../components/container';
import {Heading, Flex, Button, Box, Text, List, ListIcon, ListItem} from '@chakra-ui/core';

const PricingBox = props => {
    return (
        <Box
            boxShadow="0px 11px 11px rgba(233, 233, 233, 0.25)"
            backgroundColor="brand.white"
            p="1rem 2.3rem"
            {...props}
        />
    );
};

const PricingButton = props => {
    const router = useRouter();
    const handleClick = () => {
        router
            .push({
                pathname: '/register',
            })
            .then(() => window.scrollTo(0, 0));
    };
    return (
        <Button
            backgroundColor="brand.orange"
            fontWeight="normal"
            width={['80%']}
            d="flex"
            mx="auto"
            mt="1.5rem"
            type="submit"
            borderRadius="4px"
            color="brand.white"
            px="2rem"
            height="2.4rem"
            _focus={{outline: 0}}
            _hover={{backgroundColor: 'brand.orange'}}
            {...props}
            onClick={handleClick}
        />
    );
};

const Pricing = () => {
    const router = useRouter();
    return (
        <>
            <Box id="pricing" py="4rem" pt={['2.5rem', '4rem']}>
                <Container>
                    <Heading
                        mt=".7rem"
                        mb="1.2rem"
                        fontWeight="800"
                        fontSize={['25px', '30px', '36px']}
                        textAlign="center"
                        as="h2"
                        marginBottom="3.7rem"
                    >
                        Pricing
                    </Heading>
                    <Flex
                        flexDir={['column', 'column', 'column', 'row']}
                        color="#444444"
                        justifyContent={[
                            'space-around',
                            'space-around',
                            'space-around',
                            'space-around',
                            'space-evenly',
                        ]}
                    >
                        <Box
                            mx="auto"
                            width={['100%', '70%', '50%', 'auto']}
                            mb={['4rem', '4rem', '4rem', 0]}
                        >
                            <Box
                                height="10px"
                                background="#9d9d9d"
                                borderRadius="10px 10px 0 0 "
                            ></Box>
                            <PricingBox>
                                <Text
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="25px"
                                    mb=".7rem"
                                >
                                    STANDARD
                                </Text>
                                <Text
                                    textAlign="center"
                                    color="brand.orange"
                                    fontSize="16px"
                                    mb=".8rem"
                                >
                                    Pay As You Go
                                </Text>
                                <Text
                                    mb=".5rem"
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="40px"
                                >
                                    ₦500
                                </Text>
                                <List marginBottom="1rem" marginLeft=".5rem" spacing={3}>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Pay per reference check
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> 1 User
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Standard Questions
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> No Team Management
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" />
                                        Email support
                                    </ListItem>
                                </List>

                                <PricingButton>FREE SIGN-UP</PricingButton>
                            </PricingBox>
                        </Box>
                        <Box
                            mx="auto"
                            width={['100%', '70%', '50%', 'auto']}
                            mb={['4rem', '4rem', '4rem', 0]}
                        >
                            <Box
                                height="10px"
                                borderRadius="10px 10px 0 0 "
                                backgroundColor="#0779e4"
                            ></Box>
                            <PricingBox>
                                <Text
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="25px"
                                    mb=".7rem"
                                >
                                    PROFESSIONAL
                                </Text>
                                <Text
                                    textAlign="center"
                                    color="brand.orange"
                                    fontSize="16px"
                                    mb=".8rem"
                                >
                                    Get 2 FREE Credits
                                </Text>
                                <Text
                                    mb=".5rem"
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="40px"
                                >
                                    ₦5,000
                                </Text>
                                <List marginBottom="1rem" marginLeft=".5rem" spacing={3}>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> 12 reference checks
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> 5 users
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Unlimited Questions
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Team Management
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" />
                                        Email & Phone Support
                                    </ListItem>
                                </List>

                                <PricingButton>FREE SIGN-UP</PricingButton>
                            </PricingBox>
                        </Box>

                        <Box mx="auto" width={['100%', '70%', '50%', 'auto']}>
                            <Box
                                height="10px"
                                borderRadius="10px 10px 0 0 "
                                backgroundColor="#ffc729"
                            ></Box>
                            <PricingBox>
                                <Text
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="25px"
                                    mb=".7rem"
                                >
                                    ENTERPRISE
                                </Text>
                                <Text mb=".8rem" color="brand.orange" textAlign="center">
                                    With Bulk Savings
                                </Text>
                                <Text
                                    mb=".5rem"
                                    textAlign="center"
                                    fontWeight="500"
                                    fontSize="40px"
                                >
                                    ₦50,000
                                </Text>
                                <List marginBottom="1rem" marginLeft=".5rem" spacing={3}>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> 120 reference checks
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Unlimited Users
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Unlimited Questions
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" /> Team Management
                                    </ListItem>
                                    <ListItem>
                                        {' '}
                                        <ListIcon icon="blackMarkGood" />
                                        Dedicated support
                                    </ListItem>
                                </List>

                                <PricingButton>FREE SIGN-UP</PricingButton>
                            </PricingBox>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box
                textAlign="center"
                py="5rem"
                pt={['3rem', '5rem']}
                backgroundColor="brand.dullPink"
            >
                <Container>
                    <Heading
                        mt=".7rem"
                        mb="1.2rem"
                        fontWeight="800"
                        size="xl"
                        textAlign="center"
                        as="h2"
                        marginBottom="1.5rem"
                    >
                        Get Started Today For FREE
                    </Heading>
                    <Text maxWidth="650px" mx="auto" marginBottom="2rem">
                        Sign up with Checkref today and request your first 3 references completely
                        FREE. Sign up takes less than 1 minute!
                    </Text>
                    <Button
                        backgroundColor="brand.orange"
                        fontWeight="normal"
                        d="flex"
                        mx="auto"
                        type="submit"
                        borderRadius="4px"
                        color="brand.white"
                        px="2.5rem"
                        height="2.6rem"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        _focus={{outline: 0}}
                        _hover={{backgroundColor: 'brand.orange'}}
                        onClick={() => {
                            router
                                .push({
                                    pathname: '/register',
                                    query: {type: 'standard'},
                                })
                                .then(() => window.scrollTo(0, 0));
                        }}
                    >
                        Sign up for Free
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default Pricing;
