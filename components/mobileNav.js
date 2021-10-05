import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Box, Image, List, ListItem, Link as ChakraLink} from '@chakra-ui/core';

const MobileNav = ({showMobileNav, handleRemoveMobileNav, loggedIn, handleLogout}) => {
    return ( 
        <Box
            maxWidth="800px"
            px="1.2rem"
            pt="2rem"
            position="fixed"
            height="100vh"
            zIndex="9999"
            top="0"
            width="100%"
            backgroundColor="brand.white"
            display={showMobileNav ? 'block' : 'none'}
        >
            <Box onClick={handleRemoveMobileNav}>
                <Image ml="auto" src="/icons/mobile_cross.svg" />
            </Box>

            <Box mt="1rem">
                <List
                    mt="2rem"
                    height="100%"
                    display="flex"
                    justifyContent="space-around"
                    flexDir="column"
                >
                    <ListItem
                        py="1rem"
                        fontWeight="500"
                        borderTop="1px solid #bdbdbd"
                        borderBottom="1px solid #bdbdbd"
                    >
                        <Link href="/">
                            <ChakraLink
                                pb=".8rem"
                                display="block"
                                _hover={{textDecoration: 'none'}}
                                onClick={handleRemoveMobileNav}
                            >
                                Home
                            </ChakraLink>
                        </Link>
                    </ListItem>

                    <ListItem py="1rem" fontWeight="500" borderBottom="1px solid #bdbdbd">
                        <Link href="/#how_it_works">
                            <ChakraLink
                                pb=".8rem"
                                display="block"
                                _hover={{textDecoration: 'none'}}
                                onClick={handleRemoveMobileNav}
                            >
                                How it works
                            </ChakraLink>
                        </Link>
                    </ListItem>

                    <ListItem py="1rem" fontWeight="500" borderBottom="1px solid #bdbdbd">
                        <Link href="/faq">
                            <ChakraLink
                                pb=".8rem"
                                display="block"
                                _hover={{textDecoration: 'none'}}
                                onClick={handleRemoveMobileNav}
                            >
                                FAQs
                            </ChakraLink>
                        </Link>
                    </ListItem>
                </List>

                <Box mt="4rem">
                    {!loggedIn ? (
                        <>
                            <Link href="/register">
                                <ChakraLink
                                    fontSize="20px"
                                    mb="1.7rem"
                                    textAlign="center"
                                    display="block"
                                    backgroundColor="brand.darkBlue"
                                    fontWeight="normal"
                                    width="100%"
                                    borderRadius="4px"
                                    color="brand.white"
                                    p={['.7rem 2rem']}
                                    _hover={{textDecoration: 'none'}}
                                >
                                    Get Started
                                </ChakraLink>
                            </Link>
                            <Link href="/login">
                                <ChakraLink
                                    fontSize="20px"
                                    textAlign="center"
                                    display="block"
                                    backgroundColor="brand.white"
                                    border="1px solid #F37121 "
                                    fontWeight="normal"
                                    width="100%"
                                    borderRadius="4px"
                                    color="#121113"
                                    p={['.7rem 2rem']}
                                    _hover={{textDecoration: 'none'}}
                                >
                                    Login
                                </ChakraLink>
                            </Link>
                        </>
                    ) : (
                        <Box
                            fontSize="20px"
                            textAlign="center"
                            display="block"
                            backgroundColor="brand.white"
                            border="1px solid #F37121 "
                            fontWeight="normal"
                            width="100%"
                            borderRadius="4px"
                            color="#121113"
                            p={['.7rem 2rem']}
                            _hover={{textDecoration: 'none'}}
                        >
                            <Link href={'/profile/dashboard'}>
                                <ChakraLink>Dashboard</ChakraLink>
                            </Link>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

MobileNav.propTypes = {
    showMobileNav: PropTypes.bool.isRequired,
    handleRemoveMobileNav: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
};

export default MobileNav;
