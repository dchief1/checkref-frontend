import * as React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import {Box, Text, Icon, Heading, Flex, Select} from '@chakra-ui/core';
import Button from '../../../components/button';

const tableData = [
    {
        name: 'Tofunmi Lawal',
        email: 'tofu@gmail.com',
        phone: '+2349859482932',
    },
    {
        name: 'Tofunmi Lawal',
        email: 'tofu@gmail.com',
        phone: '+2349859482932',
    },
    {
        name: 'Tofunmi Lawal',
        email: 'tofu@gmail.com',
        phone: '+2349859482932',
    },
];
const tableColumns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Phone Number',
        selector: 'phone',
        sortable: true,
    },
    {
        name: 'Team Role',
        selector: 'role',
        sortable: true,
        cell: row => (
            <Select
                backgroundColor="inherit"
                border="1px solid #bdbdbd"
                borderRadius="4px"
                width={['100%', '65%', '80%', '65%']}
            >
                <option key="admin" value="admin">
                    Admin
                </option>
                <option key="member" value="member">
                    Member
                </option>
            </Select>
        ),
    },
    {
        name: '',
        selector: 'action',
        sortable: true,
        cell: row => <Text textDecor="underline">Remove</Text>,
    },
];

const EditCompanyTeams = props => {
    const {ALL_VIEW_STATES, setViewState} = props;
    const handleGoBack = () => {
        setViewState(ALL_VIEW_STATES.viewCompany);
    };
    return (
        <Box>
            <Text mt={[0, 0, '-2rem']} mb={[4, 6]} fontWeight="bold">
                Company account/Mboko Microfinance
                <Text as="span" color="brand.orange">
                    String Team
                </Text>
            </Text>
            <Text mb={[4, 6]} d="flex" alignItems="center" cursor="pointer" onClick={handleGoBack}>
                {' '}
                <Icon size="1.3rem" name="chevron-left" /> Back to Mboko Microfinance
            </Text>
            <Flex justify="space-between" align="center" my={4}>
                <Heading as="h1" size="lg">
                    String Team
                </Heading>
                <Button px=".5rem" height="2.2rem">
                    Add new team member
                </Button>
            </Flex>
            <Box background="white" borderRadius="4px" pt={[4, 6]} px={[4, 6]} pb={[6, 8, 12]}>
                <DataTable
                    title={
                        <Heading as="h2" size="lg">
                            Team Members
                        </Heading>
                    }
                    selectableRows
                    selectableRowsHighlight
                    columns={tableColumns}
                    data={tableData}
                />
            </Box>
        </Box>
    );
};
EditCompanyTeams.propTypes = {
    ALL_VIEW_STATES: PropTypes.object.isRequired,
    setViewState: PropTypes.func.isRequired,
};

export default EditCompanyTeams;
