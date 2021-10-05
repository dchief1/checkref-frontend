import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {Box, Text, Image, Flex, PseudoBox} from '@chakra-ui/core';
import Link from 'next/link';
import {connect} from 'react-redux';
import {toggleMobileSideNav} from '../store/actions/navActions';

const PageLink = ({href, iconPath, name, toggleMobileSideNav}) => {
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
    iconPath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    toggleMobileSideNav: PropTypes.func.isRequired,
};

const profileSideNav = props => {
    const {mobileSideNavOpen, toggleMobileSideNav} = props;

    const [accountOpen, setAccountOpen] = useState(false);
    const toggleOpenAccount = () => {
        setAccountOpen(!accountOpen);
    };
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
                    <Link href="/profile/dashboard">
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
                    {/* <Image mr="2rem" src="/icons/mobile_cross.svg" /> */}
                </Box>
            </Flex>
            <Flex flexDirection="column">
                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/profile/dashboard"
                    iconPath="/icons/dashboard_nav.svg"
                    name="Dashboard"
                    key={1}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/profile/question-set"
                    iconPath="/icons/question_set_nav.svg"
                    name="Question Set"
                    key={2}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/profile/teams"
                    iconPath="/icons/teams_nav.svg"
                    name="Teams"
                    key={3}
                />

                <Box onClick={toggleOpenAccount} cursor="pointer" mb="1.3rem">
                    <Flex ml=".9rem" py=".8rem" justifyContent="flex-start" alignItems="center">
                        <Image mx="auto" margin="0 1rem" src="/icons/account_nav.svg" />
                        <Text fontSize={['16px', '16px', '18px']}>Account</Text>
                    </Flex>
                </Box>

                <Box d={accountOpen ? 'block' : 'none'}>
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/profile/company-profile"
                        iconPath=""
                        name="Company Profile"
                        key={5}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        iconPath=""
                        href={'/profile/me'}
                        name={'User Profile'}
                        key={212}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/profile/global-reminder"
                        iconPath=""
                        name="Global Reminder"
                        key={6}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/profile/billing"
                        iconPath=""
                        name="Billing"
                        key={7}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/profile/invoices"
                        iconPath=""
                        name="Invoices"
                        key={8}
                    />
                </Box>

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/profile/referral"
                    iconPath="/icons/referral_nav.svg"
                    name="Referral"
                    key={9}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/profile/help"
                    iconPath="/icons/help_nav.svg"
                    name="Help"
                    key={10}
                />
            </Flex>
        </Box>
    );
};

const mapStateToProps = ({navbar}) => ({
    mobileSideNavOpen: navbar.mobileSideNavOpen,
});

export default connect(mapStateToProps, {toggleMobileSideNav})(profileSideNav);
