import React from 'react';
import {Box, Heading, Text, List, ListItem} from '@chakra-ui/core';
import Container from '../../components/container';
import Link from 'next/link';

const TermsSubHeadings = props => {
    return (
        <Heading
            mt={['2rem', '2.5rem', '3.7rem']}
            mb={['1rem']}
            fontWeight="bold"
            fontSize={['20px', '24px']}
            as="h3"
            {...props}
        />
    );
};

const TermsText = props => {
    return <Text mb={['1rem', '1.5rem']} fontSize={['16px']} {...props} />;
};

const TermsListItem = props => {
    return <ListItem mb={['.5rem']} fontSize={['16px']} {...props} />;
};

const main = () => {
    return (
        <Box mt={['7rem', '10rem']}>
            <Container>
                <Heading
                    as="h1"
                    fontSize={['25px', '30px', '40px']}
                    textAlign="center"
                    mb={['2rem', '3rem']}
                >
                    Terms and Conditions
                </Heading>
                <Box
                    boxShadow=" 0px 0px 4px rgba(0, 0, 0, 0.25)"
                    background="brand.white"
                    p={['2rem 1rem', '2rem 1.5rem', '3rem 2rem']}
                    mb={['2rem', '3rem', '5rem']}
                >
                    <Box mx="auto" width={['100%', '100%', '90%']}>
                        <Box>
                            <TermsSubHeadings mt="1rem">Terms of Use</TermsSubHeadings>
                            <TermsText>
                                Welcome to Checkref. This website (www.checkref.co) is owned and
                                fully operated by Cr80vty Media Ltd and its subsidiaries;
                                (collectively referred to hereafter as “we” “us” or “our”). The
                                Terms and Conditions outlined in this document will govern your
                                (referred to hereafter as “you” “yourselves” or “your”) access to
                                and usage of this website. By accessing or using our website, you
                                consent to comply with these Terms and Conditions and also our{' '}
                                <Link href="/privacy-policy">
                                    <a>
                                        {' '}
                                        <Text
                                            as="span"
                                            color="#1da1f2"
                                            _hover={{textDecor: 'none'}}
                                        >
                                            Privacy Policy
                                        </Text>{' '}
                                    </a>
                                </Link>
                            </TermsText>
                        </Box>

                        <Box>
                            <TermsSubHeadings>Intellectual Property</TermsSubHeadings>
                            <TermsText>
                                This website contains a large amount of intellectual property which
                                belongs to or is licensed to us and is thereby protected by local
                                and international laws, including but not limited to the trade
                                names, trademarks, software, content, patterns, pictures, graphics,
                                media, arrangement, layout and a general overview of the website.
                                You hold no interest in any of this intellectual property. You must
                                not violate any trademark or intellectual property rights related to
                                this website. This includes but is not limited to:
                            </TermsText>
                            <List>
                                <TermsListItem>
                                    • Modification or changing any of the code or content on this
                                    website;
                                </TermsListItem>
                                <TermsListItem>
                                    • Framing or embedding any of the material on this website into
                                    another website; or
                                </TermsListItem>
                                <TermsListItem>
                                    • Generating derivative content from the materials on this
                                    website.
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>User Content</TermsSubHeadings>
                            <TermsText>
                                From time to time you may be enabled to communicate with other
                                registered users logged on to this website and to share
                                materials/information on the website (hereafter called User
                                Content). Whenever you post any User Content on this website, you:
                            </TermsText>

                            <List mb={['1rem', '1.5rem']}>
                                <TermsListItem>
                                    • Must not post inaccurate or derogatory content;
                                </TermsListItem>
                                <TermsListItem>
                                    • Must not post inaccurate or derogatory content;
                                </TermsListItem>
                                <TermsListItem>
                                    • Will be solely responsible for such User Content.
                                </TermsListItem>
                                <TermsListItem>
                                    • Affirm that you have all legal rights to share such User
                                    Content;
                                </TermsListItem>
                                <TermsListItem>
                                    • Grant us a continuous, non-exclusive, royalty-free,
                                    irreversible and transferable right and authorization to use
                                    such Content in any way we deem fit ,and also to authorize any
                                    other person/entity to use the User Content in any way; and
                                </TermsListItem>
                                <TermsListItem>
                                    • You consent to any action or exclusion which would otherwise
                                    be regarded as a violation of your moral rights. Furthermore, if
                                    you post/share any User Content for which any third party has
                                    moral rights, you must make sure that the third party consents
                                    in the same manner.
                                </TermsListItem>
                            </List>
                            <TermsText mb=".5rem">
                                {' '}
                                We reserve the right to modify or remove or not publish any User
                                Content. We do not:
                            </TermsText>
                            <List>
                                <TermsListItem>
                                    • Vouch for the identity of any user; or
                                </TermsListItem>
                                <TermsListItem>
                                    • Guarantee the accuracy, quality or dependability of any User
                                    Content, and even though that we monitor all content and
                                    information shared/transferred via this website; we are not
                                    under any obligation to do so.
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Information</TermsSubHeadings>
                            <TermsText mb="1rem">
                                Any content or information provided on this website, including all
                                User Content, references, statements, and opinions available on this
                                website (hereafter referred to as Information) is for general
                                information only. The Information does not regard your particular
                                circumstances, and if you rely on such Information for
                                decision-making, you do so at your own risk. We are not liable for
                                any mistakes or exclusions in the Information. Before taking action
                                based on any Information, we advise that you:
                            </TermsText>
                            <List>
                                <TermsListItem>
                                    • Consider whether it is suitable for your desired purpose;
                                </TermsListItem>
                                <TermsListItem>
                                    • Do a proper background research on your own; and
                                </TermsListItem>
                                <TermsListItem>
                                    • Get professional advice where necessary.
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Confidentiality and Publicity</TermsSubHeadings>
                            <TermsText>
                                We grant you a limited, non-exclusive, personal, non-transferable,
                                non-sublicensable, royalty-free, revocable licence to display our
                                logo at your Office(s) or on your Website(s) only and strictly in
                                accordance with any brand guidelines and other instructions as we
                                may notify you of in writing from time to time.
                            </TermsText>
                            <TermsText>
                                You grant us a limited, non-exclusive, personal, non-transferable,
                                non-sublicensable, royalty-free, revocable licence to display your
                                name and logo on our website and affiliated companies to promote our
                                product and/or company.
                            </TermsText>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Prohibited Conduct</TermsSubHeadings>
                            <TermsText mb={['.5rem']}>
                                You must not, under any circumstances:
                            </TermsText>{' '}
                            <List>
                                <TermsListItem>
                                    • Violate the rights of any user or entity, including but not
                                    limited to; their intellectual property right, secrecy,
                                    publicity or contractual rights;
                                </TermsListItem>
                                <TermsListItem>
                                    {' '}
                                    • Utilize or attempt to utilize any machines, applications,
                                    tools, or other methods (including but not limited to browsers,
                                    avatars, robots, or intelligent agents) to go through or search
                                    this website except the widely recognized and accepted search
                                    engine and agents, or other generally available third party web
                                    browsers;
                                </TermsListItem>
                                <TermsListItem>
                                    • Try to decode, decompile, disassemble or reverse engineer any
                                    of the raw codes or application software related to or making up
                                    a part of this website and;
                                </TermsListItem>
                                <TermsListItem>
                                    • Make use of this website to transfer, share, publish or submit
                                    personal information about any other person or entity, including
                                    but not limited to, pictures of people without their
                                    authorization, personal contact details or debit, credit,
                                    calling card or account numbers;
                                </TermsListItem>
                                <TermsListItem>
                                    • Make use of this website in relation to the broadcast of
                                    unsolicited promotional offers or commercial email, that is,
                                    spam or marketing materials;
                                </TermsListItem>
                                <TermsListItem>
                                    • Indulge in actions that interfere with the smooth functioning
                                    of this website;
                                </TermsListItem>
                                <TermsListItem>
                                    • Harass or stalk another registered user of this website or
                                    take and store any personal information belonging to any other
                                    user;
                                </TermsListItem>
                                <TermsListItem>
                                    • Carry out screen scraping or other data collection or
                                    compilation techniques; or rather encourage, support or assist
                                    any third party in doing anything of this sort.
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Accounts</TermsSubHeadings>
                            <TermsText>
                                When you create an account on our website, you will be held
                                responsible for:
                            </TermsText>
                            <List>
                                <TermsListItem>
                                    • Providing correct and complete information
                                </TermsListItem>
                                <TermsListItem>
                                    • Keeping your username and password secret and confidential;
                                    and
                                </TermsListItem>
                                <TermsListItem>
                                    • Every activity carried out through your account.
                                </TermsListItem>
                                <TermsListItem>
                                    • You must inform us promptly if you notice any un-authorized
                                    access to your account by sending an email to{' '}
                                    <Link href="maito:hello@checkref.co">
                                        <a>
                                            <Text
                                                color="#1da1f2"
                                                _hover={{textDecor: 'none'}}
                                                as="span"
                                            >
                                                hello@checkref.co
                                            </Text>
                                        </a>
                                    </Link>{' '}
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings> Third Party Links and Websites</TermsSubHeadings>
                            <TermsText>
                                On our website, we may occasionally display links to third-party
                                websites, adverts, promotional offers, or other events or products
                                that are neither owned nor administered by us. This does not imply
                                that we validate, sponsor or recommend any of such third-party
                                sites, offers, materials, products, or services. If you access any
                                of such website, offer, or service; you do so at your own risk. We
                                will not take responsibility for any issues arising from your use of
                                or access to any of such third-party website, offer or service.
                            </TermsText>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Disclaimers</TermsSubHeadings>
                            <TermsText mb={['.5rem', '1rem']}>
                                This website is made available to you without any warranties,
                                expressly stated or implied; including but without limitation
                                implied warranties of appropriateness and fitness for a specific
                                purpose. We do not guarantee that:
                            </TermsText>
                            <List mb={['.5rem', '1rem']}>
                                <TermsListItem>
                                    • Our website will always meet your requirements;
                                </TermsListItem>
                                <TermsListItem>
                                    • The Information therein is correct or reliable;
                                </TermsListItem>
                                <TermsListItem>
                                    • Our website or your access to it will always be hitch-free;
                                </TermsListItem>
                                <TermsListItem>
                                    • Our website or the server which saves and transfers content to
                                    you are always free of viruses or any other dangerous materials;
                                    or
                                </TermsListItem>
                                <TermsListItem>
                                    • Our website will function continuously or be available for
                                    your use at any time.
                                </TermsListItem>
                            </List>
                            <TermsText>
                                We do not take responsibility and will not be liable for any User
                                Content which you or any other registered user or third party shares
                                or transfers using our Services. You understand and warrant that you
                                may find User Content that is incorrect, offensive, inappropriate,
                                derogatory, or otherwise unsuitable for your purpose.
                            </TermsText>
                            <TermsText>
                                We will not be liable for any damage to your personal computer or
                                loss of files resulting from the download of any content, media or
                                any other material gotten from this website. Any content, materials
                                or media downloaded or otherwise collected from this website is done
                                at your own volition and risk.
                            </TermsText>
                            <TermsText>
                                We make no promises or warranties (express or implied) regarding the
                                accuracy, completeness, reliability, or continuous availability of
                                any Information, pictures, products, services, or related content
                                you may see on this website.
                            </TermsText>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Limitation of Liability</TermsSubHeadings>
                            <TermsText>
                                As far as the law permits, we limit all guarantees, warranties or
                                terms (whether expressly stated or implied) unless expressly stated
                                in these Terms and Conditions, and the nation’s local Consumer Law
                                to the extent legally applicable.
                            </TermsText>
                            <TermsText>
                                As far as the law permits, we limit all liabilities for any damages,
                                loss, injury, expenses, whether direct, indirect, accidental,
                                derived, special or consequential including but not limited to loss
                                of revenue, that you or any third party may incur, or suits laid
                                against you or any third party arising from:
                            </TermsText>
                            <List>
                                <TermsListItem>
                                    {' '}
                                    • Your access to and usage of our website, or even your
                                    inability to access our site.
                                </TermsListItem>
                                <TermsListItem>
                                    • Any action or content of another registered user or third
                                    party; or
                                </TermsListItem>
                                <TermsListItem>
                                    • Unauthorized access to, usage or modification of your User
                                    Content.
                                </TermsListItem>
                                <TermsText mt={['.5rem', '1rem']}>
                                    If we cannot limit liability, our full liability for all claims
                                    pertaining to this website will not exceed one hundred dollars
                                    (or equivalent).
                                </TermsText>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Indemnity</TermsSubHeadings>
                            <TermsText>
                                You warrant to vindicate and fully indemnify us together with all
                                our affiliates (and our employees, directors, and agents) blameless
                                in the event of any claims, legal actions, lawsuits, damages,
                                liabilities or expenses (including legal fees and expenses based on
                                a full indemnity), including but not limited to tort, breach of
                                contract, resulting from or related to:
                            </TermsText>
                            <List mt={['.5rem', '1rem']}>
                                <TermsListItem>
                                    • Your usage of and access to our services through this website;
                                </TermsListItem>
                                <TermsListItem>
                                    • Any violation of any part of these Terms and Condition by you;
                                    or
                                </TermsListItem>
                                <TermsListItem>
                                    • Any deliberate, illegal or careless action or inaction by you.
                                </TermsListItem>
                                <TermsListItem>
                                    • This indemnification obligation will survive the closing or
                                    deactivation of any account you have opened on our website.
                                </TermsListItem>
                            </List>
                        </Box>
                        <Box>
                            <TermsSubHeadings>Governing Law</TermsSubHeadings>
                            <TermsText>
                                These Terms and Conditions are ruled by and will be
                                interpreted/implemented with respect to the accepted laws of the
                                Federal Republic of Nigeria. You therefore agree that any disputes
                                arising out of or in connection therewith may be brought in the
                                Courts of the Federal Republic of Nigeria.
                            </TermsText>
                            <TermsText>
                                {' '}
                                This website may be used outside this region. We make no promises
                                however that the website complies with the laws of any country
                                outside our region of jurisdiction. Hence, if you access this
                                website from overseas, you do so at your own risk and will be
                                responsible for abiding by the laws in place at the locality where
                                you are accessing the website from.
                            </TermsText>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default main;
