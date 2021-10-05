import * as React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {Box, Text, Icon, Flex, Heading, Image} from '@chakra-ui/core';
import Button from '../../../components/button';

const referenceRequestsTableData = [
    {
        name: 'Tendi Menigi',
        referees: 5,
        status: 'All referees completed',
        date: '23-12-2020 7:45AM',
    },
    {
        name: 'Ola John',
        referees: 5,
        status: '1/2 referees completed',
        date: '23-12-2020 7:45AM',
    },
    {
        name: 'Leon Balogun',
        referees: 5,
        status: 'Referees added',
        date: '23-12-2020 7:45AM',
    },
];
const referenceRequestsTableColumns = [
    {
        name: 'Company name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Number of referees',
        selector: 'referees',
        sortable: true,
    },
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
    },
    {
        name: 'Reference status',
        selector: 'status',
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

const ViewCandidate = props => {
    const {ALL_VIEW_STATES, setViewState} = props;

    const handleGoBack = () => {
        setViewState(ALL_VIEW_STATES.initial);
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
                <Text cursor="pointer" textDecor="underline">
                    Edit Team
                </Text>
            ),
        },
    ];

    return (
        <Box>
            <Text mt={[0, 0, '-2rem']} mb={[4, 6]} fontWeight="bold">
                Candidate accounts/
                <Text as="span" color="brand.orange">
                    Tammy Abraham
                </Text>
            </Text>
            <Text mb={[4, 6]} d="flex" alignItems="center" cursor="pointer" onClick={handleGoBack}>
                {' '}
                <Icon size="1.3rem" name="chevron-left" /> Back to Candidate Accounts
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
                                Tammy Abraham
                            </Heading>
                            <Flex align="center" mb={[2]}>
                                <Icon color="#50514f" mr={4} name="phone" />
                                <Text color="#50514f">+234 8972019282</Text>
                            </Flex>
                            <Flex align="center">
                                <Icon color="#50514f" mr={4} name="email" />
                                <Text color="#50514f">hello@mboko.com</Text>
                            </Flex>
                            <Flex align="center">
                                <AiOutlineLinkedin
                                    size="1.2rem"
                                    color="#50514f"
                                    style={{marginRight: '1rem'}}
                                />
                                <Text color="#50514f">linkedin.com/john</Text>
                            </Flex>
                        </Box>
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
                            <Text mr={4}>
                                Action Type:{' '}
                                <Text fontWeight="bold" as="span">
                                    Candidate
                                </Text>
                            </Text>

                            <Text color="brand.orange" textDecor="underline">
                                Recover password
                            </Text>
                        </Flex>
                    </Box>
                    <Box mb={[4, 6, 10]}>
                        <DataTable
                            customStyles={customStyles}
                            title={
                                <Heading as="h2" size="lg">
                                    References Completed
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
ViewCandidate.propTypes = {
    ALL_VIEW_STATES: PropTypes.object.isRequired,
    setViewState: PropTypes.func.isRequired,
};

export default ViewCandidate;
