import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {Box, Text, Image, Flex, PseudoBox} from '@chakra-ui/core';
import Link from 'next/link';
import {connect} from 'react-redux';
import {toggleMobileSideNav} from '../../store/actions/navActions';

// eslint-disable-next-line
const PageLink = ({href, name, type, toggleMobileSideNav, iconPath}) => {
    const router = useRouter();
    return (
        <PseudoBox
            backgroundColor={router.route === href ? '#384276' : 'inherit'}
            as="div"
            _hover={{backgroundColor: '#384276'}}
            mb="1.3rem"
            onClick={toggleMobileSideNav}
        >
            <Link href={href}>
                <a>
                    <Flex
                        ml={iconPath ? '.9rem' : '3.5rem'}
                        mr={iconPath ? 0 : '1rem'}
                        py=".8rem"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        {iconPath && <Image mx="auto" margin="0 1rem" src={iconPath} />}
                        <Text fontSize={['16px', '16px', '17.5px']}>{name}</Text>
                    </Flex>
                </a>
            </Link>
        </PseudoBox>
    );
};

PageLink.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iconPath: PropTypes.string.isRequired,
    toggleMobileSideNav: PropTypes.func.isRequired,
};

const candidateSideNav = props => {
    const {mobileSideNavOpen, toggleMobileSideNav} = props;

    return (
        <Box
            display={[
                `${mobileSideNavOpen ? 'block' : 'none'}`,
                `${mobileSideNavOpen ? 'block' : 'none'}`,
                'block',
            ]}
            width={['100%', '100%', '200px', '220px']}
            zIndex="1002"
            top="0"
            left="0"
            overflowX="hidden"
            pt="2rem"
            backgroundColor="brand.darkBlue"
            color="brand.white"
            position="fixed"
            height="100%"
        >
            <Flex justify="space-between" align="center" mb="2.5rem">
                <Box onClick={toggleMobileSideNav}>
                    <Link href="/candidate/dashboard">
                        <a>
                            {' '}
                            <Image ml="2rem" src="/images/login_logo.svg" />
                        </a>
                    </Link>
                </Box>
                <Box mr="2rem" display={['flex', 'flex', 'none']} onClick={toggleMobileSideNav}>
                    <Box transform="rotate(45deg)" background="white" height="30px" width="3px" />
                    <Box
                        position="absolute"
                        right="31px"
                        transform="rotate(-45deg)"
                        background="white"
                        height="30px"
                        width="3px"
                    />
                </Box>
            </Flex>
            <Flex flexDirection="column">
                <PageLink
                    iconPath="/icons/dashboard_nav.svg"
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/candidate/dashboard"
                    name="Dashboard"
                    key={1}
                />

                <PageLink
                    iconPath="/icons/candidate_history.svg"
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/candidate/history"
                    name="History"
                    key={9}
                />

                <PageLink
                    iconPath="/icons/account_nav.svg"
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/candidate/account"
                    name="Account"
                    key={10}
                />
            </Flex>
        </Box>
    );
};

const mapStateToProps = ({navbar}) => ({
    mobileSideNavOpen: navbar.mobileSideNavOpen,
});

export default connect(mapStateToProps, {toggleMobileSideNav})(candidateSideNav);
