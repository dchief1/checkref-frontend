import * as React from 'react';
import DataTable from 'react-data-table-component';
import {Box, Text, Heading, Flex, Image} from '@chakra-ui/core';
import Button from '../../../components/button';

const tableData = [
    {
        name: 'Mboko Recruitment',
        teams: 2,
        users: 18,
        created: '12-12-2020',
        type: 'Professional',
        status: 'Active',
    },
    {
        name: 'Sinzu Recruitment',
        teams: 5,
        users: 20,
        created: '13-12-2020',
        type: 'Enterprise',
        status: 'Disabled',
    },
    {
        name: 'Republic Recruitment',
        teams: 5,
        users: 20,
        created: '13-12-2020',
        type: 'Standard',
        status: 'Pending',
    },
];
const tableColumns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Teams',
        selector: 'teams',
        sortable: true,
    },
    {
        name: 'Users',
        selector: 'users',
        sortable: true,
    },
    {
        name: 'Created',
        selector: 'created',
        sortable: true,
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
    },
];

const Accounts = () => {
    return (
        <Box mb={[10, 16]}>
            <Heading mb={4} as="h1" size="lg">
                Accounts
            </Heading>
            <Flex mb={4} justify="flex-end">
                <Button height="2rem" px="1rem" rightIcon="chevron-down">
                    Last 24 Hours
                </Button>
            </Flex>
            <Flex
                mb={[10, 16]}
                gridColumnGap={['1rem']}
                align="stretch"
                justify={['space-between']}
                flexWrap="wrap"
                flexDir={['column', 'column', 'row']}
            >
                <Box
                    width={['100%', '100%', 'auto']}
                    flexBasis={['100%', '100%', '32%']}
                    mb={[4, 4, 4, 0]}
                    flex="1"
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    border="1px solid #E5E5E5"
                    borderRadius="4px"
                    backgroundColor="brand.white"
                >
                    <Text
                        mb={2}
                        fontWeight={600}
                        color="#000"
                        fontSize="sm"
                        textTransform="uppercase"
                    >
                        active users
                    </Text>
                    <Text mb={3} color="#50514F">
                        Individual Users
                    </Text>
                    <Text mb={10} color="#000" fontWeight={600} fontSize={['md', 'lg']}>
                        200
                    </Text>
                    <Flex align="center" justify={['space-between']}>
                        <Box>
                            <Text mb={4} fontSize="sm" color="#50514F">
                                LAST MONTH
                            </Text>
                            <Text fontSize={['md', 'lg']} fontWeight={600}>
                                500
                            </Text>
                        </Box>

                        <Box>
                            <Text mb={4} fontSize="sm" color="#50514F">
                                CHANGE
                            </Text>
                            <Text fontSize={['md', 'lg']} color="#06690A" fontWeight={600}>
                                +127
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    width={['100%', '100%', 'auto']}
                    flexBasis={['100%', '100%', '32%']}
                    mb={[4, 4, 4, 0]}
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    borderRadius="4px"
                    flex="1"
                    color="brand.white"
                    background="#0779E4"
                >
                    <Text mb={[2]} textTransform="uppercase">
                        registered companies
                    </Text>
                    <Text mb={[4]} textTransform="uppercase">
                        Company Accounts
                    </Text>
                    <Flex align="center" mb={2} justify="space-between">
                        <Image width="50%" src="/images/admin_chart1.png" />
                        <Box>
                            <Text fontSize={['md', 'lg']}>260</Text>
                            <Text>Active: 210</Text>
                            <Text>Pending: 0</Text>
                            <Text>Disabled: 60</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    width={['100%', '100%', 'auto']}
                    flexBasis={['100%', '100%', '32%']}
                    mb={[4, 4, 4, 0]}
                    flex="1"
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    border="1px solid #E5E5E5"
                    borderRadius="4px"
                    backgroundColor="brand.white"
                >
                    <Text
                        mb={2}
                        fontWeight={600}
                        color="#000"
                        fontSize="sm"
                        textTransform="uppercase"
                    >
                        total active subscriptions
                    </Text>
                    <Text mb={3} color="#50514F">
                        Accounts with Active Subscriptions
                    </Text>
                    <Text mb={10} color="#000" fontWeight={600} fontSize={['md', 'lg']}>
                        687
                    </Text>
                    <Flex align="center" justify={['space-between']}>
                        <Box>
                            <Text mb={4} fontSize="sm" color="#50514F">
                                LAST MONTH
                            </Text>
                            <Text fontSize={['md', 'lg']} fontWeight={600}>
                                500
                            </Text>
                        </Box>

                        <Box>
                            <Text mb={4} fontSize="sm" color="#50514F">
                                CHANGE
                            </Text>
                            <Text fontSize={['md', 'lg']} color="#06690A" fontWeight={600}>
                                +127
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <Heading mb={4} as="h2" size="lg">
                    User Accounts
                </Heading>
                <Box
                    px={[4]}
                    py={[6, 8, 10]}
                    backgroundColor="brand.white"
                    border="1px solid #e5e5e5"
                    borderRadius="6px"
                >
                    <Heading pl={2} size="lg" mb={0} as="h2">
                        Company List
                    </Heading>
                    <DataTable selectableRows columns={tableColumns} data={tableData} />
                    <Button mr={[0, 0, 0, 4]} d="block" height="2.3rem" ml="auto">
                        See All
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Accounts;
