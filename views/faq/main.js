import React, {useState} from 'react';
import {Box, Heading, Text, Button} from '@chakra-ui/core';
import Container from '../../components/container';
import {useRouter} from 'next/router';

const main = () => {
    const [questionState, setQuestionState] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
    });
    const {first, second, thrid, fourth, fifth} = questionState;
    const router = useRouter();
    return (
        <Box mt={['6rem', '8rem']}>
            <Container>
                <Heading
                    as="h1"
                    fontSize={['25px', '30px', '40px']}
                    textAlign="center"
                    mb={['2rem', '3rem']}
                >
                    FAQs
                </Heading>
                <Box boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)" my={['1rem']}>
                    <Box>
                        <Text
                            p={['1rem', '1.5rem 2rem']}
                            cursor="pointer"
                            borderBottom="1px solid #EAEAEA"
                            color="brand.orange"
                            onClick={() => {
                                setQuestionState({
                                    ...questionState,
                                    first: !questionState.first,
                                });
                            }}
                        >
                            What is Checkref?
                        </Text>
                        <Box d={first ? 'block' : 'none'} p={['1rem', '1.5rem 2rem']}>
                            <Text>
                                Checkref is a digital automated reference checking tool. It
                                simplifies and streamlines, the reference checking process thereby
                                increasing the validity and compliance of your Employee reference
                                checks.{' '}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            p={['1rem', '1.5rem 2rem']}
                            cursor="pointer"
                            borderBottom="1px solid #EAEAEA"
                            color="brand.orange"
                            onClick={() => {
                                setQuestionState({
                                    ...questionState,
                                    second: !questionState.second,
                                });
                            }}
                        >
                            Why should I use Checkref?
                        </Text>
                        <Box d={second ? 'block' : 'none'} p={['1rem', '1.5rem 2rem']}>
                            <Text>
                                Checkref is a digital automated reference checking tool. It
                                simplifies and streamlines, the reference checking process thereby
                                increasing the validity and compliance of your Employee reference
                                checks.{' '}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            p={['1rem', '1.5rem 2rem']}
                            cursor="pointer"
                            borderBottom="1px solid #EAEAEA"
                            color="brand.orange"
                            onClick={() => {
                                setQuestionState({
                                    ...questionState,
                                    thrid: !questionState.thrid,
                                });
                            }}
                        >
                            Can recruitment agencies use Checkref?
                        </Text>
                        <Box d={thrid ? 'block' : 'none'} p={['1rem', '1.5rem 2rem']}>
                            <Text>
                                Checkref is a digital automated reference checking tool. It
                                simplifies and streamlines, the reference checking process thereby
                                increasing the validity and compliance of your Employee reference
                                checks.{' '}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            p={['1rem', '1.5rem 2rem']}
                            cursor="pointer"
                            borderBottom="1px solid #EAEAEA"
                            color="brand.orange"
                            onClick={() => {
                                setQuestionState({
                                    ...questionState,
                                    fourth: !questionState.fourth,
                                });
                            }}
                        >
                            Is it built for teams?
                        </Text>
                        <Box d={fourth ? 'block' : 'none'} p={['1rem', '1.5rem 2rem']}>
                            <Text>
                                Checkref is a digital automated reference checking tool. It
                                simplifies and streamlines, the reference checking process thereby
                                increasing the validity and compliance of your Employee reference
                                checks.{' '}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            p={['1rem', '1.5rem 2rem']}
                            cursor="pointer"
                            borderBottom="1px solid #EAEAEA"
                            color="brand.orange"
                            onClick={() => {
                                setQuestionState({
                                    ...questionState,
                                    fifth: !questionState.fifth,
                                });
                            }}
                        >
                            How do I get started?
                        </Text>
                        <Box d={fifth ? 'block' : 'none'} p={['1rem', '1.5rem 2rem']}>
                            <Text>
                                Checkref is a digital automated reference checking tool. It
                                simplifies and streamlines, the reference checking process thereby
                                increasing the validity and compliance of your Employee reference
                                checks.{' '}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
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
        </Box>
    );
};

export default main;
