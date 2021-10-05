import React, {useEffect, useMemo, useState} from 'react';
import {Box, Heading, Flex} from '@chakra-ui/core';
import {NotificationManager} from 'react-notifications';
import ProfileMainContent from '../../components/profileMainContent';
import IncompleteProfileWarning from '../../components/dashboard/incompleteProfileWarning';
import Summaries from './summaries';
import Candidates from './candidates';
import Credit from './credit';
import Refer from './refer';
import Teams from './teams';
import Reference from './reference';
import Axios from 'axios';

const rowsPerPageOptions = [5, 10, 25];

const main = props => {
    const VIEW_STATES = {
        initial: 'initial',
        viewAReference: 'view_a_reference',
    };
    const {user: {firstName, company = {}} = {}} = props;
    const [summary, setSummary] = useState({});
    const [candidates, setCandidates] = useState([]);
    const [candidatesRowPerPage, setCandidatesRowPerPage] = useState(rowsPerPageOptions[0]);
    const [loadingGetCandidates, setLoadingGetCandidates] = useState(false);
    const [currentViewState, setCurrentViewState] = useState(VIEW_STATES.initial);
    const [currentReference, setCurrentReference] = useState({});
    const time = new Date().getHours();

    useEffect(() => {
        Promise.all([Axios.get('/reference/summary')])
            .then(([summaryRes]) => [summaryRes.data.data])
            .then(([summary]) => {
                setSummary(summary);
            })
            .catch(err => {
                if (!err.response) {
                    return;
                }
                NotificationManager.error(err.response.data.message);
            });
    }, []);

    useEffect(() => {
        const getCandidatesReferences = async () => {
            setLoadingGetCandidates(true);
            try {
                const res = await Axios.get('/reference');
                const {data} = res;
                setCandidates(data?.data?.references);
                setCandidatesRowPerPage(data?.data?.perPage);
            } catch (err) {
                // catch error
            } finally {
                setLoadingGetCandidates(false);
            }
        };
        getCandidatesReferences();
    }, []);

    const unCompletedCompanyProfile = useMemo(() => {
        delete company.__v;
        delete company._id;

        return Object.keys(company).every(key => {
            console.log(key, ' key ', !!company[key]);
            return !!company[key];
        });
    }, [company]);

    return (
        <ProfileMainContent color={currentViewState === VIEW_STATES.viewAReference && '#fff'}>
            {currentViewState === VIEW_STATES.viewAReference ? (
                <Reference
                    setCurrentViewState={setCurrentViewState}
                    VIEW_STATES={VIEW_STATES}
                    currentReference={currentReference}
                />
            ) : (
                <Box>
                    <Box mb={['2rem']}>
                        <Heading as="h1" fontSize={['18px', '20px', '23px', '25px']}>
                            Good{' '}
                            {time > 0 && time < 12
                                ? 'Morning'
                                : time > 12 && time < 16
                                ? 'Afternoon'
                                : 'Evening'}
                            , {firstName && firstName}
                        </Heading>
                    </Box>
                    <IncompleteProfileWarning show={!unCompletedCompanyProfile} />
                    <Box mt={['2rem']}>
                        <Flex
                            flexDir={['column', 'column', 'column', 'row']}
                            justify="space-between"
                        >
                            <Flex
                                mb={['1.5rem', '2rem']}
                                flexDir="column"
                                flexBasis={['100%', '100%', '100%', '68%']}
                            >
                                <Summaries data={summary} />
                                <Candidates
                                    loadingGetCandidates={loadingGetCandidates}
                                    candidatesRowPerPage={candidatesRowPerPage}
                                    candidates={candidates}
                                    currentViewState={currentViewState}
                                    setCurrentViewState={setCurrentViewState}
                                    VIEW_STATES={VIEW_STATES}
                                    setCurrentReference={setCurrentReference}
                                />
                            </Flex>
                            <Flex
                                justify="space-between"
                                flexDir="column"
                                flexBasis={['100%', '100%', '100%', '28%']}
                                marginRight={['auto', 'auto', 'auto', 0]}
                                marginLeft={[0, 0, '1rem', 0]}
                            >
                                <Box mb={['1.5rem', '2rem', '2rem', '1rem']}>
                                    <Credit credit={company.credit} />
                                </Box>
                                <Box mb={['1.5rem', '2rem', '2rem', '1rem']}>
                                    <Refer />
                                </Box>
                                <Teams />
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            )}
        </ProfileMainContent>
    );
};

export default main;
