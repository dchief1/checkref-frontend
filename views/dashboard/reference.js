import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {useReactToPrint} from 'react-to-print';
import {Box, Text, Flex, Icon, Heading, Image} from '@chakra-ui/core';

const PrintOnly = styled.div`
    @media screen {
        display: none;
    }

    @media print {
        display: block;
    }
`;

const ScreenOnly = styled.div`
    @media screen {
        display: block;
    }

    @media print {
        display: none;
    }
`;

const reference = props => {
    const {currentReference, setCurrentViewState, VIEW_STATES} = props;

    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [questions, setQuestions] = React.useState([]);

    const candidate = currentReference?.candidate;
    const referees = currentReference?.referees;

    const setInitialView = () => {
        setCurrentViewState(VIEW_STATES.initial);
    };

    const handleDownloadReport = () => {
        typeof window !== 'undefined' && window.print();
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        const getQuestionSets = async () => {
            try {
                const res = await axios.get('/questionset');
                const {data} = res;
                if (data?.success && data?.data) {
                    setQuestions(data?.data?.questionSets);
                }
            } catch (err) {
                // catch error
            }
        };
        getQuestionSets();
    }, []);
    return (
        <Box>
            <Box>
                <Flex
                    maxWidth="fit-content"
                    onClick={setInitialView}
                    cursor="pointer"
                    align="center"
                    mb={[6, 8]}
                >
                    <Icon size="1.6rem" mr="5px" name="questionSetLeftArrow" />
                    <Text color="#50514F" fontSize={['16px', '18px']}>
                        Back to Dashboard
                    </Text>
                </Flex>
                <Box ref={componentRef}>
                    <ScreenOnly>
                        <Flex
                            mb={[4, 6]}
                            justify={['center', 'center', 'space-between']}
                            align="center"
                            flexDir={['column', 'column', 'row']}
                        >
                            <Heading mb={[4, 4, 0]} as="h2" size="lg">
                                {candidate?.firstName} {candidate?.lastName}
                            </Heading>
                            <Flex justify="space-around" align="center">
                                <Flex
                                    onClick={handlePrint}
                                    cursor="pointer"
                                    mr={4}
                                    justify="space-around"
                                    align="center"
                                >
                                    <Image mr={2} src="/icons/download_report.svg" />
                                    <Text color="#111D5E">Download Report</Text>
                                </Flex>
                                <Flex cursor="pointer" justify="space-around" align="center">
                                    <Image mr={2} src="/icons/delete_report.svg" />
                                    <Text color="#E73737">Delete Report</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Box mb={[6, 8]}>
                            {candidate?.email && (
                                <Flex align="center">
                                    <Icon color="#50514f" mr={4} name="email" />
                                    <Text color="#50514f">{candidate?.email}</Text>
                                </Flex>
                            )}
                            {candidate?.phone && (
                                <Flex align="center" mb={[2]}>
                                    <Icon color="#50514f" mr={4} name="phone" />
                                    <Text color="#50514f">{candidate?.phone}</Text>
                                </Flex>
                            )}

                            {candidate?.linkedIn && (
                                <Flex align="center">
                                    <AiOutlineLinkedin
                                        size="1.2rem"
                                        color="#50514f"
                                        style={{marginRight: '1rem'}}
                                    />
                                    <Text color="#50514f">{candidate?.linkedIn}</Text>
                                </Flex>
                            )}
                        </Box>
                        <Box mb={[6, 8]}>
                            <Text>Timeline here</Text>
                        </Box>
                    </ScreenOnly>
                    <PrintOnly>
                        <Box mt={8} mb={6}>
                            <Image d="block" mx="auto" src="/images/printout_logo.jpg" />
                            <Text textAlign="center" mt={2}>
                                Employee Reference Report
                            </Text>
                        </Box>
                    </PrintOnly>
                    {Array.isArray(referees) && referees.length > 0 && (
                        <Box px={4}>
                            {referees.map((referee, idx) => (
                                <Box mb={[6, 8]} key={idx}>
                                    <PrintOnly>
                                        <Box mb={4}>
                                            <Heading
                                                backgroundColor="#F5F6FF"
                                                textAlign="center"
                                                as="h2"
                                                size="lg"
                                                py={4}
                                                mb={8}
                                            >
                                                Employee Details
                                            </Heading>
                                            {candidate?.firstName && (
                                                <Text mb={2}>
                                                    {' '}
                                                    <Text as="span" fontWeight="bold">
                                                        Name:
                                                    </Text>{' '}
                                                    {candidate?.firstName} {candidate?.lastName}
                                                </Text>
                                            )}
                                            {candidate?.email && (
                                                <Text mb={2}>
                                                    {' '}
                                                    <Text as="span" fontWeight="bold">
                                                        Email:
                                                    </Text>{' '}
                                                    {candidate?.email}
                                                </Text>
                                            )}
                                            {candidate?.phone && (
                                                <Text mb={2}>
                                                    {' '}
                                                    <Text as="span" fontWeight="bold">
                                                        Phone Number:
                                                    </Text>{' '}
                                                    {candidate?.phone}
                                                </Text>
                                            )}
                                            {candidate?.linkedIn && (
                                                <Text mb={2}>
                                                    {' '}
                                                    <Text as="span" fontWeight="bold">
                                                        LinkedIn Profile:
                                                    </Text>{' '}
                                                    {candidate?.linkedIn}
                                                </Text>
                                            )}
                                        </Box>
                                    </PrintOnly>
                                    <Heading
                                        backgroundColor="#F5F6FF"
                                        textAlign="center"
                                        as="h2"
                                        size="lg"
                                        py={4}
                                    >
                                        Reference {idx + 1}
                                    </Heading>
                                    <Box mb={[6, 8]} mt={4}>
                                        <Flex mb={2} align="center" justify="space-between">
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Company Name:
                                                </Text>{' '}
                                                {referee?.candidate?.company}
                                            </Text>
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Employed From:
                                                </Text>{' '}
                                                employed from
                                            </Text>
                                        </Flex>
                                        <Flex align="center" justify="space-between">
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Job Title:
                                                </Text>{' '}
                                                Job title
                                            </Text>
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Employed To:
                                                </Text>{' '}
                                                employed to
                                            </Text>
                                        </Flex>
                                    </Box>

                                    <Heading
                                        backgroundColor="#F5F6FF"
                                        textAlign="center"
                                        as="h2"
                                        size="lg"
                                        py={4}
                                    >
                                        Referee Details
                                    </Heading>
                                    <Box mb={[6, 8]} mt={4}>
                                        <Flex mb={2} align="center" justify="space-between">
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Referee Name:
                                                </Text>{' '}
                                                {referee?.candidate?.name}
                                            </Text>
                                            {referee?.date && (
                                                <Text>
                                                    {' '}
                                                    <Text as="span" fontWeight="bold">
                                                        Reference Date:
                                                    </Text>{' '}
                                                    {moment(referee?.date).format('Do MM YYYY')}
                                                </Text>
                                            )}
                                        </Flex>
                                        <Flex mb={2} align="center" justify="space-between">
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Referee Title:
                                                </Text>{' '}
                                                Referee Title
                                            </Text>
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Referee Email:
                                                </Text>{' '}
                                                {referee?.candidate?.email}
                                            </Text>
                                        </Flex>
                                        <Flex align="center" justify="space-between">
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Relationship to Candidate:
                                                </Text>{' '}
                                                Relationship to Candidate
                                            </Text>
                                            <Text>
                                                {' '}
                                                <Text as="span" fontWeight="bold">
                                                    Phone number:
                                                </Text>{' '}
                                                Phone number
                                            </Text>
                                        </Flex>
                                    </Box>

                                    <Heading
                                        backgroundColor="#F5F6FF"
                                        textAlign="center"
                                        as="h2"
                                        size="lg"
                                        py={4}
                                    >
                                        Reference Questions
                                    </Heading>
                                    {referee.answers ? (
                                        <Box mt={[4]}>
                                            {referee.answers.map((answer, idx) => (
                                                <Box mb={4} key={idx}>
                                                    <Heading mb={2} as="h4" size="md">
                                                        {questions &&
                                                            questions
                                                                .filter(e =>
                                                                    e?.questions?.some(
                                                                        e =>
                                                                            e._id ===
                                                                            answer.questionId,
                                                                    ),
                                                                )[0]
                                                                ?.questions?.find(
                                                                    e =>
                                                                        e._id === answer.questionId,
                                                                ).question}
                                                    </Heading>
                                                    <Text>{answer?.answer}</Text>
                                                </Box>
                                            ))}
                                        </Box>
                                    ) : (
                                        <Text
                                            mt={4}
                                            fontWeight="bold"
                                            textAlign="center"
                                            fontSize="lg"
                                        >
                                            Referee hasn&rsquo;t filled question set yet
                                        </Text>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    )}
                    <ScreenOnly>
                        <Text mt={[6, 8]} textAlign="center">
                            No response yet, Click{' '}
                            <Text color="#8b8b8b" as="span">
                                {' '}
                                <Link href="/profile/global-reminder">
                                    <a>Here</a>
                                </Link>
                            </Text>{' '}
                            to send an instant reminder
                        </Text>
                    </ScreenOnly>
                    <PrintOnly>
                        <Box py={8} px={4} backgroundColor="brand.darkBlue">
                            <Text color="#fff" textAlign="center">
                                Reference collected using{' '}
                                <Text color="brand.orange" href="https://checkref.co" as="a">
                                    Checkref.co
                                </Text>{' '}
                            </Text>
                        </Box>
                    </PrintOnly>
                </Box>
            </Box>
        </Box>
    );
};

export default reference;
