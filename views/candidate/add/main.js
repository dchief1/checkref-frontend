import * as React from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {Box, Text, Image, Heading, FormControl, FormLabel, Input, Spinner} from '@chakra-ui/core';
import Link from 'next/link';
import Container from '../../../components/container';
import Button from '../../../components/button';

const Main = () => {
    const router = useRouter();
    const [requestSuccess, setRequestSuccess] = React.useState(false);
    const [numberOfReferees, setNumberOfReferees] = React.useState(0);
    const [referenceNote, setReferenceNote] = React.useState(null);
    const [companyName, setCompanyName] = React.useState(null);
    const [companyEmail, setCompanyEmail] = React.useState(null);
    const [hashError, setHashError] = React.useState(false);
    const [loadingSubmit, setLoadingSubmit] = React.useState(false);
    const [loadingGet, setLoadingGet] = React.useState(true);
    const [referees, setReferees] = React.useState(
        Array(numberOfReferees)
            .fill('_')
            .map(e => {
                return {name: '', email: '', company: ''};
            }),
    );

    const handleChange = (e, idx) => {
        const editedReferees = [...referees];
        editedReferees[idx][e.target.name] = e.target.value;
        setReferees(editedReferees);
    };

    const sendRefereeRequest = async () => {
        setLoadingSubmit(true);
        try {
            const res = await axios.post(`${process.env.baseUrl}/reference/add-referees`, {
                reference: router.query.hash,
                referees: referees.map(e => {
                    return {
                        candidate: {
                            name: e.name,
                            email: e.email,
                            company: e.company,
                        },
                    };
                }),
            });
            const {data} = res;
            if (data?.success) {
                window != 'undefined' && window.scrollTo(0, 0);
                setRequestSuccess(true);
            }
        } catch (err) {
            alert(err.toString());
            // catch error
        } finally {
            setLoadingSubmit(false);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendRefereeRequest();
    };

    React.useEffect(() => {
        const hash = router.query.hash;
        const getNumberOfReferees = async () => {
            setLoadingGet(true);
            try {
                const res = await axios.get(
                    `${process.env.baseUrl}/reference/data?reference=${hash}`,
                );
                const {data} = res;
                if (data?.success && data?.data) {
                    setNumberOfReferees(data?.data?.numberOfReferees);
                    setCompanyName(data?.data?.companyName);
                    setCompanyEmail(data?.data?.companyEmail);
                    setReferenceNote(data?.data?.note);
                    setReferees(
                        Array(data?.data?.numberOfReferees)
                            .fill('_')
                            .map(e => {
                                return {name: '', email: '', company: ''};
                            }),
                    );
                } else {
                    setHashError(true);
                }
            } catch (err) {
                if (err?.response?.data?.success == false) {
                    setHashError(true);
                }
            } finally {
                setLoadingGet(false);
            }
        };
        if (hash) {
            getNumberOfReferees();
        } else {
            setLoadingGet(false);
        }
    }, [router.query, router.query.hash]);
    return (
        <Box pb={['5rem', '10rem']} backgroundColor="brand.darkBlue">
            <Container>
                <Box color="white" minHeight="100vh" pt="3rem" maxW={['500px']} mx="auto">
                    <Image mx="auto" mb="2rem" src="/images/login_logo.svg" />
                    {loadingGet ? (
                        <Spinner
                            thickness="5px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="#F37121"
                            size="5rem"
                            d="block"
                            mx="auto"
                            mt={8}
                        />
                    ) : hashError ? (
                        <Box>
                            <Heading color="red.500" textAlign="center" mt={12} ash="h2" size="lg">
                                Link is incorrect, please use the link sent to your email
                            </Heading>
                        </Box>
                    ) : (
                        <Box>
                            {!requestSuccess ? (
                                <Box>
                                    {referenceNote && (
                                        <>
                                            <Text mb={['1.5rem', '2rem']}>
                                                <Text as="span" fontWeight="bold">
                                                    {companyName}
                                                </Text>{' '}
                                                {companyEmail && (
                                                    <Text as="span">
                                                        ({' '}
                                                        <Text color="brand.orange" as="span">
                                                            {companyEmail}
                                                        </Text>{' '}
                                                        )
                                                    </Text>
                                                )}{' '}
                                                requested that you provide references for your
                                                previous work experience.
                                            </Text>

                                            <Box mb={['2rem', '2.5rem']}>
                                                <Text mb="1rem">Message from recruiter</Text>
                                                <Box
                                                    p="1rem 1rem 4rem 1rem"
                                                    borderRadius="0px 7px 7px 7px"
                                                    backgroundColor="#40DAB2"
                                                >
                                                    <Text textAlign="center">{referenceNote}</Text>
                                                </Box>
                                            </Box>
                                        </>
                                    )}
                                    {numberOfReferees > 0 && (
                                        <Box
                                            backgroundColor="brand.white"
                                            borderRadius="6px"
                                            p={['1rem', '1.5rem']}
                                            pb={['4rem', '6rem']}
                                            color="brand.black"
                                        >
                                            <form onSubmit={handleSubmit}>
                                                <Heading mb="2rem" size="md">
                                                    Add Referees
                                                </Heading>

                                                {Array(numberOfReferees)
                                                    .fill('_')
                                                    .map((_, idx) => (
                                                        <Box key={idx} mb={['2.5rem', '3rem']}>
                                                            <Text
                                                                mb="1.5rem"
                                                                backgroundColor="#F7F9FF"
                                                                padding=".7rem 1.2rem"
                                                                textAlign="center"
                                                                fontSize="lg"
                                                                borderRadius="5px"
                                                                fontWeight="bold"
                                                            >
                                                                Referee {idx + 1}
                                                            </Text>

                                                            <FormControl mb="1.5rem">
                                                                <FormLabel
                                                                    mb=".6rem"
                                                                    fontWeight="bold"
                                                                    htmlFor="nameOne"
                                                                    color="brand.lightBlack"
                                                                >
                                                                    Referee&lsquo;s Name
                                                                </FormLabel>
                                                                <Input
                                                                    isRequired
                                                                    mt="0px"
                                                                    type="text"
                                                                    backgroundColor="inherit"
                                                                    id="nameOne"
                                                                    name="name"
                                                                    value={referees[idx].name}
                                                                    onChange={e =>
                                                                        handleChange(e, idx)
                                                                    }
                                                                />
                                                            </FormControl>

                                                            <FormControl mb="1.5rem">
                                                                <FormLabel
                                                                    mb=".6rem"
                                                                    fontWeight="bold"
                                                                    htmlFor="emailOne"
                                                                    color="brand.lightBlack"
                                                                >
                                                                    Referee&lsquo;s Email
                                                                </FormLabel>
                                                                <Input
                                                                    isRequired
                                                                    mt="0px"
                                                                    type="email"
                                                                    backgroundColor="inherit"
                                                                    id="emailOne"
                                                                    name="email"
                                                                    value={referees[idx].email}
                                                                    onChange={e =>
                                                                        handleChange(e, idx)
                                                                    }
                                                                />
                                                            </FormControl>

                                                            <FormControl mb="1.5rem">
                                                                <FormLabel
                                                                    mb=".6rem"
                                                                    fontWeight="bold"
                                                                    htmlFor="companyOne"
                                                                    color="brand.lightBlack"
                                                                >
                                                                    Name of company
                                                                </FormLabel>
                                                                <Input
                                                                    isRequired
                                                                    mt="0px"
                                                                    type="text"
                                                                    backgroundColor="inherit"
                                                                    id="companyOne"
                                                                    name="company"
                                                                    value={referees[idx].company}
                                                                    onChange={e =>
                                                                        handleChange(e, idx)
                                                                    }
                                                                />
                                                            </FormControl>
                                                        </Box>
                                                    ))}

                                                <Button
                                                    isLoading={loadingSubmit}
                                                    width="100%"
                                                    type="submit"
                                                >
                                                    Send Requests
                                                </Button>
                                            </form>
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <Box>
                                    <Text fontSize="lg">
                                        Reference requests successfully sent to referees,{' '}
                                        <Text color="brand.orange" as="span">
                                            <Link href="/register">
                                                <a>Click here</a>
                                            </Link>
                                        </Text>{' '}
                                        to create an account and monitor your requests{' '}
                                    </Text>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Main;
