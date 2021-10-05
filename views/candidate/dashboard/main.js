import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Box, Text, Flex, Image, Divider, Heading} from '@chakra-ui/core';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import CandidateMainContent from '../../../components/candidate/candidateMainContent';
import UserService from '../../../services/user.service';
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
    const router = useRouter();

    const [pendingReferences, setPendingReferences] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [displayVerify, setDisplayVerify] = React.useState(false);

    React.useEffect(() => {
        setUser(UserService.getUser());
    }, []);

    React.useEffect(() => {
        if (!user.linkedIn) {
            setDisplayVerify(true);
        }
    }, [user]);

    React.useEffect(() => {
        const getReferences = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/reference/candidate');
                const {data} = res;
                if (data?.success && data?.data) {
                    setPendingReferences(data?.data?.filter(e => !e.completed));
                }
            } catch (err) {
                // catch error
            } finally {
                setLoading(false);
            }
        };
        getReferences();
    }, []);

    return (
        <CandidateMainContent>
            {displayVerify && (
                <Box mb={[8, 12]}>
                    <Flex
                        algin={['flex-start', 'flex-start', 'center']}
                        p={['1rem 1.5rem', '1rem 2rem']}
                        flexDir={['column', 'column', 'row']}
                        backgroundColor="#D2E8FC"
                        borderRadius="4px"
                        justify="space-between"
                    >
                        <Flex
                            align={['flex-start', 'flex-start', 'center']}
                            justify={['flex-start', 'flex-start', 'space-between']}
                            mb={[4]}
                        >
                            <Image mr={4} src="/icons/candidate_warning.svg" />
                            <Text>Add your LinkedIn profile to get verified</Text>
                        </Flex>
                        <Button
                            onClick={() => {
                                router.push('/candidate/account');
                            }}
                            backgroundColor="#0E76A8"
                            _hover={{backgroundColor: '#0E76A8'}}
                        >
                            <RiLinkedinBoxLine
                                size={24}
                                style={{marginRight: '10px'}}
                                color="#ffffff"
                            />{' '}
                            Verify with LinkedIn
                        </Button>
                    </Flex>
                </Box>
            )}
            <Box mb={[8, 12]}>
                {loading ? (
                    <Spinner />
                ) : pendingReferences.length == 0 ? (
                    <Heading as="h2" mt={8} textAlign="center" size="lg">
                        There are no pending requests. Click{' '}
                        <Text as="span" color="brand.orange">
                            <Link href="/candidate/history">
                                <a>here</a>
                            </Link>
                        </Text>{' '}
                        to view your references history
                    </Heading>
                ) : (
                    <>
                        <Text fontSize={['md', 'lg']} mb={8}>
                            {pendingReferences.length} Request
                            {pendingReferences.length > 1 ? 's' : null} Pending
                        </Text>

                        {pendingReferences.map((reference, idx) => (
                            <Request
                                key={idx}
                                companyName={reference?.company?.name}
                                companyLogo={reference?.company?.logo}
                                updatedAt={reference?.updatedAt}
                                status={reference?.referenceStatus?.statusName}
                            />
                        ))}
                    </>
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
