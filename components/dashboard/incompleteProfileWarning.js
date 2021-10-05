import React from 'react';
import {Flex, Image, Text} from '@chakra-ui/core';
import Link from 'next/link';
import Button from '../button';

const incompleteProfileWarning = props => {
    const {show} = props;
    return (
        <Flex
            borderRadius="4px"
            p={['.5rem .7rem', '.5rem .7rem', '.7rem 1.5rem']}
            color="#FC1B17"
            background="#FCD2D1"
            justify="space-between"
            align="center"
            d={show ? 'flex' : 'none'}
            flexDir={['column', 'column', 'row']}
        >
            <Flex mr={[0, 0, '.6rem']} mb={['.7rem', '.7rem', 0]}>
                <Image mr={['1rem']} src="/icons/warning_icon.svg" />
                <Text>Complete your Company Profile to send your first reference request </Text>
            </Flex>
            <Button px={['1rem', '1.5rem']} height={['2.45rem']}>
                <Link href={'/profile/company-profile'}>
                    <a>Complete now </a>
                </Link>
            </Button>
        </Flex>
    );
};

export default incompleteProfileWarning;
