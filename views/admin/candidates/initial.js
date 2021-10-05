import * as React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import {Box, Flex, Text, Heading, Image} from '@chakra-ui/core';
import Button from '../../../components/button';

// eslint-disable-next-line
const ExpandableComponent = ({data, setViewState, ALL_VIEW_STATES}) => {
    const handleCandidate = () => {
        // eslint-disable-next-line
        setViewState(ALL_VIEW_STATES.viewCandidate);
    };
    return (
        <Box ml={[2, 4, 8]} mt={[2]}>
            <Button onClick={handleCandidate} fontSize="sm" px=".5rem" height="2rem" ml={[2, 2]}>
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
        name: 'Account status',
        selector: 'status',
        sortable: true,
    },
    {
        name: 'Created',
        selector: 'requests',
        sortable: true,
    },
];

const Initial = props => {
    const {ALL_VIEW_STATES, setViewState} = props;
    return (
        <Box>
            <Heading mb={[4, 6]} size="lg" as="h1">
                Candidates
            </Heading>

            <Box
                width={['100%', '100%', '32%']}
                mx="auto"
                mb={[4, 4, 4, 8]}
                p={['1rem', '1.5rem', '1.5rem 2rem']}
                borderRadius="4px"
                flex="1"
                color="brand.white"
                background="#0779E4"
            >
                <Text mb={[2]} textTransform="uppercase">
                    number of candidates
                </Text>

                <Flex align="center" mb={2} justify="space-between">
                    <Image width="20%" src="/images/admin_chart1.png" />
                    <Box>
                        <Text fontSize={['md', 'lg']}>123.4k</Text>
                        <Text>registered: 4500</Text>
                        <Text>not registered: 600</Text>
                    </Box>
                </Flex>
            </Box>

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
                                Candidates List
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
