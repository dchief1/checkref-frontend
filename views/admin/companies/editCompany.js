import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Text,
    Icon,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select,
    Image,
} from '@chakra-ui/core';
import Button from '../../../components/button';
import {nigeriaStates, companySectors} from '../../../utils/companyProfileData.json';

const EditCompany = props => {
    const {ALL_VIEW_STATES, setViewState} = props;
    const handleGoBack = () => {
        setViewState(ALL_VIEW_STATES.viewCompany);
    };
    return (
        <Box>
            <Text mt={[0, 0, '-2rem']} mb={[4, 6]} fontWeight="bold">
                Company account/Mboko Microfinance
                <Text as="span" color="brand.orange">
                    Profile
                </Text>
            </Text>
            <Text mb={[4, 6]} d="flex" alignItems="center" cursor="pointer" onClick={handleGoBack}>
                {' '}
                <Icon size="1.3rem" name="chevron-left" /> Back to Mboko Microfinance
            </Text>
            <Box background="white" borderRadius="4px" pt={[4, 6]} px={[4, 6]} pb={[6, 8, 12]}>
                <Box>
                    <Heading mb={2} as="h1" size="lg">
                        Mboko Microfinance
                    </Heading>

                    <Flex
                        flexDir={['column-reverse', 'column-reverse', 'row']}
                        justifyContent="space-between"
                    >
                        <Box flexBasis={['50%']}>
                            <form>
                                <FormControl mb="1.5rem">
                                    <FormLabel
                                        mb="0px"
                                        fontWeight="bold"
                                        htmlFor="organizationName"
                                    >
                                        Company Name
                                    </FormLabel>
                                    <Input
                                        mt="0px"
                                        border="0"
                                        borderRadius="0"
                                        borderBottom="1px solid #bdbdbd"
                                        width={['100%', '65%', '80%', '65%']}
                                        type="text"
                                        backgroundColor="inherit"
                                        id="organizationName"
                                    />
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel
                                        mb=".6rem"
                                        fontWeight="bold"
                                        htmlFor="businessSector"
                                    >
                                        Business Sector
                                    </FormLabel>
                                    <Select
                                        backgroundColor="inherit"
                                        border="1px solid #bdbdbd"
                                        borderRadius="4px"
                                        width={['100%', '65%', '80%', '65%']}
                                        placeholder="Select sector"
                                    >
                                        {companySectors.map(sector => (
                                            <option key={sector} value={sector}>
                                                {sector}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb=".6rem" fontWeight="bold" htmlFor="city">
                                        City/State
                                    </FormLabel>
                                    <Select
                                        backgroundColor="inherit"
                                        border="1px solid #bdbdbd"
                                        borderRadius="4px"
                                        width={['100%', '65%', '80%', '65%']}
                                        placeholder="Select state"
                                    >
                                        {nigeriaStates.map(state => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl mb="1.5rem">
                                    <FormLabel mb=".6rem" fontWeight="bold" htmlFor="country">
                                        Country
                                    </FormLabel>
                                    <Select
                                        backgroundColor="inherit"
                                        border="1px solid #bdbdbd"
                                        borderRadius="4px"
                                        width={['100%', '65%', '80%', '65%']}
                                        value={'Nigeria'}
                                        isDisabled={true}
                                        placeholder="Select country"
                                    >
                                        <option value={'Nigeria'}>Nigeria</option>
                                    </Select>
                                </FormControl>

                                <Button height="2.3rem" mb="2rem" type={'submit'}>
                                    Save
                                </Button>
                            </form>
                        </Box>

                        <Box mb="2rem">
                            <Flex align="center" flexDir="column">
                                <Image
                                    cursor="pointer"
                                    mb={2}
                                    mx={[0, 0, 'auto']}
                                    p="1.6rem"
                                    backgroundColor="#e9e9e9"
                                    borderRadius="50%"
                                    height={'200px'}
                                    width="auto"
                                    src={'/images/admin_company_avatar.png'}
                                />
                                <Text>Created: 12/12/2020</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};
EditCompany.propTypes = {
    ALL_VIEW_STATES: PropTypes.object.isRequired,
    setViewState: PropTypes.func.isRequired,
};

export default EditCompany;
