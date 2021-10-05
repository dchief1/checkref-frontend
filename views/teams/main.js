import React, {useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import {
    Box,
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
    FormHelperText,
    Textarea,
    Flex,
    Select,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/core';
import Button from '../../components/button';
import ProfileMainContent from '../../components/profileMainContent';
import AllTeams from './allTeams';
import EditTeam from './editTeam';
import ViewTeam from './viewTeam';
import {router} from 'next/client';

const teamStates = {
    allTeams: 'ALL_TEAMS',
    editTeam: 'EDIT_TEAM',
    viewTeam: 'VIEW_TEAM',
};

const main = props => {
    const getTeams = props.getTeams;
    const teams = props.teams;
    const getTeamsError = props.getTeamsError;
    const getTeamsSuccess = props.getTeamsSuccess;
    const getTeamsLoading = props.getTeamsLoading;

    const {
        isOpen: isNewMemberOpen,
        onOpen: onNewMemberOpen,
        onClose: onNewMemberClose,
    } = useDisclosure();

    const router = useRouter();
    const [currentTeamState, setCurrentTeamState] = useState(teamStates.allTeams);
    const [selectedTeam, setSelectedTeam] = useState({});
    const [newMember, setNewMember] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        role: '',
    });
    const [createLoading, setCreateLoading] = React.useState(false);
    const [updatedMembers, setUpdatedMembers] = React.useState(null);

    const handleNewMemberChange = e => {
        setNewMember({
            ...newMember,
            [e.target.name]: e.target.value,
        });
    };

    const getATeam = async id => {
        try {
            const res = await axios.get(`/team/${id}`);
            const {data} = res;
            if (data?.success && data?.data) {
                setUpdatedMembers(data?.data?.members);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const addUserToTeam = async user => {
        setCreateLoading(true);
        try {
            const res = await axios.post('/team/adduser', {
                ...user,
                team: selectedTeam.id,
            });
            const {data} = res;
            if (data.data && data.success) {
                NotificationManager.success('member added successfully');
                onNewMemberClose();
                getATeam(selectedTeam.id);
            }
        } catch (err) {
            if (err?.response?.data?.errors?.[0].msg) {
                NotificationManager.error(
                    `${err?.response?.data?.errors?.[0].msg} for ${err?.response?.data?.errors?.[0].param}`,
                );
            }
            console.log(err);
        } finally {
            setCreateLoading(false);
        }
    };

    const handleAddToTeam = e => {
        e.preventDefault();

        addUserToTeam(newMember);
    };
    return (
        <ProfileMainContent>
            {currentTeamState === teamStates.allTeams && (
                <AllTeams
                    getTeams={getTeams}
                    teams={teams}
                    getTeamsError={getTeamsError}
                    getTeamsSuccess={getTeamsSuccess}
                    getTeamsLoading={getTeamsLoading}
                    setCurrentTeamState={setCurrentTeamState}
                    teamStates={teamStates}
                    setSelectedTeam={setSelectedTeam}
                    selectedTeam={selectedTeam}
                />
            )}
            {currentTeamState === teamStates.editTeam && (
                <EditTeam
                    onNewMemberOpen={onNewMemberOpen}
                    setCurrentTeamState={setCurrentTeamState}
                    teamStates={teamStates}
                />
            )}
            {currentTeamState === teamStates.viewTeam && (
                <ViewTeam
                    onNewMemberOpen={onNewMemberOpen}
                    setCurrentTeamState={setCurrentTeamState}
                    teamStates={teamStates}
                    selectedTeam={selectedTeam}
                    updatedMembers={updatedMembers}
                />
            )}
            <Modal isOpen={isNewMemberOpen} onClose={onNewMemberClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box p={[0, 0, '3.5rem', '2rem']}>
                        <ModalHeader>Add new Member</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleAddToTeam}>
                            <ModalBody>
                                <FormControl marginBottom="1.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={newMember.firstName}
                                        onChange={handleNewMemberChange}
                                        aria-describedby="first name"
                                        placeholder="Enter first name of member"
                                    />
                                </FormControl>
                                <FormControl marginBottom="1.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={newMember.lastName}
                                        onChange={handleNewMemberChange}
                                        aria-describedby="last name"
                                        placeholder="Enter last name of member"
                                    />
                                </FormControl>
                                <FormControl
                                    borderRadius="0"
                                    border="1px solid"
                                    borderColor="#BDBDBD"
                                    marginBottom="1rem"
                                >
                                    <Select
                                        value={newMember.role}
                                        onChange={handleNewMemberChange}
                                        name="role"
                                        isRequired
                                        placeholder="Role of the team"
                                    >
                                        <option value="member">Member</option>
                                        <option value="admin">Admin</option>
                                    </Select>
                                </FormControl>
                                <FormControl marginBottom="1.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="number"
                                        maxLength={11}
                                        id="phone"
                                        name="phone"
                                        value={newMember.phone}
                                        onChange={handleNewMemberChange}
                                        aria-describedby="phone number"
                                        placeholder="Enter phone number of member"
                                    />
                                </FormControl>
                                <FormControl marginBottom="1.5rem">
                                    <Input
                                        borderRadius="0"
                                        border="1px solid"
                                        borderColor="#BDBDBD"
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={newMember.email}
                                        onChange={handleNewMemberChange}
                                        aria-describedby="email"
                                        placeholder="Enter email of member"
                                    />
                                </FormControl>
                                <FormControl
                                    borderRadius="0"
                                    border="1px solid"
                                    borderColor="#BDBDBD"
                                    marginBottom="1rem"
                                >
                                    <Textarea
                                        height="8rem"
                                        borderRadius="0"
                                        border="0"
                                        py="1rem"
                                        placeholder="Optional note..."
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Flex justify="center" align="center">
                                    <Button isLoading={createLoading} type="submit">
                                        Add member(s)
                                    </Button>
                                </Flex>
                            </ModalFooter>
                        </form>
                    </Box>
                </ModalContent>
            </Modal>
        </ProfileMainContent>
    );
};

export default main;
