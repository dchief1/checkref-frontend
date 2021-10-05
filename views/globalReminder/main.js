import React from 'react';
import {Text, Heading, Box, Flex, FormControl, FormLabel, Select} from '@chakra-ui/core';
import ProfileMainContent from '../../components/profileMainContent';
import Button from '../../components/button';

const main = () => {
    return (
        <ProfileMainContent>
            <Box mb={['2.4rem']}>
                <Heading
                    mb={['.75rem', '.75rem', 0]}
                    as="h1"
                    fontSize={['18px', '20px', '23px', '25px']}
                >
                    Global Reminder
                </Heading>
            </Box>
            <Box mb="2.5rem" color="#50514F">
                <Text
                    mb={['1rem']}
                    fontSize={['16px', '18px']}
                    maxWidth={['100%', '100%', '650px']}
                >
                    Set reminders to your requests so they don&apos;t get lost in the clutter of
                    everyday activities.
                </Text>
                <Text fontSize={['16px', '18px']} maxWidth={['100%', '100%', '650px']}>
                    The settings here will be the default settings for all reference request checks
                    sent.
                </Text>
            </Box>
            <Box mb={['2rem']} width={['100%', '85%', '100%', '90%', '70%']}>
                <Flex flexDir={['column', 'column', 'row']} justify="space-between">
                    <FormControl
                        width={['auto', 'auto', '200px', '300px']}
                        mb={['2rem', '2rem', 0]}
                    >
                        <FormLabel
                            fontWeight={400}
                            fontSize={['16px', '17px']}
                            mb=".4rem"
                            color="#000"
                            htmlFor="firstReminder"
                        >
                            First Reminder
                        </FormLabel>
                        <Select
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select reminder"
                        >
                            <option selected value="option1">
                                3 Hours
                            </option>
                            <option value="option2">6 Hours</option>
                            <option value="option3">12 Hours</option>
                            <option value="option3">1 Day</option>
                            <option value="option3">2 Days</option>
                            <option value="option3">3 Days</option>
                        </Select>
                    </FormControl>

                    <FormControl width={['auto', 'auto', '200px', '300px']}>
                        <FormLabel
                            fontWeight={400}
                            fontSize={['16px', '17px']}
                            mb=".4rem"
                            color="#000"
                            htmlFor="secondReminder"
                        >
                            Second Reminder
                        </FormLabel>
                        <Select
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select reminder"
                        >
                            <option selected value="option1">
                                3 Hours after previous
                            </option>
                            <option value="option2">6 Hours after previous</option>
                            <option value="option3">12 Hours after previous</option>
                            <option value="option3">1 Day after previous</option>
                            <option value="option3">2 Days after previous</option>
                            <option value="option3">3 Days after previous</option>
                        </Select>
                    </FormControl>
                </Flex>
                <Flex
                    flexDir={['column', 'column', 'row']}
                    justify="space-between"
                    mt={['2rem', '2rem', '3rem']}
                >
                    <FormControl
                        width={['auto', 'auto', '200px', '300px']}
                        mb={['2rem', '2rem', 0]}
                    >
                        <FormLabel
                            fontWeight={400}
                            fontSize={['16px', '17px']}
                            mb=".4rem"
                            color="#000"
                            htmlFor="firstReminder"
                        >
                            Third Reminder
                        </FormLabel>
                        <Select
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select reminder"
                        >
                            <option selected value="option1">
                                3 Hours after previous
                            </option>
                            <option value="option2">6 Hours after previous</option>
                            <option value="option3">12 Hours after previous</option>
                            <option value="option3">1 Day after previous</option>
                            <option value="option3">2 Days after previous</option>
                            <option value="option3">3 Days after previous</option>
                        </Select>
                    </FormControl>

                    <FormControl width={['auto', 'auto', '200px', '300px']}>
                        <FormLabel
                            fontWeight={400}
                            fontSize={['16px', '17px']}
                            mb=".4rem"
                            color="#000"
                            htmlFor="secondReminder"
                        >
                            Final Reminder
                        </FormLabel>
                        <Select
                            backgroundColor="inherit"
                            border="1px solid #bdbdbd"
                            borderRadius="4px"
                            placeholder="Select reminder"
                        >
                            <option selected value="option1">
                                3 Hours after previous
                            </option>
                            <option value="option2">6 Hours after previous</option>
                            <option value="option3">12 Hours after previous</option>
                            <option value="option3">1 Day after previous</option>
                            <option value="option3">2 Days after previous</option>
                            <option value="option3">3 Days after previous</option>
                        </Select>
                    </FormControl>
                </Flex>
            </Box>
            <Button px={['2rem', '2.3rem']} height={['2.5rem', '2.67rem']}>
                Save
            </Button>
        </ProfileMainContent>
    );
};

export default main;
