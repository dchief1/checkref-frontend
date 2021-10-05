import * as React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import {Box, Text, Icon, Flex, Heading, Image} from '@chakra-ui/core';
import Button from '../../../components/button';

const teamsTableData = [
    {
        name: 'String Team',
        members: 2,
        requests: 2,
    },
    {
        name: 'Dev Team',
        members: 5,
        requests: 20,
    },
];

const invoicesTableData = [
    {
        subscription: 'Enterprise',
        date: '27/12/2020',
        amount: 'NGN 25,000',
    },
];
const invoicesTableColumns = [
    {
        name: 'Subscription',
        selector: 'subscription',
        sortable: true,
    },
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
    },
    {
        name: 'Amount paid',
        selector: 'amount',
        sortable: true,
    },
    {
        name: '',
        selector: 'action',
        sortable: true,
        cell: row => <Text textDecor="underline">View</Text>,
    },
];

const referenceRequestsTableData = [
    {
        name: 'Tendi Menigi',
        status: 'Completed',
        date: '23-12-2020 7:45AM',
    },
    {
        name: 'Ola John',
        status: '1/2 References Completed',
        date: '23-12-2020 7:45AM',
    },
    {
        name: 'Leon Balogun',
        status: 'Referee Added',
        date: '23-12-2020 7:45AM',
    },
];
const referenceRequestsTableColumns = [
    {
        name: 'Name of Candidate',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Reference Status',
        selector: 'status',
        sortable: true,
    },
    {
        name: 'Date of last action',
        selector: 'date',
        sortable: true,
    },
    {
        name: '',
        selector: 'action',
        sortable: true,
        cell: row => <Text textDecor="underline">View</Text>,
    },
];

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#fafafa',
        },
    },
    cells: {
        style: {
            backgroundColor: '#fafafa',
        },
    },
};

const ViewCompany = props => {
    const {ALL_VIEW_STATES, setViewState} = props;

    const handleGoBack = () => {
        setViewState(ALL_VIEW_STATES.initial);
    };
    const handleSetEdit = () => {
        setViewState(ALL_VIEW_STATES.editCompany);
    };
    const handleSetEditTeams = () => {
        setViewState(ALL_VIEW_STATES.editCompanyTeams);
    };

    const teamsTableColumns = [
        {
            name: 'Name of team',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Number of members',
            selector: 'members',
            sortable: true,
        },
        {
            name: 'Requests sent',
            selector: 'requests',
            sortable: true,
        },
        {
            name: '',
            selector: 'action',
            sortable: true,
            cell: row => (
                <Text cursor="pointer" onClick={handleSetEditTeams} textDecor="underline">
                    Edit Team
                </Text>
            ),
        },
    ];

    return (
        <Box>
            <Text mt={[0, 0, '-2rem']} mb={[4, 6]} fontWeight="bold">
                Company account/
                <Text as="span" color="brand.orange">
                    Mboko Microfinance
                </Text>
            </Text>
            <Text mb={[4, 6]} d="flex" alignItems="center" cursor="pointer" onClick={handleGoBack}>
                {' '}
                <Icon size="1.3rem" name="chevron-left" /> Back to Company Accounts
            </Text>
            <Box background="white" borderRadius="4px" pt={[4, 6]} px={[4, 6]} pb={[6, 8, 12]}>
                <Box>
                    <Flex
                        mt={[2, 4]}
                        mb={[4, 6, 8]}
                        flexDir={['column', 'column', 'row']}
                        justify="space-between"
                    >
                        <Box mb={[4, 4, 0]}>
                            <Heading mb={[4]} as="h1" size="lg">
                                Mboko MicroFinance
                            </Heading>
                            <Flex align="center" mb={[2]}>
                                <Icon color="#50514f" mr={4} name="phone" />
                                <Text color="#50514f">+234 8972019282</Text>
                            </Flex>
                            <Flex align="center">
                                <Icon color="#50514f" mr={4} name="email" />
                                <Text color="#50514f">hello@mboko.com</Text>
                            </Flex>
                        </Box>
                        <Flex flexDir="column" align="center">
                            <Image mb={[2, 4]} src="/images/admin_company_avatar.png" />
                            <Text textAlign="center" color="#50514f">
                                Created: 12/12/2020
                            </Text>
                            <Text
                                cursor="pointer"
                                onClick={handleSetEdit}
                                mt={2}
                                textDecor="underline"
                            >
                                Edit Details
                            </Text>
                        </Flex>
                    </Flex>
                    <Box mb={[4, 6, 12]}>
                        <Heading mb={[4]} as="h2" size="lg">
                            Account
                        </Heading>
                        <Flex
                            flexDir={['column', 'column', 'row']}
                            justify="space-between"
                            align="center"
                        >
                            <Flex mb={[2, 2, 0]} align="center">
                                <Text mr={4}>Action Status:</Text>
                                <Button
                                    background="#06690a"
                                    _hover={{background: '#06690a'}}
                                    height="2rem"
                                >
                                    Active
                                </Button>
                            </Flex>
                            <Text mb={[2, 2, 0]}>
                                Subscription plan:{' '}
                                <Text as="span" fontWeight="bold">
                                    Standard
                                </Text>
                            </Text>
                            <Text color="brand.orange" textDecor="underline">
                                Assign credits
                            </Text>
                        </Flex>
                    </Box>
                    <Box mb={[4, 6, 10]}>
                        <DataTable
                            customStyles={customStyles}
                            title={
                                <Heading as="h2" size="lg">
                                    Teams
                                </Heading>
                            }
                            selectableRows
                            columns={teamsTableColumns}
                            data={teamsTableData}
                        />
                    </Box>

                    <Box mb={[4, 6, 10]}>
                        <DataTable
                            customStyles={customStyles}
                            title={
                                <Heading as="h2" size="lg">
                                    Invoices
                                </Heading>
                            }
                            selectableRows
                            columns={invoicesTableColumns}
                            data={invoicesTableData}
                        />
                    </Box>
                    <Box mb={[4, 6, 10]}>
                        <DataTable
                            customStyles={customStyles}
                            title={
                                <Heading as="h2" size="lg">
                                    Reference Requests
                                </Heading>
                            }
                            selectableRows
                            columns={referenceRequestsTableColumns}
                            data={referenceRequestsTableData}
                        />
                        <Button mt={2} d="block" ml="auto" mr={[0, 0, 4]} height="2.1rem">
                            See all
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
ViewCompany.propTypes = {
    ALL_VIEW_STATES: PropTypes.object.isRequired,
    setViewState: PropTypes.func.isRequired,
};

export default ViewCompany;
