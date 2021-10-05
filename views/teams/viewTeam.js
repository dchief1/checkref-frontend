import React from 'react';
import axios from 'axios';
import {
    Box,
    Flex,
    Icon,
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
    FormControl,
    Select,
    RadioGroup,
    Radio,
} from '@chakra-ui/core';
import Button from '../../components/button';
import {NotificationManager} from 'react-notifications';

const viewTeam = props => {
    const {setCurrentTeamState, teamStates, onNewMemberOpen, selectedTeam, updatedMembers} = props;
    const setAllTeams = () => {
        setCurrentTeamState(teamStates.allTeams);
    };
    const {isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose} = useDisclosure();
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [membersLoading, setMembersLoading] = React.useState(false);
    const [editingMember, setEditingMember] = React.useState({});
    const [editedMember, setEditedMember] = React.useState({
        role: 'member',
        isActive: 'false',
    });

    const handleEditMember = member => {
        setEditingMember(member);
        onEditOpen();
    };
    const getATeam = async id => {
        setMembersLoading(true);
        try {
            const res = await axios.get(`/team/${id}`);
            const {data} = res;
            if (data?.success && data?.data) {
                setTeamMembers(data?.data?.members);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setMembersLoading(false);
        }
    };

    const handleSubmitEdit = async e => {
        e.preventDefault();
        onEditClose();
        try {
            await axios.put('/team/changeteam', {
                id: editingMember.id,
                team: selectedTeam.id,
                ...editedMember,
                isActive: editedMember.isActive == 'true' ? true : false,
            });
            NotificationManager.success('Member updated successfully');
            getATeam(selectedTeam.id);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        getATeam(selectedTeam.id);
    }, []);

    React.useEffect(() => {
        if (updatedMembers) {
            setTeamMembers(updatedMembers);
        }
    }, [updatedMembers]);

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
                    {selectedTeam?.name}
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

                    <Box my="3rem" d={membersLoading ? 'flex' : 'none'}>
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
                    <Text
                        textAlign="center"
                        my="2rem"
                        mx="auto"
                        fontWeight="bold "
                        d={!membersLoading && teamMembers.length == 0 ? 'block' : 'none'}
                    >
                        No team member has been added yet
                    </Text>
                    {!membersLoading && teamMembers.length > 0 && (
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
                                        Actions
                                    </Text>
                                </Flex>
                                <Flex justify="space-between" align="center" flexDir="column">
                                    {teamMembers.map((row, index) => (
                                        <Flex
                                            borderBottom=" 0.5px solid #EDEDED"
                                            py={['.7rem', '.8rem', '1.2rem', '1.5rem']}
                                            px={['1.1rem']}
                                            width="100%"
                                            justify="space-between"
                                            key={index}
                                        >
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                mr="5px"
                                                flexBasis="19%"
                                            >
                                                {row.firstName} {row.lastName}
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
                                                {row.role}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="19%"
                                            >
                                                {row.isActive ? 'Active' : 'Deactivated'}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textDecor="underline"
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="19%"
                                                onClick={() => handleEditMember(row)}
                                                cursor="pointer"
                                            >
                                                Edit
                                            </Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* edit team member */}
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box p={[0, 0, '3.5rem', '2rem']}>
                        <ModalHeader>Edit team member</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleSubmitEdit}>
                            <ModalBody>
                                <FormControl
                                    borderRadius="0"
                                    border="1px solid"
                                    borderColor="#BDBDBD"
                                    marginBottom="1rem"
                                >
                                    <Select
                                        value={editedMember.role}
                                        onChange={e =>
                                            setEditedMember({
                                                ...editedMember,
                                                role: e.target.value,
                                            })
                                        }
                                        name="role"
                                        isRequired
                                        placeholder="Role of member"
                                    >
                                        <option value="member">Member</option>
                                    </Select>
                                </FormControl>
                                <RadioGroup
                                    onChange={e =>
                                        setEditedMember({
                                            ...editedMember,
                                            isActive: e.target.value,
                                        })
                                    }
                                    value={editedMember.isActive}
                                >
                                    <Radio value="true">Set active</Radio>
                                    <Radio value="false">Deactivate</Radio>
                                </RadioGroup>
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

export default viewTeam;
