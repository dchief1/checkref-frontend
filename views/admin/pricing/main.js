import React from 'react';
import {Box, Heading, Flex, Text, Icon} from '@chakra-ui/core';
import AdminMainContent from '../../../components/admin/adminMainContent';
import Button from '../../../components/button';

const main = () => {
    return (
        <AdminMainContent>
            <Box mb={4}>
                <Heading as="h1" size="lg" mb={[4]}>
                    Pricing
                </Heading>
                <Button height="2.2rem" d="block" ml="auto">
                    Add new plan
                </Button>
            </Box>
            <Box background="white" borderRadius="4px" pt={[6, 8]} px={0} pb={[6, 8, 12]}>
                <Box px={[4, 6]}>
                    <Heading as="h2" size="lg" mb={[4, 6]}>
                        Edit Plans
                    </Heading>
                </Box>
                <Box>
                    <Flex
                        px={[4, 6]}
                        pb={[2, 4]}
                        borderBottom="1px solid #C4C4C4"
                        justify="space-between"
                        align="center"
                    >
                        <Text flex="1" fontWeight="bold">
                            Name
                        </Text>
                        <Text flex="1" fontWeight="bold">
                            Description text
                        </Text>
                        <Text flex="1" fontWeight="bold">
                            Price
                        </Text>
                        <Text flex="1" fontWeight="bold">
                            Features
                        </Text>
                        <Text flex="0.3" fontWeight="bold"></Text>
                    </Flex>
                    <Flex
                        borderBottom="1px solid #C4C4C4"
                        mt={[2, 4]}
                        px={[4, 6]}
                        justify="space-between"
                        align="center"
                    >
                        <Text flex="1">STANDARD</Text>
                        <Text flex="1">Pay as you go</Text>
                        <Text flex="1">500</Text>
                        <Box flex="1">
                            <Text mb={2}>Pay per reference check</Text>
                            <Text mb={2}>1 User</Text>
                            <Text mb={2}>Standard Questions</Text>
                            <Text mb={2}>No team management</Text>
                            <Text mb={2}>Email support</Text>
                        </Box>
                        <Flex justify="space-between" align="center" flex="0.3">
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetEdit"
                            />
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetDelete"
                            />
                        </Flex>
                    </Flex>
                    <Flex
                        borderBottom="1px solid #C4C4C4"
                        mt={[2, 4]}
                        px={[4, 6]}
                        justify="space-between"
                        align="center"
                    >
                        <Text flex="1">PROFESSIONAL</Text>
                        <Text flex="1">Get 2 free credits</Text>
                        <Text flex="1">5,000</Text>
                        <Box flex="1">
                            <Text mb={2}>12 Reference checks</Text>
                            <Text mb={2}>5 Users</Text>
                            <Text mb={2}>Unlimited Questions</Text>
                            <Text mb={2}>Team management</Text>
                            <Text mb={2}>Email and Phone support</Text>
                        </Box>
                        <Flex justify="space-between" align="center" flex="0.3">
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetEdit"
                            />
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetDelete"
                            />
                        </Flex>
                    </Flex>
                    <Flex mt={[2, 4]} px={[4, 6]} justify="space-between" align="center">
                        <Text flex="1">ENTERPRISE</Text>
                        <Text flex="1">Get 2 free credits</Text>
                        <Text flex="1">50,000</Text>
                        <Box flex="1">
                            <Text mb={2}>120 Reference checks</Text>
                            <Text mb={2}>Unlimited Users</Text>
                            <Text mb={2}>Unlimited Questions</Text>
                            <Text mb={2}>Team management</Text>
                        </Box>
                        <Flex justify="space-between" align="center" flex="0.3">
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetEdit"
                            />
                            <Icon
                                size={['.97rem', '1rem', '1.35rem']}
                                mr={['1px', '4px']}
                                name="questionSetDelete"
                            />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </AdminMainContent>
    );
};

export default main;
