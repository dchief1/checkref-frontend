import React from 'react';
import {Box, Flex, Icon, Text, Heading, Select} from '@chakra-ui/core';
import Button from '../../components/button';

const createData = (name, email, role, status, actions) => {
    return {name, email, role, status, actions};
};

const rows = [
    createData('Fikayo Tomori', 'Fikayo@smart.ng', 'ADMIN', 'Active'),
    createData('Bukayo Saka', 'Saka@smart.ng', 'MEMEBER', 'Active'),
    createData('Ola Aina', 'Ola@smart.ng', 'MEMEBER', 'Disabled'),
];

const editTeam = props => {
    const {setCurrentTeamState, teamStates, onNewMemberOpen} = props;
    const setAllTeams = () => {
        setCurrentTeamState(teamStates.allTeams);
    };
    return (
        <Box>
            <Flex maxWidth="fit-content" onClick={setAllTeams} cursor="pointer" align="center">
                <Icon size="1.6rem" mr="5px" name="questionSetLeftArrow" />
                <Text color="#50514F" fontSize={['16px', '18px']}>
                    Back to Teams
                </Text>
            </Flex>

            <Box mt={['1rem']} mb={['2rem']}>
                <Heading fontSize={['18px', '20px', '24px']} as="h2">
                    HR ADMIN
                </Heading>

                <Box>
                    <Box mt={['1rem', '2rem']} mb="0px">
                        <Button
                            onClick={onNewMemberOpen}
                            px={['1rem', '2rem']}
                            d="block"
                            ml="auto"
                            height="2.5rem"
                        >
                            Add new member
                        </Button>
                    </Box>
                    <Box overflowX="auto">
                        <Box minWidth="500px" pt=".5rem" pb={['.8rem', '.8rem', '1.7rem']}>
                            <Flex
                                mt=".7rem"
                                align="center"
                                justify="space-between"
                                backgroundColor="#F1F3F8"
                                py={['.7rem', '.8rem', '1.2rem', '1.5rem']}
                                px={['1.1rem']}
                                borderRadius="9px 9px 8px 0px"
                            >
                                <Text
                                    flexBasis="19%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Name
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="19%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Email
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="19%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Role
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="19%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Status
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="19%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Team
                                </Text>
                            </Flex>
                            <Flex justify="space-between" align="center" flexDir="column">
                                {rows.map((row, key) => (
                                    <Flex
                                        borderBottom=" 0.5px solid #EDEDED"
                                        py={['.7rem', '.8rem', '1.2rem', '1.5rem']}
                                        px={['1.1rem']}
                                        width="100%"
                                        justify="space-between"
                                        key={key}
                                    >
                                        <Text
                                            fontSize={['14px', '15px', '16px']}
                                            mr="5px"
                                            flexBasis="19%"
                                        >
                                            {row.name}
                                        </Text>
                                        <Text
                                            fontSize={['14px', '15px', '16px']}
                                            textAlign="center"
                                            mr="5px"
                                            flexBasis="19%"
                                        >
                                            {row.email}
                                        </Text>
                                        <Text
                                            fontSize={['14px', '15px', '16px']}
                                            textAlign="center"
                                            mr="5px"
                                            flexBasis="19%"
                                        >
                                            <Select
                                                ml={['18px', '1.7rem']}
                                                fontSize={['10px', '16px']}
                                                px={['5px', '1rem']}
                                                width={['85%', '75%']}
                                                placeholder="Select option"
                                            >
                                                <option selected value="option1">
                                                    ADMIN
                                                </option>
                                                <option value="option2">MEMBER</option>
                                            </Select>
                                        </Text>
                                        <Text
                                            fontSize={['14px', '15px', '16px']}
                                            textAlign="center"
                                            mr="5px"
                                            flexBasis="19%"
                                        >
                                            <Select
                                                ml="18px"
                                                fontSize={['10px', '16px']}
                                                px={['5px', '1rem']}
                                                width="85%"
                                                placeholder="Select option"
                                            >
                                                <option selected value="option1">
                                                    Active
                                                </option>
                                                <option value="option2">Disabled</option>
                                            </Select>
                                        </Text>
                                        <Text
                                            fontSize={['14px', '15px', '16px']}
                                            textAlign="center"
                                            mr="5px"
                                            flexBasis="19%"
                                        >
                                            HR ADMIN
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Flex
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
                >
                    Cancel changes
                </Button>
                <Button px={['2.3rem', '2rem']} height="2.4rem">
                    Save changes
                </Button>
            </Flex>
        </Box>
    );
};

export default editTeam;
