import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Box, Flex, Image, Link as ChakraLink, List, ListItem} from '@chakra-ui/core';
import Container from './container';
import MobileNav from './mobileNav';

const Navbar = () => {  
    const router = useRouter();
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleRemoveMobileNav = () => {
        setShowMobileNav(false);
    };
    const handleLogout = () => {
        localStorage.clear();
        router.replace('/login');
    };

    useEffect(() => {
        if (!localStorage.getItem('checkref_user') || !localStorage.getItem('checkref_token')) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    }, []);

    return (
        <>
            <Box
                position="fixed"
                width="100%"
                zIndex="1000"
                top="0"
                background="rgba(255, 236, 224, 1.0)"
                py={['1.2rem', '1.5rem', '1.7rem']}
            >
                <Container>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Box flexBasis="20%">
                            <Link href="/">
                                <a>
                                    <Image maxWidth={['200%', '100%']} src="/images/logo.svg" />
                                </a>
                            </Link>
                        </Box>
                        <Flex
                            display={['none', 'none', 'flex']}
                            alignItems="center"
                            justifyContent="space-between"
                            flexBasis="75%"
                        >
                            <List
                                display={['flex']}
                                alignItems={['center']}
                                justifyContent="space-between"
                                styleType="none"
                                margin={[0]}
                                padding={[0]}
                                flexBasis={['45%', '45%', '45%', '40%', '30%']}
                            >
                                <ListItem fontSize="20px" fontWeight="500">
                                    <Link href="/#how_it_works">
                                        <a>How it works</a>
                                    </Link>
                                </ListItem>
                                <ListItem fontSize="20px" fontWeight="500">
                                    <Link href="/#pricing">
                                        <a>Pricing</a>
                                    </Link>
                                </ListItem>
                                <ListItem fontSize="20px" fontWeight="500">
                                    <Link href="/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </ListItem>
                            </List>
                            <List
                                display={['flex']}
                                alignItems={['center']}
                                justifyContent="space-between"
                                styleType="none"
                                margin={[0]}
                                padding={[0]}
                                flexBasis={['45%', '45%', '45%', '40%', '30%']}
                            >
                                {!loggedIn ? (
                                    <>
                                        <ListItem
                                            backgroundColor="brand.darkBlue"
                                            borderRadius="4px"
                                            padding=".5rem 1.2rem"
                                            color="brand.white"
                                            cursor="pointer"
                                        >
                                            <Link href="/register">
                                                <a>Get started</a>
                                            </Link>
                                        </ListItem>
                                        <ListItem
                                            cursor="pointer"
                                            borderRadius="4px"
                                            padding=".4rem 1.2rem"
                                            border="1px solid #F37121"
                                        >
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </ListItem>{' '}
                                    </>
                                ) : (
                                    <ListItem
                                        cursor="pointer"
                                        borderRadius="4px"
                                        padding=".4rem 1.2rem"
                                        border="1px solid #F37121"
                                        marginLeft="auto"
                                    >
                                        <Link href={'/profile/dashboard'}>
                                            <ChakraLink>Dashboard</ChakraLink>
                                        </Link>
                                    </ListItem>
                                )}
                            </List>
                        </Flex>
                        <Image
                            onClick={() => setShowMobileNav(!showMobileNav)}
                            cursor="pointer"
                            display={['flex', 'flex', 'none']}
                            src="/icons/mobile_hamburger.svg"
                        />
                    </Flex>
                </Container>
            </Box>
            <MobileNav
                handleLogout={handleLogout}
                loggedIn={loggedIn}
                showMobileNav={showMobileNav}
                handleRemoveMobileNav={handleRemoveMobileNav}
            />
        </>
    );
};

export default Navbar;
