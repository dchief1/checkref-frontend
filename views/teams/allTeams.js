import React from 'react';
import axios from 'axios';
import {
    Box,
    Flex,
    Text,
    Heading,
    Spinner,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    FormControl,
    Select,
    Textarea,
} from '@chakra-ui/core';
import {NotificationManager} from 'react-notifications';
import Button from '../../components/button';

const createData = elem => {
    return {name: elem.name, description: elem.description, number: elem.number, id: elem.id};
};

const allTeams = props => {
    const {isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose} = useDisclosure();
    const {isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose} = useDisclosure();

    const getTeams = props.getTeams;
    const teams = props.teams;
    const getTeamsError = props.getTeamsError;
    const getTeamsSuccess = props.getTeamsSuccess;
    const getTeamsLoading = props.getTeamsLoading;

    const {setCurrentTeamState, teamStates, selectedTeam, setSelectedTeam} = props;

    const [teamRows, setTeamRows] = React.useState([]);
    const [newTeam, setNewTeam] = React.useState({name: '', description: ''});
    const [toEdit, setToEdit] = React.useState({});
    const [editingTeamName, setEditingTeamName] = React.useState('');
    const [editingTeamDescription, setEditingTeamDescription] = React.useState('');

    const setViewTeam = () => {
        setCurrentTeamState(teamStates.viewTeam);
    };
    const handleChange = e => {
        setNewTeam({
            ...newTeam,
            [e.target.name]: e.target.value,
        });
    };

    const createTeam = async details => {
        try {
            const res = await axios.post('/team', details);
            setTeamRows([...teamRows, res.data?.data]);
            NotificationManager.success('Team created successfully!');
            getTeams();
        } catch (err) {
            console.log(err);
        }
    };

    const handleCreateTeam = () => {
        onCreateClose();
        createTeam(newTeam);
    };

    const handleEditTeam = async () => {
        onEditClose();
        try {
            await axios.put('/team', {
                id: selectedTeam?.id,
                name: editingTeamName,
                description: editingTeamDescription,
            });
            NotificationManager.success('Team updated successfully!');
            getTeams();
        } catch (err) {
            console.log(err.response);
        }
    };

    React.useEffect(() => {
        if (teams?.teams) {
            setTeamRows(teams.teams.map(e => createData(e)));
            console.log(teams.teams);
        }
    }, [teams]);

    React.useEffect(() => {
        setEditingTeamName(toEdit?.name);
        setEditingTeamDescription(toEdit?.description);
    }, [toEdit]);

    return (
        <Box>
            <Box>
                <Flex
                    align={['flex-start', 'flex-start', 'center']}
                    flexDirection={['column', 'column', 'row']}
                    justify="space-between"
                >
                    <Heading
                        mb={['.75rem', '.75rem', 0]}
                        as="h1"
                        fontSize={['18px', '20px', '23px', '25px']}
                    >
                        Teams
                    </Heading>
                    <Button onClick={onCreateOpen} height="2.5rem">
                        Create new team
                    </Button>
                </Flex>
            </Box>
            <Box d={getTeamsLoading ? 'flex' : 'none'}>
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
            <Box overflowX="auto">
                {getTeamsSuccess && !getTeamsLoading && (
                    <>
                        {teamRows.length == 0 && (
                            <Text mt="3rem" textAlign="center">
                                No team has been created yet
                            </Text>
                        )}
                        {teamRows.length > 1 && (
                            <Box minWidth="500px" py={['.8rem', '.8rem', '1.7rem']}>
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
                                        flexBasis="24%"
                                        fontWeight="bold"
                                        fontSize={['14px', '15px', '16px', '18px']}
                                    >
                                        Team name
                                    </Text>
                                    <Text
                                        textAlign="center"
                                        flexBasis="24%"
                                        fontWeight="bold"
                                        fontSize={['14px', '15px', '16px', '18px']}
                                    >
                                        Description
                                    </Text>
                                    <Text
                                        textAlign="center"
                                        flexBasis="24%"
                                        fontWeight="bold"
                                        fontSize={['14px', '15px', '16px', '18px']}
                                    >
                                        Action
                                    </Text>
                                    <Text flexBasis="24%" />
                                </Flex>
                                <Flex justify="space-between" align="center" flexDir="column">
                                    {teamRows.map((row, key) => (
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
                                                flexBasis="24%"
                                            >
                                                {row.name}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="24%"
                                            >
                                                {row.description}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textAlign="center"
                                                textDecor="underline"
                                                mr="5px"
                                                flexBasis="24%"
                                                onClick={() => {
                                                    setSelectedTeam(row);
                                                    setToEdit(row);
                                                    onEditOpen();
                                                }}
                                                cursor="pointer"
                                            >
                                                Edit
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textDecor="underline"
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="24%"
                                                onClick={() => {
                                                    setSelectedTeam(row);
                                                    setViewTeam();
                                                }}
                                                cursor="pointer"
                                            >
                                                View
                                            </Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Box>
                        )}
                    </>
                )}
            </Box>

            {/* create new team modal */}
            <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box p={[0, 0, '3.5rem', '2rem']}>
                        <ModalHeader>Create a new team</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleCreateTeam}>
                            <ModalBody>
                                <FormControl marginBottom="2.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="text"
                                        isRequired
                                        aria-describedby="text"
                                        placeholder="Name of the team"
                                        value={newTeam.name}
                                        onChange={handleChange}
                                        name="name"
                                    />
                                </FormControl>
                                <FormControl marginBottom="1rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="text"
                                        isRequired
                                        aria-describedby="text"
                                        placeholder="Description of the team"
                                        value={newTeam.description}
                                        onChange={handleChange}
                                        name="description"
                                    />
                                    {/* <Select
                                        value={newTeam.role}
                                        onChange={handleChange}
                                        name="role"
                                        isRequired
                                        placeholder="Role of the team"
                                    >
                                        <option value="member">Member</option>
                                    </Select> */}
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Flex justify="center" align="center">
                                    <Button type="submit">Submit</Button>
                                </Flex>
                            </ModalFooter>
                        </form>
                    </Box>
                </ModalContent>
            </Modal>

            {/* edit team modal */}
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box p={[0, 0, '3.5rem', '2rem']}>
                        <ModalHeader>Edit team</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={() => handleEditTeam()}>
                            <ModalBody>
                                <FormControl marginBottom="2.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="text"
                                        isRequired
                                        aria-describedby="text"
                                        placeholder="Name of the team"
                                        value={editingTeamName}
                                        onChange={e => setEditingTeamName(e.target.value)}
                                        name="name"
                                    />
                                </FormControl>
                                <FormControl marginBottom="2.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="text"
                                        isRequired
                                        aria-describedby="text"
                                        placeholder="Team description"
                                        value={editingTeamDescription}
                                        onChange={e => setEditingTeamDescription(e.target.value)}
                                        name="description"
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Flex justify="center" align="center">
                                    <Button type="submit">Submit</Button>
                                </Flex>
                            </ModalFooter>
                        </form>
                    </Box>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default allTeams;
