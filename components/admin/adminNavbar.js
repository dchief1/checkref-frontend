import React from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Box, Flex, Text, Image, Menu, MenuList, MenuItem, MenuButton} from '@chakra-ui/core';
import Button from '../button';
import Container from '../container';
import {toggleMobileSideNav} from '../../store/actions/navActions';

const adminNavbar = props => {
    const router = useRouter();
    // const [user, setUser] = useState(null);
    const {toggleMobileSideNav} = props;

    const handleLogout = () => {
        // localStorage.clear();
        router.replace('/login');
    };

    // useEffect(() => {
    //     if (localStorage.checkref_user) {
    //         setUser(JSON.parse(localStorage.checkref_user));
    //     } else {
    //         router.push('/login');
    //     }
    // }, []);
    return (
        <>
            <Box display={['block', 'block', 'none']} width="100%" position="relative">
                <Box
                    position="fixed"
                    zIndex="1001"
                    width="inherit"
                    top="0px"
                    background={['#18287E', '#18287E', '#f7f9ff']}
                    py={['1rem', '1.2rem']}
                    boxShadow={['none', 'none', '0px 4px 4px -1px #ccc']}
                >
                    <Flex
                        ml={['.5rem', '2.5rem', 'auto']}
                        mr={['auto', 'auto', '20vw', '13vw', '8.5vw']}
                        pr={[0, 0, '2rem', 0]}
                        width="50%"
                        alignItems="center"
                        justifyContent="center"
                        display={['none', 'none', 'flex']}
                    >
                        <Button
                            height="2.5rem"
                            px={['2rem', '2rem', '2.5rem', '3.5rem']}
                            mr={['1rem']}
                        >
                            New request
                        </Button>
                        <Flex cursor="pointer" justify="center" align="center">
                            <Text mr={['.5rem']}>Erons</Text>
                            <Menu>
                                <MenuButton p="1rem" as={Box} rightIcon="chevron-down">
                                    <Image src="/icons/dashboard_drop_down.svg" />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                    <Container>
                        <Flex
                            align="center"
                            justify="space-between"
                            display={['flex', 'flex', 'none']}
                            py=".45rem"
                        >
                            <Image
                                onClick={toggleMobileSideNav}
                                cursor="pointer"
                                src="/icons/dashboard_hamburger.svg"
                            />

                            <Link href="/admin/dashboard">
                                <a>
                                    {' '}
                                    <Image src="/images/mobile_dashboard_logo.svg" />
                                </a>
                            </Link>
                        </Flex>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default connect(null, {toggleMobileSideNav})(adminNavbar);
