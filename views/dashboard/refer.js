import React from 'react';
import {useRouter} from 'next/router';
import {Text, Image} from '@chakra-ui/core';
import DashboardBox from '../../components/dashboard/dashboardBox';
import Button from '../../components/button';

const Refer = () => {
    const router = useRouter();
    return (
        <DashboardBox>
            <Image mb="1rem" src="/images/dashboard_refer.svg" />
            <Text mb="1rem" fontWeight="bold" fontSize={['16px', '16px', '16px', '18px', '20px']}>
                REFER &amp; EARN
            </Text>
            <Text mb="1rem" color="#50514F">
                Refer your HR colleagues and earn FREE credit
            </Text>
            <Button onClick={() => router.push('/profile/referral')} height="2.3rem" px="1.6rem">
                Start Now
            </Button>
        </DashboardBox>
    );
};

export default Refer;
