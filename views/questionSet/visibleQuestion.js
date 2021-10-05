import * as React from 'react';
import PropTypes from 'prop-types';
import {Grid, Flex, Box, Textarea, Checkbox, Text, Icon, Select, Input} from '@chakra-ui/core';

const VisibleQuestion = props => {
    const {
        removeQuestionHandler,
        number,
        setQuestions,
        type,
        originalQuestion,
        originalOptions,
    } = props;

    const [questionType, setQuestionType] = React.useState(type || 'text');
    const [question, setQuestion] = React.useState(originalQuestion || '');
    const [optionsText, setOptionsText] = React.useState(originalOptions.join(', '));
    const [options, setOptions] = React.useState(originalOptions || []);

    React.useEffect(() => {
        let isMounted = true;
        if (/\S/.test(optionsText)) {
            setOptions(optionsText.split(',').map(e => e.trim()));
        }
        return () => {
            isMounted = false;
        };
    }, [optionsText]);

    React.useEffect(() => {
        let isMounted = true;
        setQuestions(questions => {
            const allQuestions = [...questions];
            allQuestions[number - 1] = {
                type: questionType,
                question,
                options,
            };
            return allQuestions;
        });
        return () => {
            isMounted = false;
        };
    }, [questionType, question, options]);

    return (
        <Grid
            mb={['2rem', '2.5rem']}
            justifyContent="space-between"
            gridTemplateColumns={['auto .7fr auto', 'auto .7fr auto', 'auto auto 1.5fr auto']}
            gridTemplateRows={['1fr 2fr', '1fr 2fr', '1fr']}
            gridTemplateAreas={[
                "'number select icon' 'textarea textarea textarea'",
                "'number select icon' 'textarea textarea textarea'",
                "'number select textarea icon'",
            ]}
        >
            <Flex
                align="center"
                justify="center"
                fontSize="12px"
                textAlign="center"
                color="white"
                height="1.6rem"
                width="1.6rem"
                borderRadius="50%"
                backgroundColor="brand.darkBlue"
                gridArea="number"
            >
                {number}
            </Flex>
            <Select
                gridArea="select"
                display="grid"
                marginBottom="auto"
                mx={[0, 0, '8px']}
                width={['100%', '100%', '90%']}
                fontSize="13px"
                mr="5px"
                border="1px solid #BDBDBD"
                borderRadius="4px"
                value={questionType}
                onChange={e => setQuestionType(e.target.value)}
            >
                <option value="text">Text</option>
                <option value="multichoice">Multi-choice</option>
            </Select>

            <Box gridArea="textarea" mr="8px">
                <Textarea
                    height="5rem"
                    border="1px solid #BDBDBD"
                    borderRadius="4px"
                    py=".5rem"
                    required
                    placeholder="Enter Question"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />
                {questionType == 'multichoice' && (
                    <Textarea
                        mt="1rem"
                        border="1px solid #BDBDBD"
                        borderRadius="4px"
                        py=".5rem"
                        placeholder="Enter options. Separate each value with a comma"
                        value={optionsText}
                        onChange={e => setOptionsText(e.target.value)}
                    />
                )}
                <Checkbox isChecked mt={['.6rem', 0]}>
                    <Text fontSize="12px" as="small">
                        Click to make this question required
                    </Text>
                </Checkbox>
            </Box>
            <Icon
                onClick={() => removeQuestionHandler()}
                gridArea="icon"
                cursor="pointer"
                size="1.5rem"
                name="questionSetDelete"
            />
        </Grid>
    );
};

VisibleQuestion.propTypes = {
    number: PropTypes.number.isRequired,
    removeQuestionHandler: PropTypes.func.isRequired,
    setQuestions: PropTypes.func.isRequired,
    type: PropTypes.string,
    originalOptions: PropTypes.array,
    originalQuestion: PropTypes.string,
};

export default VisibleQuestion;
