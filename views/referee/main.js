import * as React from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {
    Box,
    Text,
    Image,
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Flex,
    Select,
    Textarea,
    RadioGroup,
    Radio,
    Spinner,
} from '@chakra-ui/core';
import Container from '../../components/container';
import Button from '../../components/button';

const Main = () => {
    const router = useRouter();
    const [step, setStep] = React.useState(1);
    const [referenceSuccess, setReferenceSuccess] = React.useState(false);
    const [loadingGet, setLoadingGet] = React.useState(true);
    const [loadingSubmit, setLoadingSubmit] = React.useState(false);
    const [referenceQuestions, setReferenceQuestions] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);
    const [hashError, setHashError] = React.useState(false);
    const [referenceNote, setReferenceNote] = React.useState(null);
    const [candidateName, setCandidateName] = React.useState(null);
    const [candidateEmail, setCandidateEmail] = React.useState(null);
    const [refereeCompany, setRefereeCompany] = React.useState(null);
    const [multiChoiceAnswers, setMultiChoiceAnswers] = React.useState([]);

    const [firstValues, setFirstValues] = React.useState({
        jobTitle: '',
        from: '',
        to: '',
        employmentType: 'fulltime',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        relationshipToCandidate: '',
        refereeJobTitle: '',
    });

    const handleChangeFirstValues = e => {
        setFirstValues({
            ...firstValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleFirstSubmit = e => {
        e.preventDefault();
        typeof window != 'undefined' && window.scrollTo(0, 0);
        setStep(2);
    };

    const sendReference = async () => {
        setLoadingSubmit(true);
        try {
            const res = await axios.post(`${process.env.baseUrl}/reference/add-answer`, {
                ...firstValues,
                reference: router.query?.hash,
                refereeEmail: router.query.refereeEmail,
                answers,
            });
            const {data} = res;
            if (data?.success) {
                setReferenceSuccess(true);
                typeof window != 'undefined' && window.scrollTo(0, 0);
            }
        } catch (err) {
            // catch error
        } finally {
            setLoadingSubmit(false);
        }
    };

    const handleSecondSubmit = e => {
        e.preventDefault();
        sendReference();
    };

    const handleAnswerChange = (e, idx) => {
        const answersCopy = [...answers];
        answersCopy[idx].answer = e.target.value;
        setAnswers(answersCopy);
    };

    const handleMultiChoiceAnswerChange = (e, idx) => {
        const multiChoiceAnswersCopy = [...multiChoiceAnswers];
        multiChoiceAnswersCopy[idx] = e.target.value;
        setMultiChoiceAnswers(multiChoiceAnswersCopy);
        const answersCopy = [...answers];
        answersCopy[idx].answer = e.target.value;
        setAnswers(answersCopy);
    };

    React.useEffect(() => {
        const hash = router.query.hash;
        const getReferenceQuestions = async () => {
            setLoadingGet(true);
            try {
                const res = await axios.get(
                    `${process.env.baseUrl}/reference/questions?reference=${hash}`,
                );
                const {data} = res;
                if (data?.success && data?.data && router.query.refereeEmail) {
                    setReferenceQuestions(data?.data);
                    setAnswers(
                        data?.data?.map(question => {
                            return {questionId: question?._id, answer: question?.options?.[0]};
                        }),
                    );
                    setMultiChoiceAnswers(data?.data?.map(question => question?.options?.[0]));
                } else {
                    setHashError(true);
                }
            } catch (err) {
                setHashError(true);
            } finally {
                setLoadingGet(false);
            }
        };
        if (hash) {
            getReferenceQuestions();
        } else {
            setLoadingGet(false);
        }
    }, [router.query, router.query.hash]);

    React.useEffect(() => {
        const hash = router.query.hash;
        const refereeEmail = router.query.refereeEmail;
        const getReferenceDetails = async () => {
            try {
                const res = await axios.get(
                    `${process.env.baseUrl}/reference/data?reference=${hash}&refereeEmail=${refereeEmail}`,
                );
                const {data} = res;
                if (data?.success && data?.data) {
                    setCandidateName(data?.data?.candidateName);
                    setCandidateEmail(data?.data?.candidateEmail);
                    setRefereeCompany(data?.data?.refereeCompany);
                    setReferenceNote(data?.data?.questionSet?.note);
                }
            } catch (err) {
                //    catch error
            }
        };
        if (hash && refereeEmail) {
            getReferenceDetails();
        }
    }, [router.query, router.query.hash, router.query.refereeEmail]);

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
                        <>
                            {!referenceSuccess ? (
                                <Box>
                                    {referenceQuestions.length > 0 && (
                                        <>
                                            <Text
                                                mb={['1.5rem', '2rem']}
                                                fontWeight="bold"
                                                textAlign="center"
                                            >
                                                Step {step} of 2
                                            </Text>
                                            {step === 2 && (
                                                <Heading
                                                    size="lg"
                                                    mb={['2rem', '2.5rem']}
                                                    textAlign="center"
                                                >
                                                    Final Questions
                                                </Heading>
                                            )}

                                            {step === 1 && (
                                                <>
                                                    <Text mb={['1.5rem', '2rem']}>
                                                        <Text as="span" fontWeight="bold">
                                                            {candidateName}
                                                        </Text>
                                                        (
                                                        <Text as="span" color="brand.orange">
                                                            {candidateEmail}
                                                        </Text>
                                                        ) requested that you verify their time at{' '}
                                                        <Text as="span" fontWeight="bold">
                                                            {refereeCompany || 'your company'}.
                                                        </Text>
                                                    </Text>

                                                    {referenceNote && (
                                                        <Box mb={['2rem', '2.5rem']}>
                                                            <Text mb="1rem">
                                                                Message from recruiter
                                                            </Text>
                                                            <Box
                                                                p="1rem 1rem 4rem 1rem"
                                                                borderRadius="0px 7px 7px 7px"
                                                                backgroundColor="#40DAB2"
                                                                textAlign="center"
                                                            >
                                                                {referenceNote}
                                                            </Box>
                                                        </Box>
                                                    )}
                                                </>
                                            )}

                                            <Box
                                                backgroundColor="brand.white"
                                                borderRadius="6px"
                                                p={['1rem', '1.5rem']}
                                                pb="3rem"
                                                color="brand.black"
                                            >
                                                {step == 1 && (
                                                    <form onSubmit={handleFirstSubmit}>
                                                        <Heading mb="1.5rem" size="md">
                                                            Candidate Details
                                                        </Heading>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                                color="brand.lightBlack"
                                                            >
                                                                Job Title
                                                            </FormLabel>
                                                            <Input
                                                                isRequired
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="organizationName"
                                                                value={firstValues.jobTitle}
                                                                name="jobTitle"
                                                                onChange={handleChangeFirstValues}
                                                            />
                                                            <FormHelperText>
                                                                Candidate&apos;s most recent
                                                                position at{' '}
                                                                {refereeCompany || 'your company'}
                                                            </FormHelperText>
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <Flex
                                                                align={[
                                                                    'flex-start',
                                                                    'flex-start',
                                                                    'center',
                                                                ]}
                                                                justify="space-between"
                                                                flexDir={[
                                                                    'column',
                                                                    'column',
                                                                    'row',
                                                                ]}
                                                                spacing={5}
                                                            >
                                                                <FormControl mb="1.5rem">
                                                                    <FormLabel
                                                                        mb=".6rem"
                                                                        fontWeight="bold"
                                                                        htmlFor="businessSector"
                                                                        color="brand.lightBlack"
                                                                    >
                                                                        From
                                                                    </FormLabel>
                                                                    <Input
                                                                        isRequired
                                                                        type="date"
                                                                        placeholder="Outline"
                                                                        name="from"
                                                                        value={firstValues.from}
                                                                        onChange={
                                                                            handleChangeFirstValues
                                                                        }
                                                                    />
                                                                </FormControl>
                                                                <FormControl mb="1.5rem">
                                                                    <FormLabel
                                                                        mb=".6rem"
                                                                        fontWeight="bold"
                                                                        htmlFor="businessSector"
                                                                        color="brand.lightBlack"
                                                                    >
                                                                        To
                                                                    </FormLabel>
                                                                    <Input
                                                                        isRequired
                                                                        type="date"
                                                                        placeholder="Outline"
                                                                        name="to"
                                                                        value={firstValues.to}
                                                                        onChange={
                                                                            handleChangeFirstValues
                                                                        }
                                                                    />
                                                                </FormControl>
                                                            </Flex>
                                                        </FormControl>

                                                        <Heading size="md" mb="1.5rem">
                                                            Employment type
                                                        </Heading>

                                                        <Select
                                                            mb={['1.5rem', '2rem']}
                                                            placeholder="Select employment type"
                                                            value={firstValues.employmentType}
                                                            onChange={handleChangeFirstValues}
                                                            name="employmentType"
                                                        >
                                                            <option value="fulltime">
                                                                Fulltime
                                                            </option>
                                                            <option value="part time">
                                                                Part time
                                                            </option>
                                                            <option value="contract">
                                                                Contract
                                                            </option>
                                                        </Select>

                                                        <Heading mb="2rem" size="md">
                                                            Your Details
                                                        </Heading>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                First name
                                                            </FormLabel>
                                                            <Input
                                                                isRequired
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="firstName"
                                                                value={firstValues.firstName}
                                                                onChange={handleChangeFirstValues}
                                                                name="firstName"
                                                            />
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                Last name
                                                            </FormLabel>
                                                            <Input
                                                                isRequired
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="lastName"
                                                                value={firstValues.lastName}
                                                                onChange={handleChangeFirstValues}
                                                                name="lastName"
                                                            />
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                Email
                                                            </FormLabel>
                                                            <Input
                                                                type="email"
                                                                value={firstValues.email}
                                                                onChange={handleChangeFirstValues}
                                                                name="email"
                                                                mt="0px"
                                                                isRequired
                                                                backgroundColor="inherit"
                                                                id="email"
                                                            />
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                Phone number
                                                            </FormLabel>
                                                            <Input
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="phoneNumber"
                                                                value={firstValues.phone}
                                                                onChange={handleChangeFirstValues}
                                                                name="phone"
                                                            />
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                Relationship to candidate
                                                            </FormLabel>
                                                            <Input
                                                                isRequired
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="relationship"
                                                                value={
                                                                    firstValues.relationshipToCandidate
                                                                }
                                                                onChange={handleChangeFirstValues}
                                                                name="relationshipToCandidate"
                                                            />
                                                        </FormControl>

                                                        <FormControl mb="1.5rem">
                                                            <FormLabel
                                                                mb=".6rem"
                                                                fontWeight="bold"
                                                                htmlFor="businessSector"
                                                            >
                                                                Job title
                                                            </FormLabel>
                                                            <Input
                                                                isRequired
                                                                mt="0px"
                                                                type="text"
                                                                backgroundColor="inherit"
                                                                id="jobTitle"
                                                                value={firstValues.refereeJobTitle}
                                                                onChange={handleChangeFirstValues}
                                                                name="refereeJobTitle"
                                                            />
                                                        </FormControl>

                                                        <Button width="100%" type="submit">
                                                            Submit and provide reference
                                                        </Button>
                                                        <Text as="small" mt="1rem" d="block">
                                                            Please ensure your details are correct
                                                            before submitting
                                                        </Text>
                                                    </form>
                                                )}

                                                {step == 2 && (
                                                    <>
                                                        <Button
                                                            onClick={() => {
                                                                setStep(1);
                                                                typeof window != 'undefined' &&
                                                                    window.scrollTo(0, 0);
                                                            }}
                                                            d="block"
                                                            mb={[8]}
                                                            mx="auto"
                                                            leftIcon="arrow-back"
                                                        >
                                                            Back to step one
                                                        </Button>
                                                        <form onSubmit={handleSecondSubmit}>
                                                            {referenceQuestions.map(
                                                                (question, idx) => (
                                                                    <FormControl
                                                                        key={idx}
                                                                        mb="1.5rem"
                                                                    >
                                                                        <FormLabel
                                                                            mb=".6rem"
                                                                            fontWeight="bold"
                                                                            htmlFor="businessSector"
                                                                            color="brand.lightBlack"
                                                                        >
                                                                            {question?.question}
                                                                            <Text
                                                                                as="span"
                                                                                color="#fc1b17"
                                                                            >
                                                                                *
                                                                            </Text>
                                                                        </FormLabel>
                                                                        {question?.type !==
                                                                        'multichoice' ? (
                                                                            <Textarea
                                                                                height="5rem"
                                                                                border="1px solid #BDBDBD"
                                                                                borderRadius="0"
                                                                                py=".5rem"
                                                                                isRequired
                                                                                value={
                                                                                    answers[idx]
                                                                                        ?.answer
                                                                                }
                                                                                onChange={e => {
                                                                                    handleAnswerChange(
                                                                                        e,
                                                                                        idx,
                                                                                    );
                                                                                }}
                                                                            />
                                                                        ) : (
                                                                            <RadioGroup
                                                                                name={`multichoice + ${Math.random()}`}
                                                                                isRequired
                                                                                spacing={5}
                                                                                isInline
                                                                                value={
                                                                                    multiChoiceAnswers[
                                                                                        idx
                                                                                    ]
                                                                                }
                                                                                onChange={e => {
                                                                                    handleMultiChoiceAnswerChange(
                                                                                        e,
                                                                                        idx,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                {question?.options?.map(
                                                                                    (
                                                                                        option,
                                                                                        idx,
                                                                                    ) => (
                                                                                        <Radio
                                                                                            required
                                                                                            key={
                                                                                                idx +
                                                                                                Math.random()
                                                                                            }
                                                                                            variantColor="green"
                                                                                            value={
                                                                                                option
                                                                                            }
                                                                                        >
                                                                                            {option}
                                                                                        </Radio>
                                                                                    ),
                                                                                )}
                                                                            </RadioGroup>
                                                                        )}
                                                                    </FormControl>
                                                                ),
                                                            )}

                                                            <Button
                                                                isLoading={loadingSubmit}
                                                                width="100%"
                                                                type="submit"
                                                            >
                                                                Submit reference
                                                            </Button>
                                                            <Text as="small" mt="1rem" d="block">
                                                                Please ensure your details are
                                                                correct before submitting
                                                            </Text>
                                                        </form>
                                                    </>
                                                )}
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            ) : (
                                <Box>
                                    <Text fontSize="lg">
                                        Reference successfully submitted. Thank you for your
                                        response.{' '}
                                    </Text>
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Main;
