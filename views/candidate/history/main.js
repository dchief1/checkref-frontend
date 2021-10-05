import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import {
    Box,
    Text,
    Flex,
    Image,
    Divider,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Heading,
} from '@chakra-ui/core';
import axios from 'axios';
import CandidateMainContent from '../../../components/candidate/candidateMainContent';
import Button from '../../../components/button';
import Spinner from '../../../components/spinner';

const Request = ({companyName, companyLogo, updatedAt, status}) => {
    return (
        <Flex
            p={['.7rem 1rem', '1rem 1.5rem']}
            backgroundColor="white"
            flexDir={['column', 'column', 'row']}
            align={['flex-start', 'flex-start', 'center']}
            justify="space-between"
            boxShadow="0px 0px 6px rgba(0, 0, 0, 0.08)"
            borderRadius="4px"
            mb={[6, 8]}
            gridRowGap="1rem"
        >
            <Flex align="center" justify="space-between">
                <Image
                    mr={4}
                    width="40px"
                    src={companyLogo || '/images/candidate_request_pic.png'}
                />
                <Text fontSize={['md', 'lg']} fontWeight="bold">
                    {companyName}
                </Text>
            </Flex>
            <Text
                color={
                    status?.toLowerCase().includes('responding')
                        ? 'brand.orange'
                        : status?.toLowerCase().includes('complete')
                        ? 'green.500'
                        : '#50514f'
                }
            >
                {status}
            </Text>
            <Text>
                Last update:{' '}
                <Text as="span" fontWeight="bold">
                    {moment(updatedAt).calendar()}
                </Text>{' '}
            </Text>
        </Flex>
    );
};

Request.propTypes = {
    updatedAt: PropTypes.string,
    companyName: PropTypes.string,
    companyLogo: PropTypes.string,
    status: PropTypes.string,
};

const main = () => {
    const ALL_VIEW_STATUS = {
        all: 'all',
        pending: 'pending',
        completed: 'completed',
    };
    const [references, setReferences] = React.useState([]);
    const [pendingReferences, setPendingReferences] = React.useState([]);
    const [completedReferences, setCompletedReferences] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [viewStatus, setViewStatus] = React.useState(ALL_VIEW_STATUS.all);

    const getCurrentView = () => {
        if (viewStatus == ALL_VIEW_STATUS.pending) {
            return pendingReferences;
        } else if (viewStatus == ALL_VIEW_STATUS.completed) {
            return completedReferences;
        } else {
            return references;
        }
    };

    const handleMostRecent = () => {
        setReferences(
            [...references].sort(
                (a, b) => new Date(b.updatedAt)?.getTime() - new Date(a.updatedAt)?.getTime(),
            ),
        );
        setCompletedReferences(
            [...completedReferences].sort(
                (a, b) => new Date(b.updatedAt)?.getTime() - new Date(a.updatedAt)?.getTime(),
            ),
        );
        setPendingReferences(
            [...pendingReferences].sort(
                (a, b) => new Date(b.updatedAt)?.getTime() - new Date(a.updatedAt)?.getTime(),
            ),
        );
    };

    const handleLeastRecent = () => {
        setReferences(
            [...references].sort(
                (a, b) => new Date(a.updatedAt)?.getTime() - new Date(b.updatedAt)?.getTime(),
            ),
        );
        setCompletedReferences(
            [...completedReferences].sort(
                (a, b) => new Date(a.updatedAt)?.getTime() - new Date(b.updatedAt)?.getTime(),
            ),
        );
        setPendingReferences(
            [...pendingReferences].sort(
                (a, b) => new Date(a.updatedAt)?.getTime() - new Date(b.updatedAt)?.getTime(),
            ),
        );
    };

    React.useEffect(() => {
        const getReferences = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/reference/candidate');
                const {data} = res;
                if (data?.success && data?.data) {
                    setReferences(data?.data);
                }
            } catch (err) {
                // catch error
            } finally {
                setLoading(false);
            }
        };
        getReferences();
    }, []);

    React.useEffect(() => {
        if (viewStatus == ALL_VIEW_STATUS.pending) {
            setPendingReferences(references.filter(e => !e.completed));
        } else if (viewStatus == ALL_VIEW_STATUS.completed) {
            setCompletedReferences(references.filter(e => e.completed));
        }
    }, [viewStatus]);
    return (
        <CandidateMainContent>
            <Box mb={[8, 12]}>
                {references.length > 0 && (
                    <Stack align="center" justify="space-between" isInline>
                        <Text color="#50514F" fontSize={['md', 'lg']}>
                            History
                        </Text>
                        <Stack isInline align="center" justify="space-between">
                            <Text mr={4} color="#50514F">
                                {' '}
                                Filter by:
                            </Text>
                            <Flex cursor="pointer" justify="center" align="center">
                                <Text mr={['.5rem']}>Date</Text>
                                <Menu>
                                    <MenuButton p="1rem" as={Box} rightIcon="chevron-down">
                                        <Image src="/icons/dashboard_drop_down.svg" />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={handleMostRecent}>Most recent</MenuItem>
                                        <MenuItem onClick={handleLeastRecent}>
                                            Least recent
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                            <Flex cursor="pointer" justify="center" align="center">
                                <Text mr={['.5rem']}>Status</Text>
                                <Menu>
                                    <MenuButton p="1rem" as={Box} rightIcon="chevron-down">
                                        <Image src="/icons/dashboard_drop_down.svg" />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem
                                            onClick={() => setViewStatus(ALL_VIEW_STATUS.completed)}
                                        >
                                            Completed
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setViewStatus(ALL_VIEW_STATUS.pending)}
                                        >
                                            Pending
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setViewStatus(ALL_VIEW_STATUS.all)}
                                        >
                                            View all
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Stack>
                    </Stack>
                )}
            </Box>
            <Box mb={[8, 12]}>
                {loading ? (
                    <Spinner />
                ) : references.length == 0 ? (
                    <Heading as="h2" mt={8} textAlign="center" size="lg">
                        No references have been made yet
                    </Heading>
                ) : (
                    <Box>
                        {getCurrentView().map((reference, idx) => (
                            <Request
                                key={idx}
                                companyName={reference?.company?.name}
                                companyLogo={reference?.company?.logo}
                                updatedAt={reference?.updatedAt}
                                status={reference?.referenceStatus?.statusName}
                            />
                        ))}
                    </Box>
                )}
            </Box>

            <Box mt={[12, 16]}>
                <Divider borderColor="#BDBDBD" />
                <Flex
                    align="center"
                    justify="space-between"
                    flexDir={['column', 'column', 'row']}
                    mt={[6, 8]}
                >
                    <Link href="/">
                        <a>
                            <Image src="/images/logo.svg" />
                        </a>
                    </Link>
                    <Flex mt={[4, 0]} align="center" justify="space-between">
                        <Text mr={8}>
                            <Link href="/privacy-policy">
                                <a>Privacy</a>
                            </Link>
                        </Text>
                        <Text>
                            <Link href="/terms-conditions">
                                <a>Terms and Conditions</a>
                            </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </CandidateMainContent>
    );
};

export default main;
