import React from 'react';
import {Box, Flex, Text, Image, Heading} from '@chakra-ui/core';
import moment from 'moment';
import Spinner from '../../components/spinner';

import DashboardBox from '../../components/dashboard/dashboardBox';

const candidates = props => {
    const {
        loadingGetCandidates,
        candidatesRowPerPage,
        candidates,
        setCurrentViewState,
        VIEW_STATES,
        setCurrentReference,
    } = props;
    return (
        <Box maxWidth={['86vw', 'auto']} overflowX="auto">
            <DashboardBox minWidth="500px" p={['.8rem 1.3rem', '1.7rem 1.8rem']}>
                {loadingGetCandidates ? (
                    <Spinner />
                ) : candidates?.length == 0 ? (
                    <Heading as="h3" size="lg" textAlign="center">
                        You haven&apos;t created any reference request yet
                    </Heading>
                ) : (
                    <Box>
                        <Box>
                            <Text
                                fontWeight="bold"
                                fontSize={['16px', '16px', '16px', '18px', '20px']}
                            >
                                Candidates
                            </Text>
                        </Box>
                        <Flex
                            mt="1.5rem"
                            borderBottom="0.5px solid #EDEDED"
                            align="center"
                            justify="space-between"
                        >
                            <Text
                                flexBasis="24%"
                                fontWeight="bold"
                                fontSize={['16px', '18px']}
                                pb=".4rem"
                            >
                                Name
                            </Text>
                            <Text
                                textAlign="center"
                                flexBasis="24%"
                                fontWeight="bold"
                                fontSize={['16px', '18px']}
                                pb=".4rem"
                            >
                                Status
                            </Text>
                            <Text
                                textAlign="center"
                                flexBasis="24%"
                                fontWeight="bold"
                                fontSize={['16px', '18px']}
                                pb=".4rem"
                            >
                                Date
                            </Text>
                            <Text flexBasis="24%" />
                        </Flex>
                        <Flex justify="space-between" align="center" flexDir="column">
                            {candidates.map((candidate, key) => (
                                <Flex
                                    borderBottom=" 0.5px solid #EDEDED"
                                    py="1rem"
                                    width="100%"
                                    justify="space-between"
                                    key={key}
                                >
                                    <Text fontSize="md" mr="5px" flexBasis="24%">
                                        {`${candidate?.candidate?.firstName} ${candidate?.candidate?.lastName}`}
                                    </Text>
                                    <Text fontSize="md" textAlign="center" mr="5px" flexBasis="24%">
                                        {candidate.referenceStatus?.statusName}
                                    </Text>
                                    <Text fontSize="md" textAlign="center" mr="5px" flexBasis="24%">
                                        {moment(candidate.updatedAt).format('YYYY-MM-DD')}
                                    </Text>
                                    <Text
                                        fontSize="md"
                                        textDecor="underline"
                                        textAlign="right"
                                        mr="5px"
                                        flexBasis="24%"
                                        cursor="pointer"
                                        onClick={() => {
                                            setCurrentReference(candidate);
                                            setCurrentViewState(VIEW_STATES.viewAReference);
                                        }}
                                    >
                                        See Details
                                    </Text>
                                </Flex>
                            ))}
                        </Flex>
                        <Box mt="2rem">
                            <Flex align="center" justify="flex-end">
                                <Flex mr="1rem" justify="space-around" align="flex-start">
                                    <Text mr="1.5rem">Rows per page: </Text>
                                    <Flex
                                        cursor="pointer"
                                        justify="center"
                                        align="center"
                                        borderBottom="1px solid #000000"
                                    >
                                        {' '}
                                        <Text mr="1rem">{candidatesRowPerPage}</Text>{' '}
                                        <Image src="/icons/dashboard_drop_down.svg" />{' '}
                                    </Flex>
                                </Flex>
                                <Flex justify="space-around" align="center">
                                    <Text mr="1rem">
                                        1 - {candidates.length} of {candidates.length}
                                    </Text>
                                    <Flex justify="space-between" align="center">
                                        <Image
                                            cursor="pointer"
                                            transform="scale(1.7)"
                                            mr="1rem"
                                            src="/icons/dashboard_left.svg"
                                        />
                                        <Image
                                            cursor="pointer"
                                            ml="1rem"
                                            transform="scale(1.7)"
                                            src="/icons/dashboard_right_arrow.svg"
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                )}
            </DashboardBox>
        </Box>
    );
};

export default candidates;
