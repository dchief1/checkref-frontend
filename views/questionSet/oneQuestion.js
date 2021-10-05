import React from 'react';
import {
    Box,
    Text,
    Flex,
    Heading,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Select,
    Textarea,
    Icon,
    Checkbox,
    Grid,
} from '@chakra-ui/core';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import Button from '../../components/button';
import ViewSingleQuestion from './viewSingleQuestion';
import VisibleQuestion from './visibleQuestion';

const oneQuestion = props => {
    const {allContentViews, setContentView, currentQuestionSet, currentQuestionMode} = props;
    const setAllQuestions = () => {
        setContentView(allContentViews.allQuestions);
    };

    const [team, setTeam] = React.useState(currentQuestionSet.team);
    const [name, setName] = React.useState(currentQuestionSet.name);
    const [note, setNote] = React.useState(currentQuestionSet.note);
    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [allTeams, setAllTeams] = React.useState([]);

    const addNewQuestion = () => {
        setQuestions(questions => [
            ...questions,
            {
                type: 'text',
                question: '',
                options: [],
            },
        ]);
    };

    const handleSaveQuestion = () => {
        const saveQuestion = async user => {
            setLoading(true);
            try {
                const res = await axios.put('/questionset', user);
                if (res?.data?.success && res?.data?.data) {
                    NotificationManager.success('Question successfully saved');
                    setAllQuestions();
                }
            } catch (error) {
                if (error?.response?.data?.errors) {
                    NotificationManager.error(error?.response?.data?.errors[0].msg);
                }
            } finally {
                setLoading(false);
            }
        };
        saveQuestion({
            id: currentQuestionSet.id,
            name: name || undefined,
            note: note || undefined,
            team: team || undefined,
            questions,
        });
    };

    React.useEffect(() => {
        if (currentQuestionMode == 'edit') {
            const getAllTeams = async () => {
                try {
                    const res = await axios.get('/team');
                    const {data} = res;
                    if (data.success && data.data) {
                        setAllTeams(data.data.teams);
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            getAllTeams();
        }
    }, []);

    React.useEffect(() => {
        setQuestions(currentQuestionSet.questions);
    }, []);

    return (
        <Box>
            <Flex maxWidth="fit-content" onClick={setAllQuestions} cursor="pointer" align="center">
                <Icon size="1.6rem" mr="5px" name="questionSetLeftArrow" />
                <Text color="#50514F" fontSize={['16px', '18px']}>
                    Back to Question set
                </Text>
            </Flex>
            <Box mt={['1.5rem']}>
                <Flex
                    flexDirection={['column', 'column', 'column', 'row']}
                    justify="space-between"
                    align="flex-start"
                >
                    <Box mb={['2rem', '2rem', '2rem', 0]} px={[0, 0, 0, '2rem']} flexBasis="50%">
                        <Heading as="h3" fontSize={['18px', '20px', '23px']}>
                            Question Title
                        </Heading>
                        <Box mt="1.5rem">
                            <FormControl marginBottom="1rem">
                                <FormLabel fontWeight="600" mb=".5rem" htmlFor="questionSetName">
                                    Name of Question set
                                </FormLabel>
                                {currentQuestionMode == 'view' && (
                                    <Input
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        required
                                        type="text"
                                        id="questionSetName"
                                        aria-describedby="Question set name"
                                        defaultValue={currentQuestionSet.name}
                                        isReadOnly
                                    />
                                )}
                                {currentQuestionMode == 'edit' && (
                                    <Input
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        required
                                        type="text"
                                        id="questionSetName"
                                        aria-describedby="Question set name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                )}
                            </FormControl>

                            <FormControl marginBottom="1rem">
                                <FormLabel fontWeight="600" mb="2px" htmlFor="questionSetTeam">
                                    Team
                                </FormLabel>
                                <FormHelperText mb=".7rem" mt="0" id="questionSetTeam">
                                    {currentQuestionMode == 'edit' ? 'Enter' : ''} The team that
                                    will have access to this question set
                                </FormHelperText>
                                {/* <Select
                                    isRequired
                                    border="1px solid #BDBDBD"
                                    borderRadius="0"
                                    placeholder="Select Team"
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select> */}
                                {currentQuestionMode == 'view' && (
                                    <Input
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        required
                                        type="text"
                                        defaultValue={currentQuestionSet.team}
                                        id="questionSetTeam"
                                        aria-describedby="Question set team"
                                        isReadOnly
                                    />
                                )}

                                {/* {currentQuestionMode == 'edit' && (
                                    <Input
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        required
                                        type="text"
                                        value={team}
                                        onChange={e => setTeam(e.target.value)}
                                        id="questionSetTeam"
                                        aria-describedby="Question set team"
                                    />
                                )} */}

                                {currentQuestionMode == 'edit' && (
                                    <Select
                                        isRequired
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        placeholder="Select Team"
                                        value={team.id}
                                        onChange={e => setTeam(e.target.value)}
                                    >
                                        {allTeams.map((elem, id) => {
                                            console.log(elem);
                                            return (
                                                <option key={id} value={elem.id}>
                                                    {elem.name}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                )}
                            </FormControl>

                            <FormControl marginBottom="1rem">
                                <FormLabel fontWeight="600" mb="2px" htmlFor="questionSetNote">
                                    Note to Referee
                                </FormLabel>
                                <FormHelperText mb=".7rem" mt="0" id="questionSetNote">
                                    Referees will receive this note in their Email
                                </FormHelperText>
                                {currentQuestionMode == 'view' && (
                                    <Textarea
                                        height="5rem"
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        py=".5rem"
                                        required
                                        isReadOnly
                                        defaultValue={currentQuestionSet.note}
                                    />
                                )}

                                {currentQuestionMode == 'edit' && (
                                    <Textarea
                                        height="5rem"
                                        border="1px solid #BDBDBD"
                                        borderRadius="0"
                                        py=".5rem"
                                        required
                                        value={note}
                                        onChange={e => setNote(e.target.value)}
                                    />
                                )}
                            </FormControl>
                        </Box>
                    </Box>
                    <Box
                        pb={['3rem', '4rem']}
                        borderLeft={['none', 'none', 'none', '1px solid #C4C4C4']}
                        px={[0, 0, 0, '2rem']}
                        flexBasis="50%"
                    >
                        <Heading as="h3" fontSize={['18px', '20px', '23px']}>
                            Questionnaire
                        </Heading>
                        {currentQuestionMode == 'edit' && (
                            <Text mt="1.2rem">
                                You can choose between multiple choice questions or text input
                                questions
                            </Text>
                        )}
                        <Box mt="1.5rem">
                            {currentQuestionMode == 'view' &&
                                currentQuestionSet.questions.map((elem, i) => (
                                    <ViewSingleQuestion
                                        key={i}
                                        number={i + 1}
                                        type={elem.type}
                                        options={elem.options}
                                        question={elem.question}
                                    />
                                ))}

                            {currentQuestionMode == 'edit' &&
                                questions.map((elem, i) => (
                                    <VisibleQuestion
                                        allQuestions={elem}
                                        removeQuestionHandler={() =>
                                            setQuestions(questions =>
                                                questions.filter((_, index) => index !== i),
                                            )
                                        }
                                        number={i + 1}
                                        key={i}
                                        setQuestions={setQuestions}
                                        type={elem.type}
                                        originalQuestion={elem.question}
                                        originalOptions={elem.options}
                                    />
                                ))}
                        </Box>

                        {currentQuestionMode == 'edit' && (
                            <Flex
                                mr={['0', '0', '2.5rem']}
                                justify="flex-end"
                                align={['flex-end', 'flex-end', 'center']}
                                mt={['3rem', '5rem']}
                                flexDir={['column', 'column', 'row']}
                            >
                                <Button
                                    _hover={{background: 'white'}}
                                    background="white"
                                    color="#000"
                                    border="1px solid #000"
                                    mr={[0, 0, '1rem']}
                                    height="2.4rem"
                                    mb={['.7rem', '.7rem', 0]}
                                    px={['1.8rem', '2rem']}
                                    onClick={addNewQuestion}
                                >
                                    Add new question
                                </Button>
                                <Button
                                    onClick={handleSaveQuestion}
                                    isLoading={loading}
                                    height="2.4rem"
                                >
                                    Save question set
                                </Button>
                            </Flex>
                        )}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default oneQuestion;
