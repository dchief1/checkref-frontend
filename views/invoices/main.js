import * as React from 'react';
import moment from 'moment';
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
    Image,
} from '@chakra-ui/core';
import Button from '../../components/button';
import ProfileMainContent from '../../components/profileMainContent';

const createData = (subscription, date, amountPaid) => {
    return {subscription, date, amountPaid};
};

const rows = [
    createData('ENTERPRISE', '22/05/2020', '50.00'),
    createData('PRO', '20/05/2020', '5.00'),
];

const main = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [payments, setPayments] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [currentInvoice, setCurrentInvoice] = React.useState(null);

    React.useEffect(() => {
        const getPayments = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/payment');
                const {data} = res;
                if (data?.success && data?.data) {
                    setPayments(
                        data?.data?.payments?.sort(
                            (a, b) =>
                                new Date(b?.createdAt)?.getTime() -
                                new Date(a?.createdAt)?.getTime(),
                        ),
                    );
                }
            } catch (err) {
                // catch errors
            } finally {
                setLoading(false);
            }
        };
        getPayments();
    }, []);
    return (
        <ProfileMainContent>
            <Box>
                <Box>
                    <Heading
                        mb={['.75rem', '.75rem', 0]}
                        as="h1"
                        fontSize={['18px', '20px', '23px', '25px']}
                    >
                        Invoices
                    </Heading>
                </Box>
                {loading ? (
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
                ) : (
                    <Box overflowX="auto">
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
                                    Subscription
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="24%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Date
                                </Text>
                                <Text
                                    textAlign="center"
                                    flexBasis="24%"
                                    fontWeight="bold"
                                    fontSize={['14px', '15px', '16px', '18px']}
                                >
                                    Amount paid
                                </Text>
                                <Text flexBasis="24%" />
                            </Flex>
                            {payments.length === 0 ? (
                                <Heading as="h3" size="lg" textAlign="center" my={12}>
                                    No payment has been made yet
                                </Heading>
                            ) : (
                                <Flex justify="space-between" align="center" flexDir="column">
                                    {payments.map((row, key) => (
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
                                                {row?.plan?.name}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="24%"
                                            >
                                                {moment(row?.updatedAt).format('YYYY-MM-DD')}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '15px', '16px']}
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="24%"
                                            >
                                                {row?.amount}
                                            </Text>
                                            <Box
                                                color="white"
                                                textAlign="center"
                                                mr="5px"
                                                flexBasis="24%"
                                            >
                                                <Text
                                                    borderRadius="2px"
                                                    width="40%"
                                                    mx="auto"
                                                    cursor="pointer"
                                                    p={['.5rem', '.3rem .5rem']}
                                                    fontSize={['14px', '15px', '16px']}
                                                    backgroundColor="#18287E"
                                                    onClick={() => {
                                                        setCurrentInvoice(row);
                                                        onOpen();
                                                    }}
                                                >
                                                    View
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            )}
                        </Box>
                    </Box>
                )}
            </Box>

            {/* view invoice modal */}
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image d="block" mx="auto" src="/images/invoice_logo.png" />
                        <Text textAlign="center" color="50514F" mt={4}>
                            Email: hello@checkref.co
                        </Text>
                        <Box mt={8}>
                            <Text>
                                {' '}
                                {moment(currentInvoice?.updatedAt).format('Do MMMM YYYY')} &nbsp;
                                {moment(currentInvoice?.updatedAt).format('hh:mm a')}
                            </Text>

                            <Box mt={8}>
                                <Flex justify="space-between" align="center">
                                    <Text flex={1} fontWeight="bold">
                                        Description
                                    </Text>
                                    <Text textAlign="center" flex={1} fontWeight="bold">
                                        Qty
                                    </Text>
                                    <Text textAlign="right" flex={1} fontWeight="bold">
                                        Amount
                                    </Text>
                                </Flex>
                                <Flex
                                    mt={2}
                                    pb={4}
                                    borderBottom="1px solid #ccc"
                                    justify="space-between"
                                    align="center"
                                >
                                    <Text flex={1}>{currentInvoice?.plan?.name}</Text>
                                    <Text textAlign="center" flex={1}>
                                        {' '}
                                        {currentInvoice?.plan?.credits}
                                    </Text>
                                    <Text textAlign="right" flex={1}>
                                        {' '}
                                        {currentInvoice?.amount}
                                    </Text>
                                </Flex>

                                <Flex mt={4} pb={8} justify="space-between" align="center">
                                    <Text flex={1}>Subtotal</Text>
                                    <Text textAlign="center" flex={1}>
                                        {' '}
                                        {currentInvoice?.plan?.credits}
                                    </Text>
                                    <Text textAlign="right" flex={1}>
                                        {' '}
                                        {currentInvoice?.amount}
                                    </Text>
                                </Flex>

                                <Flex mb={8} justify="space-between" align="center">
                                    <Text>Payment</Text>
                                    <Text fontSize="lg">{currentInvoice?.amount}</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button height="2.2rem" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ProfileMainContent>
    );
};

export default main;
