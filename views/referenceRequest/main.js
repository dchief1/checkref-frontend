import * as React from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import moment from 'moment';
import {
    Box,
    Text,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/core';
import UserService from '../../services/user.service';
import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';
import {NotificationManager} from 'react-notifications';

const Main = () => {
    const router = useRouter();
    const {
        isOpen: isReminderOpen,
        onOpen: onReminderOpen,
        onClose: onReminderClose,
    } = useDisclosure();

    const [user, setUser] = React.useState({
        name: '',
        email: '',
        phone: '',
        references: 1,
        note: '',
        questionSet: '',
    });
    const [questions, setQuestions] = React.useState([]);
    const [initialMoment, setInitialMoment] = React.useState(
        moment(moment().format('YYYY-MM-DD', new Date(Date.now())), 'YYYY-MM-DD'),
    );
    const [reminders, setReminders] = React.useState({
        first: '24 hours',
        second: '3 days',
        third: '12 hours',
        fourth: '3 days',
    });
    const [formLoading, setFormLoading] = React.useState(false);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeReminder = e => {
        setReminders({
            ...reminders,
            [e.target.name]: e.target.value,
        });
    };

    const handleSetReminder = e => {
        e.preventDefault();
        onReminderClose();
    };
    const handleSubmitRequest = async e => {
        e.preventDefault();
        setFormLoading(true);
        if (!user?.name?.split(' ')[1]) {
            NotificationManager.error('Last name is required.');
            return;
        }
        try {
            await axios.post('/reference', {
                candidate: {
                    name: user?.name,
                    email: user.email,
                    phone: user.phone,
                },
                numberOfReferees: user.references,
                note: user.note,
                reminder: {
                    first: initialMoment.add(
                        reminders.first.split(' ')[0],
                        reminders.first.split(' ')[1],
                    ),
                    second: initialMoment.add(
                        reminders.second.split(' ')[0],
                        reminders.second.split(' ')[1],
                    ),
                    third: initialMoment.add(
                        reminders.third.split(' ')[0],
                        reminders.third.split(' ')[1],
                    ),
                    fourth: initialMoment.add(
                        reminders.fourth.split(' ')[0],
                        reminders.fourth.split(' ')[1],
                    ),
                },
                questionSet: user.questionSet,
            });
            NotificationManager.success('Reference created.');
            setUser({
                name: '',
                email: '',
                phone: '',
                references: 1,
                note: '',
                questionSet: '',
            });
            setTimeout(() => {
                router.push('/profile/dashboard');
            }, 1200);
        } catch (err) {
            console.log(err);
        } finally {
            setFormLoading(false);
        }
    };

    React.useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await axios.get('/questionset');
                const {data} = res;
                if (data?.data && data?.success) {
                    setQuestions(data?.data?.questionSets);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getQuestions();
    }, []);
    return (
        <ProfileMainContent>
            <Flex mb={['2.5rem', '3rem']}>
                <Heading as="h1">New Reference Request</Heading>
            </Flex>

            <Box maxWidth="550px">
                <form onSubmit={handleSubmitRequest}>
                    <FormControl mb="2rem">
                        <FormLabel mb="0px" fontWeight="bold" htmlFor="candidateName">
                            Candidates Name
                        </FormLabel>
                        <Input
                            isRequired
                            mt="0px"
                            border="0"
                            borderRadius="0"
                            borderBottom="1px solid #bdbdbd"
                            type="text"
                            backgroundColor="inherit"
                            id="candidateName"
                            name="name"
                            onChange={handleChange}
                            value={user.name}
                        />
                    </FormControl>

                    <FormControl mb="2rem">
                        <FormLabel mb="0px" fontWeight="bold" htmlFor="candidateEmail">
                            Candidates Email
                        </FormLabel>
                        <Input
                            mt="0px"
                            border="0"
                            borderRadius="0"
                            borderBottom="1px solid #bdbdbd"
                            type="email"
                            isRequired
                            backgroundColor="inherit"
                            id="candidateEmail"
                            name="email"
                            onChange={handleChange}
                            value={user.email}
                        />
                    </FormControl>

                    <FormControl mb="2rem">
                        <FormLabel mb="0px" fontWeight="bold" htmlFor="candidatePhoneNumber">
                            Candidates Phone Number
                        </FormLabel>
                        <Input
                            mt="0px"
                            border="0"
                            borderRadius="0"
                            borderBottom="1px solid #bdbdbd"
                            type="text"
                            isRequired
                            backgroundColor="inherit"
                            id="candidatePhoneNumber"
                            name="phone"
                            onChange={handleChange}
                            value={user.phone}
                        />
                    </FormControl>

                    <FormControl mb="2rem">
                        <FormLabel mb=".6rem" fontWeight="bold">
                            Question set
                        </FormLabel>
                        <Select
                            isRequired
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select a saved question set"
                            value={user.questionSet}
                            onChange={handleChange}
                            name="questionSet"
                        >
                            {questions.map((e, i) => (
                                <option value={e.id} key={i}>
                                    {e.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl mb="2rem">
                        <FormLabel mb=".6rem" fontWeight="bold">
                            Number of references
                        </FormLabel>
                        <Select
                            isRequired
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select number of references"
                            onChange={handleChange}
                            name="references"
                            value={user.references}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </Select>
                    </FormControl>

                    <FormControl mb="2rem">
                        <FormLabel mb=".6rem" fontWeight="bold">
                            Note to candidate
                        </FormLabel>
                        <Textarea
                            height="8rem"
                            borderRadius="0"
                            border="0"
                            py="1rem"
                            placeholder="Note to candidate"
                            name="note"
                            onChange={handleChange}
                            value={user.note}
                        />
                    </FormControl>

                    <Flex mb="2rem" align="center" justify="space-between">
                        <Text fontWeight="bold">Set reminder</Text>
                        <Text
                            onClick={onReminderOpen}
                            cursor="pointer"
                            color="#18287e"
                            textDecor="underline"
                        >
                            Click here to set
                        </Text>
                    </Flex>

                    <Flex justifyContent="flex-end" mb="2rem">
                        <Text fontWeight="bold" fontSize={['16px', '18px']}>
                            Credit balance: {UserService.getUser()?.company?.credit || 50}
                        </Text>
                    </Flex>

                    <Button
                        isLoading={formLoading}
                        width="100%"
                        height="2.3rem"
                        mb="2rem"
                        type={'submit'}
                    >
                        Send request
                    </Button>
                </form>

                {/* reminder modal */}
                <Modal size="xl" isOpen={isReminderOpen} onClose={onReminderClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <Box p={[0, 0, '3.5rem', '2rem']}>
                            <ModalHeader>Reminder Messages</ModalHeader>
                            <ModalCloseButton />
                            <form onSubmit={handleSetReminder}>
                                <ModalBody>
                                    <Text>
                                        Set your specific reminders for this reference request below
                                    </Text>
                                    <Flex
                                        align={['flex-start', 'flex-start', 'center']}
                                        justify="space-between"
                                        flexDir={['column', 'column', 'row']}
                                        my="1rem"
                                    >
                                        <FormControl mb="2rem">
                                            <FormLabel mb=".6rem" fontWeight="bold">
                                                First Reminder
                                            </FormLabel>
                                            <Select
                                                isRequired
                                                backgroundColor="inherit"
                                                border="1px solid #bdbdbd"
                                                borderRadius="4px"
                                                placeholder="Select reminder"
                                                onChange={handleChangeReminder}
                                                name="first"
                                                value={reminders.first}
                                            >
                                                <option value="24 hours">24 hours</option>
                                                <option value="2 days">2 days</option>
                                                <option value="3 days">3 days</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mb="2rem">
                                            <FormLabel mb=".6rem" fontWeight="bold">
                                                Second Reminder
                                            </FormLabel>
                                            <Select
                                                isRequired
                                                backgroundColor="inherit"
                                                border="1px solid #bdbdbd"
                                                borderRadius="4px"
                                                placeholder="Select reminder"
                                                onChange={handleChangeReminder}
                                                name="second"
                                                value={reminders.second}
                                            >
                                                <option value="1 day">1 day after Previous</option>
                                                <option value="2 days">
                                                    2 days after Previous
                                                </option>
                                                <option value="3 days">
                                                    3 days after Previous
                                                </option>
                                            </Select>
                                        </FormControl>
                                    </Flex>
                                    <Flex
                                        align={['flex-start', 'flex-start', 'center']}
                                        justify="space-between"
                                        flexDir={['column', 'column', 'row']}
                                        my="1rem"
                                    >
                                        <FormControl mb="2rem">
                                            <FormLabel mb=".6rem" fontWeight="bold">
                                                Third reminder
                                            </FormLabel>
                                            <Select
                                                isRequired
                                                backgroundColor="inherit"
                                                border="1px solid #bdbdbd"
                                                borderRadius="4px"
                                                placeholder="Select reminder"
                                                onChange={handleChangeReminder}
                                                name="third"
                                                value={reminders.third}
                                            >
                                                <option value="12 hours">
                                                    12 hours after Previous
                                                </option>
                                                <option value="24 hours">
                                                    24 hours after Previous
                                                </option>
                                                <option value="1 day">1 day after Previous</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl mb="2rem">
                                            <FormLabel mb=".6rem" fontWeight="bold">
                                                Final reminder
                                            </FormLabel>
                                            <Select
                                                isRequired
                                                backgroundColor="inherit"
                                                border="1px solid #bdbdbd"
                                                borderRadius="4px"
                                                placeholder="Select reminder"
                                                onChange={handleChangeReminder}
                                                name="fourth"
                                                value={reminders.fourth}
                                            >
                                                <option value="3 days">
                                                    3 days after Previous
                                                </option>
                                                <option value="4 days">
                                                    4 days after Previous
                                                </option>
                                                <option value="5 days">
                                                    5 days after Previous
                                                </option>
                                            </Select>
                                        </FormControl>
                                    </Flex>
                                    <Text>
                                        Note: This changes applies only to this reference request
                                    </Text>
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
        </ProfileMainContent>
    );
};

export default Main;
