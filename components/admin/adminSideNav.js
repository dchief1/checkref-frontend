import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {Box, Text, Image, Flex, PseudoBox} from '@chakra-ui/core';
import Link from 'next/link';
import {connect} from 'react-redux';
import {toggleMobileSideNav} from '../../store/actions/navActions';

// eslint-disable-next-line
const PageLink = ({href, name, type, toggleMobileSideNav}) => {
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
                        ml={type === 'account' && '1rem'}
                        py=".8rem"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Text ml="2rem" fontSize={['16px', '16px', '17.5px']}>
                            {name}
                        </Text>
                    </Flex>
                </a>
            </Link>
        </PseudoBox>
    );
};

PageLink.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    toggleMobileSideNav: PropTypes.func.isRequired,
};

const adminSideNav = props => {
    const {mobileSideNavOpen, toggleMobileSideNav} = props;
    const router = useRouter();

    const [accountOpen, setAccountOpen] = useState(false);
    const toggleOpenAccount = () => {
        setAccountOpen(!accountOpen);
    };
    const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
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
                    <Link href="/admin/dashboard">
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
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/dashboard"
                    name="Dashboard"
                    key={1}
                />

                <Box onClick={toggleOpenAccount} cursor="pointer" mb="1.3rem">
                    <Flex ml=".9rem" py=".8rem" justifyContent="flex-start" alignItems="center">
                        <Text ml="1rem" fontSize={['16px', '16px', '18px']}>
                            Accounts
                        </Text>
                    </Flex>
                </Box>

                <Box d={accountOpen ? 'block' : 'none'}>
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/admin/companies"
                        name="Companies"
                        type="account"
                        key={5}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/admin/recruiters"
                        name="Recruiters"
                        type="account"
                        key={6}
                    />
                    <PageLink
                        toggleMobileSideNav={toggleMobileSideNav}
                        href="/admin/candidates"
                        name="Candidates"
                        type="account"
                        key={7}
                    />
                </Box>

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/requests"
                    name="Requests"
                    key={9}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/pricing"
                    name="Pricing"
                    key={10}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/reports"
                    name="Reports"
                    key={11}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/referrals"
                    name="Referrals"
                    key={12}
                />

                <PageLink
                    toggleMobileSideNav={toggleMobileSideNav}
                    href="/admin/settings"
                    name="Settings"
                    key={13}
                />

                <PageLink toggleMobileSideNav={handleLogout} href="#!" name="Logout" key={14} />
            </Flex>
        </Box>
    );
};

const mapStateToProps = ({navbar}) => ({
    mobileSideNavOpen: navbar.mobileSideNavOpen,
});

export default connect(mapStateToProps, {toggleMobileSideNav})(adminSideNav);
