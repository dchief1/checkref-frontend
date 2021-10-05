import React from 'react';
import {useRouter} from 'next/router';
import {Text, Image} from '@chakra-ui/core';
import DashboardBox from '../../components/dashboard/dashboardBox';
import Button from '../../components/button';

const Teams = () => {
    const router = useRouter();
    return (
        <DashboardBox>
            <Image mb="1rem" src="/images/dashboard_teams.svg" />
            <Text mb="1rem" fontWeight="bold" fontSize={['16px', '16px', '16px', '18px', '20px']}>
                TEAMS
            </Text>
            <Text mb="1rem" color="#50514F">
                Invite your team to Checkref
            </Text>
            <Button onClick={() => router.push('/profile/teams')} height="2.3rem" px="1.6rem">
                Create Team
            </Button>
        </DashboardBox>
    );
};

export default Teams;
