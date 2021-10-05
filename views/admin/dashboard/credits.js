import * as React from 'react';
import {Box, Text, Heading, Flex, Image, Icon} from '@chakra-ui/core';
import Button from '../../../components/button';

const Credits = () => {
    return (
        <Box mb={[10, 16]}>
            <Heading mb={4} as="h1" size="lg">
                Credits
            </Heading>
            <Flex mb={4} justify="flex-end">
                <Button height="2rem" px="1rem" rightIcon="chevron-down">
                    Last 24 Hours
                </Button>
            </Flex>
            <Flex
                gridColumnGap={['1rem']}
                align="stretch"
                justify={['space-between']}
                flexWrap="wrap"
                flexDir={['column', 'column', 'row']}
            >
                <Box
                    flexBasis={['100%', '100%', '32%']}
                    width={['100%', '100%', 'auto']}
                    mb={[4, 4, 4, 0]}
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    borderRadius="4px"
                    flex="1"
                    color="brand.white"
                    background="#0779E4"
                >
                    <Text mb={[4, 6]} textTransform="uppercase">
                        total credits purchased
                    </Text>
                    <Flex align="center" mb={2} justify="space-between">
                        <Image width="50%" src="/images/admin_chart1.png" />
                        <Box>
                            <Text>
                                {' '}
                                <Text fontSize={['md', 'lg']} as="span">
                                    25
                                </Text>{' '}
                                <Text fontSize="sm" as="span">
                                    /250 CREDITS
                                </Text>
                            </Text>
                            <Text>Used</Text>
                            <Text>Purchased</Text>
                        </Box>
                    </Flex>
                    <Flex gridColumnGap="1rem" justify="flex-end">
                        <Text>
                            LAST MONTH <br /> 500
                        </Text>
                        <Text>
                            CHANGE <br />{' '}
                            <Text color="#07E310" as="span">
                                {' '}
                                +187
                            </Text>
                        </Text>
                    </Flex>
                </Box>
                <Box
                    flexBasis={['100%', '100%', '32%']}
                    width={['100%', '100%', 'auto']}
                    mb={[4, 4, 4, 0]}
                    p={['1rem', '1.5rem', '1.5rem 2rem']}
                    borderRadius="4px"
                    flex="1"
                    color="brand.white"
                    background="#0779E4"
                >
                    <Text mb={[4, 6]} textTransform="uppercase">
                        total credits purchased
                    </Text>
                    <Flex align="center" mb={2} justify="space-between">
                        <Image width="50%" src="/images/admin_chart1.png" />
                        <Box>
                            <Text>
                                {' '}
                                <Text fontSize={['md', 'lg']} as="span">
                                    25
                                </Text>{' '}
                                <Text fontSize="sm" as="span">
                                    /250 CREDITS
                                </Text>
                            </Text>
                            <Text>Used</Text>
                            <Text>Purchased</Text>
                        </Box>
                    </Flex>
                    <Flex gridColumnGap="1rem" justify="flex-end">
                        <Text>
                            LAST MONTH <br /> 500
                        </Text>
                        <Text>
                            CHANGE <br />{' '}
                            <Text color="#07E310" as="span">
                                +187
                            </Text>
                        </Text>
                    </Flex>
                </Box>
                <Box
                    flexBasis={['100%', '100%', '32%']}
                    width={['100%', '100%', 'auto']}
                    mb={[4, 4, 4, 0]}
                    borderRadius="4px"
                    flex="1"
                    background="white"
                >
                    <Text
                        px={['1rem', '1.5rem']}
                        py="1rem"
                        fontWeight={600}
                        color="#000"
                        mb={[4, 6]}
                        textTransform="uppercase"
                        borderBottom="2px solid #e5e5e5"
                    >
                        recent requests
                    </Text>
                    <Flex
                        borderBottom="1px solid #e5e5e5"
                        align="center"
                        justify="space-between"
                        px={['1rem', '1.5rem']}
                        py="1rem"
                    >
                        <Text fontSize="sm">Popeye Holdings</Text>
                        <Icon name="arrow-forward" />
                        <Text fontSize="sm">
                            Soji Famiduro <br />
                            12/06/20
                        </Text>
                    </Flex>
                    <Flex
                        borderBottom="1px solid #e5e5e5"
                        align="center"
                        justify="space-between"
                        px={['1rem', '1.5rem']}
                        py="1rem"
                    >
                        <Text fontSize="sm">Loveworld Recruitment</Text>
                        <Icon name="arrow-forward" />
                        <Text fontSize="sm">
                            Ciroma Chukwuma <br />
                            12/06/20
                        </Text>
                    </Flex>
                    <Flex justify="flex-end" px={['1rem', '1.5rem']} py="1rem">
                        <Text fontWeight={600}> View all</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Credits;
