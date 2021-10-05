import React, {useEffect, useMemo, useState} from 'react';
import {usePaystackPayment} from 'react-paystack';
import Axios from 'axios';
import {NotificationManager} from 'react-notifications';
import {Text, Box, Heading, Flex, Image, FormControl, FormLabel, Select} from '@chakra-ui/core';

import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';
import UserService from '../../services/user.service';
import {formatCurrency, formatNumber} from '../../utils';

// eslint-disable-next-line react/prop-types
const PaystackHook = ({config, pay, success, close}) => {
    const initializePayment = usePaystackPayment(config || {});
    if (pay) {
        initializePayment(success, close);
    }
    return <></>;
};

const main = () => {
    const [company, setCompany] = useState(UserService.getCompany() || {});
    const [user] = useState(UserService.getUser() || {});
    const [paymentProps, setPaymentProps] = useState({});

    const [loading, setLoading] = useState(true);
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState({});
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        Axios.get('/payment/plans')
            .then(res => res.data.data)
            .then(plans => {
                setPlans(plans);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                const {response} = err;
                if (!response) return;

                NotificationManager.error(response.data.message);
            });
    }, []);

    const cost = useMemo(() => {
        if (!selectedPlan.cost) {
            return 0;
        }
        if (selectedPlan?.options?.length === 0) {
            return selectedPlan?.cost || 0;
        }

        return Number(selectedPlan.cost) * Number(selectedOption);
    }, [selectedPlan, selectedOption]);

    const credits = useMemo(() => {
        if (!selectedPlan.credits) {
            return 0;
        }
        if (selectedPlan.options.length === 0) {
            return selectedPlan.credits || 0;
        }

        if (!selectedOption) {
            return 0;
        }

        return (selectedPlan.options.find(p => p.pack == selectedOption) || {}).credits;
    }, [selectedPlan, selectedOption]);

    async function proceedPayment() {
        setLoading(true);
        try {
            const {paymentId, publicKey} = await Axios.post('/payment', {
                plan: selectedPlan.id,
                amount: Number(cost),
            }).then(res => res.data.data);

            const user = UserService.getUser();

            setPaymentProps({
                config: {
                    reference: paymentId,
                    email: user.email,
                    amount: Number(cost) * 100,
                    publicKey: publicKey,
                },
                pay: true,
                success: async function() {
                    try {
                        setLoading(true);
                        const paymentRes = await Axios.get(`payment/verify/${paymentId}`).then(
                            res => res.data.data,
                        );

                        user.company = paymentRes.company;

                        UserService.setUser(user);
                        setCompany(user.company);

                        NotificationManager.success('Payment successful');
                    } catch (err) {
                        const {response} = err;
                        if (!response) {
                            return;
                        }
                        NotificationManager.error(response);
                    }
                    setLoading(false);
                },
                close: function() {},
            });
        } catch (err) {
            console.log(err);
            if (!err.response) {
                return;
            }
            NotificationManager.error(`Payment not successful`);
        }
        setPaymentProps({});
        setLoading(false);
    }

    return (
        <ProfileMainContent>
            <Box mb={['2.4rem']}>
                <Heading
                    mb={['.75rem', '.75rem', 0]}
                    as="h1"
                    fontSize={['18px', '20px', '23px', '25px']}
                >
                    Billing
                </Heading>
            </Box>
            <Box>
                <Flex
                    mb={['2rem', '3.5rem']}
                    flexDir={['column', 'column', 'row']}
                    justify="space-between"
                >
                    <Flex
                        justify="center"
                        align="center"
                        flexBasis="100%"
                        boxShadow="0px 1px 8px rgba(0, 0, 0, 0.25)"
                        border="1px solid #BDBDBD"
                        borderRadius="4px"
                        backgroundColor="#18287E"
                        textAlign="center"
                        p={['1rem 2rem', '2.5rem']}
                        color="brand.white"
                        mb={['1.5rem', '1.5rem', 0]}
                    >
                        <Box>
                            <Heading
                                mb="1.5rem"
                                as="h4"
                                fontSize={['20px', '25px', '30px', '36px']}
                            >
                                {company.credit}
                            </Heading>
                            <Text fontWeight="normal" fontSize={['16px', '18px', '20px']}>
                                Credit Balance
                            </Text>
                        </Box>
                    </Flex>
                    {/*
                     <Box
                        p={['1rem 2rem', '2.5rem']}
                        flexBasis="48%"
                        boxShadow="0px 1px 8px rgba(0, 0, 0, 0.25)"
                        borderRadius="4px"
                        border="1px solid #BDBDBD"
                        backgroundColor="#fff"
                    >
                        <Flex
                            align={['flex-end', 'flex-end', 'center']}
                            flexDirection={['column', 'column', 'column', 'row']}
                            flexBasis={['50%', '68%']}
                        >
                            <Box mb={['1rem', '1rem', '1rem', 0]} mx={['auto', 'auto', 0]}>
                                <Image
                                    mx={['auto', 'auto', 0]}
                                    mb={['1.5rem', '1.5rem', 0]}
                                    width={['50%', '60%', '80%']}
                                    src="/images/dashboard_chart.svg"
                                />
                            </Box>
                            <Box ml={['auto', 'auto', 0]} mr="auto" flexBasis={['35%']}>
                                <Flex align="center" mb="1rem">
                                    <Box
                                        mr={['.4rem']}
                                        height={['8px', '12px']}
                                        width={['8px', '12px']}
                                        borderRadius="50%"
                                        backgroundColor="#40DAB2"
                                    />
                                    <Text fontSize={['14px', '16px']}>80% Balance</Text>
                                </Flex>
                                <Flex align="center" mb="1rem">
                                    <Box
                                        mr={['.4rem']}
                                        height={['8px', '12px']}
                                        width={['8px', '12px']}
                                        borderRadius="50%"
                                        backgroundColor="#FEC771"
                                    />
                                    <Text fontSize={['14px', '16px']}>20% Used</Text>
                                </Flex>
                                <Flex align="center">
                                    <Box
                                        mr={['.4rem']}
                                        height={['8px', '12px']}
                                        width={['8px', '12px']}
                                        borderRadius="50%"
                                        backgroundColor="#FE7171"
                                    />
                                    <Text fontSize={['14px', '16px']}>20% Free Credit</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    */}
                </Flex>
                <Box>
                    <Flex
                        mb={['2rem']}
                        flexDir={['column', 'column', 'row']}
                        justify="space-between"
                    >
                        <FormControl width={['auto', 'auto', '48%']} mb={['2rem', '2rem', 0]}>
                            <FormLabel
                                fontWeight={400}
                                fontSize={['16px', '17px']}
                                mb=".4rem"
                                color="#000"
                                htmlFor="addCredit"
                            >
                                Add Credit
                            </FormLabel>
                            <Select
                                backgroundColor="inherit"
                                border="1px solid #bdbdbd"
                                borderRadius="4px"
                                onChange={e =>
                                    setSelectedPlan(plans.find(p => p.id === e.target.value))
                                }
                                value={selectedPlan.id}
                            >
                                <option selected disabled>
                                    Select plan
                                </option>
                                {plans.map(plan => (
                                    <option key={plan.id} value={plan.id}>
                                        {plan.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        {selectedPlan?.options?.length > 0 && (
                            <FormControl width={['auto', 'auto', '48%']}>
                                <FormLabel
                                    fontWeight={400}
                                    fontSize={['14px', '15px']}
                                    mb=".4rem"
                                    color="#000"
                                    htmlFor="secondReminder"
                                >
                                    Select package
                                </FormLabel>
                                <Select
                                    backgroundColor="inherit"
                                    border="1px solid #bdbdbd"
                                    borderRadius="4px"
                                    placeholder="Select credit"
                                    onChange={e => {
                                        setSelectedOption(e.target.value);
                                    }}
                                    value={selectedOption}
                                >
                                    {selectedPlan?.options?.map(option => (
                                        <option key={option.pack} value={option.pack}>
                                            {option.pack}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    </Flex>

                    <Flex
                        mb={['2rem']}
                        flexBasis={'50%'}
                        flexDir={['column', 'column', 'row']}
                        textAlign="center"
                        justify="space-between"
                    >
                        <Box textAlign={'center'}>
                            <Heading
                                mb="1.5rem"
                                as="h4"
                                fontSize={['20px', '25px', '30px', '36px']}
                            >
                                {formatCurrency(cost)}
                            </Heading>
                            <Text fontWeight="normal" fontSize={['16px', '18px', '20px']}>
                                Cost
                            </Text>
                        </Box>

                        <Box textAlign={'center'}>
                            <Heading
                                mb="1.5rem"
                                as="h4"
                                fontSize={['20px', '25px', '30px', '36px']}
                            >
                                {formatNumber(credits)}
                            </Heading>
                            <Text fontWeight="normal" fontSize={['16px', '18px', '20px']}>
                                Credits
                            </Text>
                        </Box>
                    </Flex>

                    <Button
                        mt={['2rem', '3.5rem']}
                        mx="auto"
                        d="block"
                        isLoading={loading}
                        onClick={proceedPayment}
                        width={['100%', '90%', '80%', '70%']}
                        height={['2.7rem', '3rem', '3.2rem']}
                    >
                        Proceed to Payment
                    </Button>
                    <PaystackHook {...paymentProps} />
                </Box>
            </Box>
        </ProfileMainContent>
    );
};

export default main;
