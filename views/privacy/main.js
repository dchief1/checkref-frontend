import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/core';
import Container from '../../components/container';
import Link from 'next/link';

const PrivacySubHeadings = props => {
    return (
        <Heading
            mt={['2rem', '2.5rem', '3rem']}
            mb={['1rem']}
            fontWeight="bold"
            fontSize={['20px', '24px']}
            as="h3"
            {...props}
        />
    );
};

const PrivacyText = props => {
    return <Text mb={['1rem', '1.2rem']} fontSize={['16px']} {...props} />;
};

const TableData = props => {
    return (
        <Text
            p={['1rem', '1rem', '2rem 1.5rem']}
            border={['1px solid #8A8A8A', '1px solid #8A8A8A', '2px solid #8A8A8A']}
            as="td"
            fontSize={['16px']}
            {...props}
        />
    );
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
                    Privacy Policy
                </Heading>
                <Box
                    boxShadow=" 0px 0px 4px rgba(0, 0, 0, 0.25)"
                    background="brand.white"
                    p={['2rem 1rem', '2rem 1.5rem', '2rem']}
                    mb={['2rem', '3rem', '5rem']}
                >
                    <Box mx="auto" width={['100%', '100%', '90%']}>
                        <Box>
                            <PrivacySubHeadings mt="1rem">Who are we</PrivacySubHeadings>
                            <PrivacyText>
                                Checkref is a digital reference service that connects Employers
                                (Requesters), potential Candidates and their Referees to provide an
                                easy way to request and get references leveraging the power of a
                                digital platform.
                            </PrivacyText>
                            <PrivacyText>
                                Checkref.co is owned and operated by CR80VTY Media Limited,
                                registered company number RC1336377. Office address is: CR80VTY Ltd
                                , 40 Gerrard Road, Ikoyi, Lagos, Nigeria Office
                                Email: hello@checkref.co | Privacy officer: data@checkref.co
                            </PrivacyText>
                        </Box>

                        <Box>
                            <PrivacySubHeadings>About our Services</PrivacySubHeadings>
                            <PrivacyText>
                                <Text as="span" fontWeight="bold">
                                    Employers sign
                                </Text>{' '}
                                up to our service for either a free account or paid membership
                                option to be able to collect employment references through the
                                Checkref online service.
                            </PrivacyText>
                            <PrivacyText>
                                {' '}
                                <Text as="span" fontWeight="bold">
                                    Candidates
                                </Text>{' '}
                                receive an invitation to Checkref from an Employer who they have
                                agreed to provide employment references for and Checkref facilitates
                                the collection of contact details for the Candidates Referees. These
                                contact details are used to send a link to those Referees to allow
                                them to easily provide a reference for the Candidate.
                            </PrivacyText>
                            <PrivacyText>
                                <Text as="span" fontWeight="bold">
                                    Referees
                                </Text>
                                 receive an invitation to Checkref after a Candidate has entered
                                their contact details which allows the Referee to provide a
                                reference for the Candidate, which may help the candidate secure a
                                job with the prospective Employer who has requested this reference.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Candidates</PrivacySubHeadings>
                            <PrivacyText>Information we collect and what we do with it</PrivacyText>
                            <Box
                                border={[
                                    '1px solid #8A8A8A',
                                    '1px solid #8A8A8A',
                                    '2px solid #8A8A8A',
                                ]}
                                my="2.5rem"
                                as="table"
                            >
                                <Box as="thead">
                                    <Box as="tr">
                                        <Text
                                            p={['1rem', '1rem', ' 2rem']}
                                            border={[
                                                '1px solid #8A8A8A',
                                                '1px solid #8A8A8A',
                                                '2px solid #8A8A8A',
                                            ]}
                                            fontWeight="bold"
                                            fontSize={['18px', '20px', '24px']}
                                            as="th"
                                            width={['33%', '33%']}
                                        >
                                            Information
                                        </Text>
                                        <Text
                                            p={['1rem', '1rem', ' 2rem']}
                                            border={[
                                                '1px solid #8A8A8A',
                                                '1px solid #8A8A8A',
                                                '2px solid #8A8A8A',
                                            ]}
                                            fontWeight="bold"
                                            fontSize={['18px', '20px', '24px']}
                                            as="th"
                                            textAlign="left"
                                        >
                                            Use
                                        </Text>
                                    </Box>
                                </Box>
                                <Box as="tbody">
                                    <Box
                                        border={[
                                            '1px solid #8A8A8A',
                                            '1px solid #8A8A8A',
                                            '2px solid #8A8A8A',
                                        ]}
                                        as="tr"
                                    >
                                        <TableData>Your name and contact details</TableData>
                                        <TableData>
                                            Your prospective Employer provides these so we can
                                            contact you and tell you how to sign in and provide your
                                            reference information. We may also have this information
                                            if you contact us so we can reply to your enquiry. We
                                            will use your email address and mobile number to send
                                            you marketing if you opt into receiving this from us.
                                        </TableData>
                                    </Box>
                                    <Box as="tr">
                                        <TableData>
                                            Names and contact details of your Referees
                                        </TableData>
                                        <TableData>
                                            You provide these so we can send a reference request to
                                            them on behalf of your prospective Employer. We expect
                                            that you have consent from your listed Referees to
                                            provide their names and contact details to us so we can
                                            contact them on your behalf to request a reference about
                                            you which will be given to potential Employers
                                            (Requesters) who are considering hiring you. If you do
                                            not have this consent, please do not provide their
                                            details.
                                        </TableData>
                                    </Box>
                                    <Box as="tr">
                                        <TableData>ID Document and Photo Image</TableData>
                                        <TableData>
                                            If you use one of our available verification methods we
                                            may collect your photo and information relating to your
                                            identity (an ID Document) provided by you. This
                                            information will be made available to the Requester.
                                        </TableData>
                                    </Box>
                                    <Box as="tr">
                                        <TableData>ID Document and Photo Image</TableData>
                                        <TableData>
                                            Your referees provide these and we pass them on to your
                                            prospective employer and/or the recruitment agency who
                                            created the reference request in our system.
                                        </TableData>
                                    </Box>
                                </Box>
                            </Box>
                            <PrivacyText>
                                We will keep your personal information in our records for 6 years,
                                or even a shorter period if it is no longer needed by us for the
                                purpose for which it was initially collected.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Requesters</PrivacySubHeadings>
                            <PrivacyText>Information we collect and what we do with it</PrivacyText>
                            <Box
                                border={[
                                    '1px solid #8A8A8A',
                                    '1px solid #8A8A8A',
                                    '2px solid #8A8A8A',
                                ]}
                                my="2.5rem"
                                as="table"
                            >
                                <Box as="thead">
                                    <Box as="tr">
                                        <Text
                                            p=" 2rem"
                                            border={[
                                                '1px solid #8A8A8A',
                                                '1px solid #8A8A8A',
                                                '2px solid #8A8A8A',
                                            ]}
                                            fontWeight="bold"
                                            fontSize={['16px', '18px', '25px']}
                                            as="th"
                                            width={['100%', '33%']}
                                        >
                                            Information
                                        </Text>
                                        <Text
                                            p=" 2rem"
                                            border={[
                                                '1px solid #8A8A8A',
                                                '1px solid #8A8A8A',
                                                '2px solid #8A8A8A',
                                            ]}
                                            fontWeight="bold"
                                            fontSize={['16px', '18px', '25px']}
                                            as="th"
                                            textAlign="left"
                                        >
                                            Use
                                        </Text>
                                    </Box>
                                </Box>
                                <Box as="tbody">
                                    <Box
                                        border={[
                                            '1px solid #8A8A8A',
                                            '1px solid #8A8A8A',
                                            '2px solid #8A8A8A',
                                        ]}
                                        as="tr"
                                    >
                                        <TableData>
                                            Your name, contact details, job title and company
                                        </TableData>
                                        <TableData>
                                            You provide these to set up your account with our
                                            service and sign in. We may also have this information
                                            if you contact us so we can reply to your enquiry. We
                                            will use your email address and mobile telephone number
                                            to send you marketing if you opt into receiving this
                                            from us.
                                        </TableData>
                                    </Box>
                                    <Box as="tr">
                                        <TableData>
                                            Name and contact details of prospective candidates
                                        </TableData>
                                        <TableData>
                                            You provide these so we can contact the Candidate and
                                            request to collect references.
                                        </TableData>
                                    </Box>
                                    <Box as="tr">
                                        <TableData>The references you receive</TableData>
                                        <TableData>
                                            The candidate is entitled to request the reference from
                                            you. If you determine this is a valid request you can
                                            use our service to provide the reference to the
                                            Candidate via the download PDF reference option.
                                        </TableData>
                                    </Box>
                                </Box>
                            </Box>
                            <PrivacyText>
                                We will keep your personal information in our records for 6 years,
                                or even a shorter period if it is no longer needed by us for the
                                purpose for which it was initially collected.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Sharing your information</PrivacySubHeadings>
                            <PrivacyText>
                                As well as any sharing mentioned in the relevant sections above, we
                                may also share your personal information with a third party who
                                makes a valid legal request to us (such as tax authorities, law
                                enforcement agencies, immigration authorities and so on).
                            </PrivacyText>
                            <PrivacyText>
                                If we merge with another company or another company buys any of our
                                assets, we may have to share your information with that company as
                                part of the sale.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>
                                Security and transfer of your information overseas
                            </PrivacySubHeadings>
                            <PrivacyText>
                                We safeguard your personal information by making adequate security
                                arrangements to guard against unauthorised access, use, copying,
                                sharing, alteration, disposal or any such risks.{' '}
                            </PrivacyText>{' '}
                            <PrivacyText>
                                We may need to send your details to a referee or potential Employer
                                that is based overseas, and as part of offering our service we may
                                process your information in locations anywhere in the world where we
                                and/or any members of our group are located.
                            </PrivacyText>{' '}
                            <PrivacyText>
                                {' '}
                                We currently store your data in Europe and US. We make sure that
                                your information is appropriately protected wherever we store it.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Your rights</PrivacySubHeadings>
                            <PrivacyText>
                                To contact us about any of your rights, please e-mail: 
                                <Link href="maito:data@checkref.co.">
                                    <a>
                                        {' '}
                                        <Text
                                            as="span"
                                            color="#1da1f2"
                                            _hover={{textDecor: 'none'}}
                                        >
                                            data@checkref.co
                                        </Text>{' '}
                                    </a>
                                </Link>
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings> Access rights</PrivacySubHeadings>
                            <PrivacyText>
                                You can contact us at any time to request a copy of all the personal
                                information we hold about you.
                            </PrivacyText>
                            <PrivacyText>
                                In some circumstances, we may not be able to provide access to some
                                personal information, if this information is exempt from the right
                                under law. In these cases we will let you know and explain the
                                reasons and what other options you have.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Correction right</PrivacySubHeadings>
                            <PrivacyText>
                                You can request that we correct any factually inaccurate information
                                we hold about you, or add a note to indicate your view that the
                                information is incorrect. This right does not include correcting
                                opinions, such as those in a reference.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Deletion right</PrivacySubHeadings>
                            <PrivacyText>
                                In some circumstances you can ask us to delete the personal
                                information we hold about you.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Objection right</PrivacySubHeadings>
                            <PrivacyText>
                                In some circumstances you can object to us processing your personal
                                information.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Probability right</PrivacySubHeadings>
                            <PrivacyText>
                                You have the right to receive back from us all personal information
                                you have provided to us, in a commonly-used electronic format. All
                                report data we hold is currently available in an exportable format
                                of PDF files for individual requests. These files contain full
                                details of each request.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Restriction right</PrivacySubHeadings>
                            <PrivacyText>
                                In some circumstances you have the right to have the processing of
                                your personal information restricted. For example, if you dispute
                                its accuracy you can request it is not actively processed while we
                                resolve the dispute.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Complain to the ICO</PrivacySubHeadings>
                            <PrivacyText>
                                You can also complain to the Information Commissioner&apos;s Office
                                (ICO) who is responsible for making sure that organisations comply
                                with the law on handling personal information.
                                <Link href="https://ico.org.uk/global/contact-us/">
                                    <a>
                                        <Text
                                            color="#1da1f2"
                                            _hover={{textDecor: 'none'}}
                                            as="span"
                                        >
                                            (https://ico.org.uk/global/contact-us/)
                                        </Text>
                                    </a>
                                </Link>
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Data Processing</PrivacySubHeadings>
                            <PrivacyText>
                                The following section contains further information legally required
                                under the Nigeria data protection regulation in force from 2019.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>
                                Purpose of the processing and the legal basis for the processing
                            </PrivacySubHeadings>
                            <PrivacyText>
                                Data is processed for the purpose of allowing candidates to provide
                                details of their referees, so they can provide employment references
                                to the candidates future / prospective employer. The legal basis for
                                processing all the personal information of employers (Requesters),
                                candidates and referees is 2(2.2)(b): the processing is necessary
                                for the performance of a contract to which the Data Subject is party
                                or in order to take steps at the request of the Data Subject prior
                                to entering into a contract;
                            </PrivacyText>
                            <PrivacyText>
                                Essentially this means that all the processing of personal
                                information we carry out is necessary to deliver the online
                                reference tool that we provide. Therefore you will need to provide
                                all the information we ask for, as it is all required for the
                                service.
                            </PrivacyText>
                            <PrivacyText>
                                If we decide to carry out any other processing of your personal
                                data, that is not necessary to deliver the core service, such as to
                                provide value-add or optional extra services, or to send you
                                marketing information, we will tell you about it and update this
                                section of the privacy policy.
                            </PrivacyText>
                        </Box>
                        <Box>
                            <PrivacySubHeadings>Cookies</PrivacySubHeadings>
                            <PrivacyText>
                                Our website uses cookies. Some of the cookies store session data of
                                any and every user logged on to our website, to help us identify who
                                is logged on when a request is made by such user.
                            </PrivacyText>
                            <PrivacyText>
                                {' '}
                                While other cookies prevent cross-site request forgery; this ensures
                                that only forms that have originated from our website can be used to
                                POST data back.
                            </PrivacyText>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default main;
