import * as React from 'react';
import PropTypes from 'prop-types';
import {Grid, Flex, Box, Textarea, Select} from '@chakra-ui/core';

const VisibleQuestion = props => {
    const {number, type, options, question} = props;

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
                value={type}
            >
                <option value={type}>{type == 'text' ? 'Text' : 'Multi-choice'}</option>
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
                />
                {type == 'multichoice' && (
                    <Textarea
                        mt="1rem"
                        border="1px solid #BDBDBD"
                        borderRadius="4px"
                        py=".5rem"
                        defaultValue={options.join(', ')}
                        isReadOnly
                    />
                )}
            </Box>
        </Grid>
    );
};

VisibleQuestion.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default VisibleQuestion;
