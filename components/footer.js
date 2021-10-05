import React from 'react';
import Link from 'next/link';
import {
    Box,
    Flex,
    Text,
    Image,
    List,
    ListItem,
    FormControl,
    Input,
    Textarea,
    Button,
} from '@chakra-ui/core';
import Container from './container';

const FooterListItem = props => {
    return <ListItem cursor="pointer" color="brand.white" {...props} />;
};

const FooterHeader = props => {
    return <Text mb="1.5rem" fontWeight="500" fontSize="25px" color="brand.orange" {...props} />;
};

const FooterFormControl = props => {
    return (
        <FormControl borderRadius="0" border="1px solid #666666" marginBottom="1rem" {...props} />
    );
};

const Footer = () => {
    return (
        <Box py="2rem" backgroundColor="brand.darkBlue">
            <Container>
                <Flex
                    flexDirection={['column', 'column', 'column', 'row']}
                    marginBottom="5rem"
                    justifyContent="space-between"
                >
                    <Box mb={['2rem', '2rem', '2rem', 0]} marginRight="2rem" flexBasis="28%">
                        <FooterHeader mb="3px">About Checkref</FooterHeader>
                        <Box width="3rem" mb="1.4rem" height="2px" background="#39818B"></Box>
                        <Text maxWidth="500px" mb="2rem" color="brand.white">
                            Checkref is a digital automated reference checking tool. It simplifies
                            and streamlines, the reference checking process thereby increasing the
                            validity and compliance of your Employee reference checks.
                        </Text>
                        <FooterHeader mb="3px">Socials</FooterHeader>
                        <Box width="3rem" mb="1.4rem" height="2px" background="#39818B"></Box>
                        <Flex>
                            <Link href="#!">
                                <a>
                                    <Image src="/icons/facebook.svg" />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <Image src="/icons/twitter.svg" />
                                </a>
                            </Link>
                            <Link href="#!">
                                <a>
                                    <Image src="/icons/linkedin.svg" />
                                </a>
                            </Link>
                        </Flex>
                    </Box>
                    <Box
                        ml={['0', '0', '0', '2rem']}
                        mb={['2rem', '2rem', '2rem', 0]}
                        flexBasis="35%"
                    >
                        <FooterHeader mb="3px">Links</FooterHeader>
                        <Box width="2rem" mb="1.4rem" height="2px" background="#39818B"></Box>
                        <List spacing={4}>
                            <FooterListItem>
                                <Link href="/#how_it_works">
                                    <a>How it works</a>
                                </Link>
                            </FooterListItem>
                            <FooterListItem>
                                <Link href="/#pricing">
                                    <a>Pricing</a>
                                </Link>
                            </FooterListItem>
                            <FooterListItem>
                                <Link href="/support">
                                    <a>Support</a>
                                </Link>
                            </FooterListItem>
                            <FooterListItem>
                                <Link href="/privacy-policy">
                                    <a>Privacy Policy</a>
                                </Link>
                            </FooterListItem>
                            <FooterListItem>
                                <Link href="/terms-conditions">
                                    <a>Terms of Use</a>
                                </Link>
                            </FooterListItem>
                        </List>
                    </Box>
                    <Box flexBasis="27%">
                        <FooterHeader>Contact Us</FooterHeader>
                        <Box width={['100%', '70%', '60%', '95%']}>
                            <form>
                                <FooterFormControl>
                                    <Input
                                        borderRadius="0"
                                        border="none"
                                        py="1.4rem"
                                        required
                                        type="text"
                                        id="footer_name"
                                        aria-describedby="name"
                                        placeholder="Name"
                                    />
                                </FooterFormControl>
                                <FooterFormControl>
                                    <Input
                                        borderRadius="0"
                                        border="none"
                                        py="1.4rem"
                                        required
                                        type="email"
                                        id="footer_email"
                                        aria-describedby="email"
                                        placeholder="Email"
                                    />
                                </FooterFormControl>
                                <FooterFormControl>
                                    <Input
                                        borderRadius="0"
                                        border="none"
                                        py="1.4rem"
                                        required
                                        type="text"
                                        id="footer_phone_number"
                                        aria-describedby="phone_number"
                                        placeholder="Phone Number"
                                    />
                                </FooterFormControl>
                                <FooterFormControl>
                                    <Textarea
                                        height="8rem"
                                        borderRadius="0"
                                        border="0"
                                        py="1rem"
                                        required
                                        placeholder="Your Message"
                                    />
                                </FooterFormControl>
                                <Button
                                    _focus={{outline: 0}}
                                    backgroundColor="brand.orange"
                                    fontWeight="normal"
                                    width={['80%']}
                                    type="submit"
                                    borderRadius="4px"
                                    color="brand.white"
                                    px={['2rem']}
                                    height="2.8rem"
                                    _hover={{backgroundColor: 'brand.orange'}}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
                <Text color="brand.white" textAlign="center">
                    &copy; 2020 CR80VTY Media Ltd. All Rights Reserved. RC: 1336377
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
