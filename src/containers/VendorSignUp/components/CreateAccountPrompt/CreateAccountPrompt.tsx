// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react';

// SHARED IMPORTS
import * as pageRoutes from '../../../../shared/constants/pageRoutes';

const CreateAccountPrompt: FunctionComponent = () => (
  <Flex
    as='section'
    width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
    height='fit-content'
    paddingY='12'
    direction='column'
    boxShadow={{ base: 'none', md: 'md' }}
    transition='height 1s ease-in'
  >
    <Stack width='100%' alignItems='center' spacing='4'>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Sootds account required</Heading>
        <Text textAlign='center'>You must first create an account to be a vendor.</Text>
      </Flex>
      <NextLink href={pageRoutes.SIGNUP_PAGE}>
        <Button
          type='submit'
          backgroundColor='black'
          color='white'
          width={{ base: '80%', sm: '75%', md: '70%' }}
        >
          Sign Up Now
        </Button>
      </NextLink>
    </Stack>
  </Flex>
);

// Display Name
CreateAccountPrompt.displayName = CreateAccountPrompt.name;

export default memo(CreateAccountPrompt);
