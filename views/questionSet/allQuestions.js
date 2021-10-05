import React, {useState} from 'react';
import axios from 'axios';
import {
    Box,
    Text,
    Flex,
    Heading,
    Icon,
    Spinner,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Button as ChakraButton,
} from '@chakra-ui/core';
import Button from '../../components/button';
import {NotificationManager} from 'react-notifications';

const allQuestions = props => {
    const {isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose} = useDisclosure();

    const [reload, setReload] = useState(true);

    const {allContentViews, setContentView, setCurrentQuestionSet, setCurrentQuestionMode} = props;
    const setNewQuestion = () => {
        setContentView(allContentViews.newQuestion);
    };
    const setOneQuestion = questionSet => {
        setCurrentQuestionSet(questionSet);
        setContentView(allContentViews.oneQuestion);
    };

    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [questionToDelete, setQuestionToDelete] = React.useState('');

    React.useEffect(() => {
        const getQuestions = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/questionset');
                const {data} = res;
                if (data.success && data.data) {
                    const questionSets = data?.data?.questionSets;
                    setQuestions(questionSets);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getQuestions();
    }, [reload]);

    const duplicate = id => async () => {
        setLoading(true);
        try {
            const {data} = await axios.post('/questionset/duplicate', {id});
            questions.push(data.data);
            setLoading(questions);
        } catch (err) {
            const {response} = err;
            if (!response) {
                return;
            }
            NotificationManager.error(response.message);
        }
        setLoading(false);
    };

    const deleteQuestion = async id => {
        setLoading(true);
        try {
            await axios.delete(`questionset/${id}`, {id});
            setLoading(false);
            setQuestions(questions.filter(q => q.id !== id));
        } catch (err) {
            const {response} = err;
            if (!response) {
                return;
            }
            NotificationManager.error(response.message);
        }
        setLoading(false);
    };

    return (
        <Box>
            <Box mb={['1.5rem']}>
                <Heading as="h1" fontSize={['18px', '20px', '23px', '25px']}>
                    Question Set
                </Heading>
            </Box>
            <Box mb="2rem">
                <Flex
                    mb="2rem"
                    align={['flex-start', 'flex-start', 'center']}
                    flexDirection={['column', 'column', 'row']}
                    justify="space-between"
                >
                    <Text mb={['1rem', '1rem', 0]} color="#50514F" fontSize={['16px', '18px']}>
                        Customize your Reference check Questions
                    </Text>
                    <Button onClick={setNewQuestion} height="2.5rem">
                        New Question set
                    </Button>
                </Flex>
                <Box>
                    <Box my="2rem" d={loading ? 'flex' : 'none'}>
                        <Spinner
                            thickness="6px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            width="5rem"
                            height="5rem"
                            mx="auto"
                        />
                    </Box>
                    {!loading &&
                        questions.map((question, key) => (
                            <Flex
                                border="1px solid #C4C4C4"
                                borderRadius="4px"
                                padding={['.7rem 1rem', '1rem 1.5rem']}
                                width="100%"
                                key={key}
                                align={['flex-start', 'flex-start', 'center']}
                                justify="space-between"
                                mb={['1.2rem', '1.5rem']}
                                background="white"
                                flexDirection={['column', 'column', 'row']}
                            >
                                <Box mb={['1rem', '1rem', 0]}>
                                    {' '}
                                    <Heading fontSize={['16px', '18px']} as="h3">
                                        {question.name}
                                    </Heading>{' '}
                                    <Text color="#50514F">{question?.team?.name}</Text>{' '}
                                </Box>
                                <Flex
                                    width="100%"
                                    justify={['space-between', 'space-evenly', 'space-around']}
                                    align="center"
                                    flexBasis={['100%', '100%', '60%', '40%']}
                                >
                                    <Flex
                                        cursor="pointer"
                                        justify="center"
                                        align="center"
                                        onClick={duplicate(question.id)}
                                    >
                                        <Icon
                                            size={['.97rem', '1rem', '1.35rem']}
                                            mr={['1px', '4px']}
                                            name="questionSetDuplicate"
                                        />
                                        <Text fontSize={['.8rem', '1rem']} color="#50514F">
                                            Duplicate
                                        </Text>
                                    </Flex>
                                    <Box display={['none', 'none', 'none', 'block']}>| </Box>
                                    <Flex
                                        cursor="pointer"
                                        justify="center"
                                        align="center"
                                        onClick={() => {
                                            setCurrentQuestionMode('view');
                                            setOneQuestion(question);
                                        }}
                                    >
                                        <Icon
                                            size={['.97rem', '1rem', '1.35rem']}
                                            mr={['1px', '4px']}
                                            name="questionSetView"
                                        />
                                        <Text fontSize={['.8rem', '1rem']} color="#50514F">
                                            View
                                        </Text>
                                    </Flex>
                                    <Box display={['none', 'none', 'none', 'block']}>| </Box>
                                    <Flex
                                        cursor="pointer"
                                        justify="center"
                                        align="center"
                                        onClick={() => {
                                            setCurrentQuestionMode('edit');
                                            setOneQuestion(question);
                                        }}
                                    >
                                        <Icon
                                            size={['.97rem', '1rem', '1.35rem']}
                                            mr={['1px', '4px']}
                                            name="questionSetEdit"
                                        />
                                        <Text fontSize={['.96rem', '1rem']} color="#50514F">
                                            Edit
                                        </Text>
                                    </Flex>
                                    <Box display={['none', 'none', 'none', 'block']}>| </Box>
                                    <Flex
                                        cursor="pointer"
                                        justify="center"
                                        align="center"
                                        onClick={() => {
                                            setQuestionToDelete(question.id);
                                            onDeleteOpen();
                                        }}
                                    >
                                        <Icon
                                            size={['.97rem', '1rem', '1.35rem']}
                                            mr={['1px', '4px']}
                                            name="questionSetDelete"
                                        />
                                        <Text fontSize={['.8rem', '1rem']} color="#50514F">
                                            {' '}
                                            Delete{' '}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}

                    {questions.length == 0 && !loading && (
                        <Text mb="3rem" textAlign="center" fontSize="xl" fontWeight="bold">
                            No question has been created yet
                        </Text>
                    )}
                </Box>
            </Box>

            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box p={[0, 0, '3.5rem', '2rem']}>
                        <ModalHeader>Delete Question Set</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Are you sure you want to delete this question?</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Flex justify="space-between" align="center">
                                <ChakraButton
                                    variantColor="red"
                                    onClick={() => {
                                        deleteQuestion(questionToDelete);
                                        onDeleteClose();
                                    }}
                                >
                                    Yes
                                </ChakraButton>
                                <ChakraButton variant="green" onClick={onDeleteClose}>
                                    No
                                </ChakraButton>
                            </Flex>
                        </ModalFooter>
                    </Box>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default allQuestions;
