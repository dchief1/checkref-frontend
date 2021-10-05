import React from 'react';
import DataTable from 'react-data-table-component';
import {Box, Text, Heading} from '@chakra-ui/core';
import AdminMainContent from '../../../components/admin/adminMainContent';

const requestsTableData = [
    {
        company: 'Mboko Recruitment',
        candidate: 'Peter Johnson',
        created: '23-12-2020',
        status: 'Request sent',
    },
    {
        company: 'Mboko Recruitment',
        candidate: 'Peter Johnson',
        created: '23-12-2020',
        status: 'Referee added',
    },
    {
        company: 'Mboko Recruitment',
        candidate: 'Peter Johnson',
        created: '23-12-2020',
        status: '1/3 references completed',
    },
];
const requestsTableColumns = [
    {
        name: 'Company',
        selector: 'company',
        sortable: true,
    },
    {
        name: 'Name of candidate',
        selector: 'candidate',
        sortable: true,
    },
    {
        name: 'Created',
        selector: 'created',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
    },
    {
        name: '',
        selector: 'action',
        sortable: true,
        cell: row => (
            <Text cursor="pointer" textDecor="underline">
                View
            </Text>
        ),
    },
];

const main = () => {
    return (
        <AdminMainContent>
            <Box>
                <Heading mb={[8, 10]} size="lg" as="h1">
                    Requests
                </Heading>
                <Box p={[4, 6]} backgroundColor="brand.white">
                    <DataTable
                        title={
                            <Heading as="h2" size="lg">
                                Request List
                            </Heading>
                        }
                        selectableRows
                        pagination
                        columns={requestsTableColumns}
                        data={requestsTableData}
                    />
                </Box>
            </Box>
        </AdminMainContent>
    );
};

export default main;
