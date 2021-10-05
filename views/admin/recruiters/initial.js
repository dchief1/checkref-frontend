import * as React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import {Box, Flex, Text, Heading, Image} from '@chakra-ui/core';
import Button from '../../../components/button';

// eslint-disable-next-line
const ExpandableComponent = ({data, setViewState, ALL_VIEW_STATES}) => {
    const handleViewRecruiter = () => {
        // eslint-disable-next-line
        setViewState(ALL_VIEW_STATES.viewRecruiter);
    };
    return (
        <Box ml={[2, 4, 8]} mt={[2]}>
            <Button
                onClick={handleViewRecruiter}
                fontSize="sm"
                px=".5rem"
                height="2rem"
                ml={[2, 2]}
            >
                View recruiter
            </Button>{' '}
        </Box>
    );
};

const tableData = [
    {
        name: 'John Fashanu',
        id: Math.random() * Math.random(),
        company: 'Sinzu Recruitment',
        requests: 2,
        created: '12-12-2020',
        status: 'Active',
    },
    {
        name: 'John Fashanu',
        id: Math.random() * Math.random(),
        company: 'Sinzu Recruitment',
        requests: 2,
        created: '12-12-2020',
        status: 'Active',
    },
    {
        name: 'John Fashanu',
        id: Math.random() * Math.random(),
        company: 'Sinzu Recruitment',
        requests: 2,
        created: '12-12-2020',
        status: 'Active',
    },
];
const tableColumns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Company',
        selector: 'company',
        sortable: true,
    },
    {
        name: 'Requests sent',
        selector: 'requests',
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
];

const Initial = props => {
    const {ALL_VIEW_STATES, setViewState} = props;
    return (
        <Box>
            <Heading mb={[4, 6]} size="lg" as="h1">
                Recruiters
            </Heading>
            <Flex
                mb={[8, 12]}
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
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    borderRadius="4px"
                    flex="1"
                    color="brand.white"
                    background="#0779E4"
                >
                    <Text mb={[2]} textTransform="uppercase">
                        number of recruiters
                    </Text>

                    <Flex align="center" mb={2} justify="space-between">
                        <Image width="50%" src="/images/admin_chart1.png" />
                        <Box>
                            <Text fontSize={['md', 'lg']}>5.3k</Text>
                            <Text>Active: 4500</Text>
                            <Text>Pending: 600</Text>
                            <Text>Disabled: 200</Text>
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
                        requests sent
                    </Text>

                    <Flex align="center" mb={2} justify="space-between">
                        <Image width="50%" src="/images/admin_chart1.png" />
                        <Box>
                            <Text fontSize={['md', 'lg']}>123.4k</Text>
                            <Text>In progress: 4500</Text>
                            <Text>Completed: 600</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <Box
                    px={[4]}
                    py={[6, 8, 10]}
                    backgroundColor="brand.white"
                    border="1px solid #e5e5e5"
                    borderRadius="6px"
                >
                    <DataTable
                        title={
                            <Heading size="lg" mb={0} as="h2">
                                Recruiter List
                            </Heading>
                        }
                        pagination
                        selectableRows
                        selectableRowsHighlight
                        expandableRows
                        expandableRowsComponent={
                            <ExpandableComponent
                                ALL_VIEW_STATES={ALL_VIEW_STATES}
                                setViewState={setViewState}
                            />
                        }
                        columns={tableColumns}
                        data={tableData}
                    />
                </Box>
            </Box>
        </Box>
    );
};
Initial.propTypes = {
    ALL_VIEW_STATES: PropTypes.object.isRequired,
    setViewState: PropTypes.func.isRequired,
};

export default Initial;
