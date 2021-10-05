import React from 'react';
import Chart from 'chart.js';
import {Box, Flex, Text, Image} from '@chakra-ui/core';
import DashboardBox from '../../components/dashboard/dashboardBox';

const summaries = ({data}) => {
    const [percentageData, setPercentageData] = React.useState({
        completed: 0,
        inProgress: 0,
    });

    React.useEffect(() => {
        const {requestsCompleted, requestsSent} = data;
        if (!isNaN(requestsCompleted) && !isNaN(requestsSent)) {
            const percentageCompleted = Math.trunc(
                ((requestsCompleted || 1) / (requestsSent || 1)) * 100,
            );
            const percentageInProgress = Math.trunc(
                (((requestsSent || 1) - (requestsCompleted || 1)) / (requestsSent || 1)) * 100,
            );
            setPercentageData({
                completed: percentageCompleted,
                inProgress: percentageInProgress,
            });
        }
    }, [data]);

    React.useEffect(() => {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            options: {
                legend: {
                    display: false,
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                        },
                    },
                },
            },
            type: 'pie',
            data: {
                labels: [
                    `${percentageData.completed}% Completed`,
                    `${percentageData.inProgress}% in progress`,
                ],
                datasets: [
                    {
                        label: '% completed',
                        data: [percentageData.completed, percentageData.inProgress],
                        backgroundColor: ['#40DAB2', '#FEC771'],
                        borderColor: ['#40DAB2', '#FEC771'],
                        borderWidth: 1,
                    },
                ],
            },
        });
    });
    return (
        <DashboardBox
            mx={['auto', 0]}
            p={['.8rem 1.3rem', '1.7rem 1.8rem']}
            mb={['1.5rem', '2rem']}
        >
            <Flex align="center" justify="space-between">
                <Text
                    fontWeight="bold"
                    fontSize={['14px', '16px', '16px', '18px', '20px']}
                    borderBottom="1px solid #EDEDED"
                    pb=".4rem"
                >
                    SUMMARIES
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={['14px', '16px', '16px', '18px', '20px']}
                    borderBottom="1px solid #EDEDED"
                    pb=".4rem"
                >
                    REQUEST STATUS
                </Text>
                <Flex
                    flexBasis="23%"
                    cursor="pointer"
                    justify="center"
                    alignItems="center"
                    d={['none', 'none', 'flex']}
                >
                    <Text mr=".7rem" color="#878787"></Text>
                    <Image src="/icons/dashboard_drop_down.svg" />
                </Flex>
            </Flex>
            <Flex mt={['1.2rem']} justify="space-between" align="center">
                <Flex flexBasis={['51%', '50%', '32%']} flexDir="column">
                    <Box mb={['1rem']}>
                        <Text fontSize={['14px', '16px', '16px', '18px', '20px']} fontWeight="bold">
                            {data.requestsSent}
                        </Text>
                        <Text fontSize={['14px', '16px']} color="#535353">
                            REQUESTS SENT
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={['14px', '16px', '16px', '18px', '20px']} fontWeight="bold">
                            {data.requestsCompleted}
                        </Text>
                        <Text fontSize={['14px', '16px']} color="#535353">
                            REQUESTS COMPLETED
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    align={['flex-end', 'flex-end', 'center']}
                    flexDirection={['column', 'column', 'row']}
                    flexBasis={['50%', '68%']}
                >
                    <Box mr=".7rem">
                        {/* <Image
                            mx={['auto', 0]}
                            mb={['1.5rem', '1.5rem', 0]}
                            width={['50%', '60%', '80%']}
                            src="/images/dashboard_chart.svg"
                        /> */}
                        <canvas id="myChart" width="140" height="140"></canvas>
                    </Box>
                    <Box ml={['auto', 'auto', 0]} mr="auto" flexBasis={['35%']}>
                        <Flex align="center" mb="1rem">
                            <Box
                                mr={['.4rem']}
                                height={['8px', '12px']}
                                width={['8px', '12px']}
                                borderRadius="50%"
                                backgroundColor="#40DAB2"
                            />
                            <Text fontSize={['14px', '16px']}>
                                {percentageData.completed}% completed
                            </Text>
                        </Flex>
                        <Flex align="center" mb="1rem">
                            <Box
                                mr={['.4rem']}
                                height={['8px', '12px']}
                                width={['8px', '12px']}
                                borderRadius="50%"
                                backgroundColor="#FEC771"
                            />
                            <Text fontSize={['14px', '16px']}>
                                {percentageData.inProgress}% in progress
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </DashboardBox>
    );
};

export default summaries;
