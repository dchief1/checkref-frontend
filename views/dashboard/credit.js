import React from 'react';
import {Text, Image} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import DashboardBox from '../../components/dashboard/dashboardBox';
import Button from '../../components/button';
import {useRouter} from 'next/router';

const Credit = ({credit}) => {
    const router = useRouter();
    return (
        <DashboardBox>
            <Image mb="1rem" src="/images/dashboard_credit.svg" />
            <Text mb="1rem" fontWeight="bold" fontSize={['16px', '16px', '16px', '18px', '20px']}>
                CREDIT STATUS
            </Text>
            <Text mb="1rem" color="#50514F">
                You have{' '}
                <Text as="span" fontWeight="500">
                    {credit}
                </Text>{' '}
                credits left
            </Text>
            <Button onClick={() => router.push('/profile/billing')} height="2.3rem" px="1.6rem">
                Add Credit
            </Button>
        </DashboardBox>
    );
};

Credit.propTypes = {
    credit: PropTypes.number,
};

export default Credit;
