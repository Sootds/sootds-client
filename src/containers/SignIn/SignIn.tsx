import React, { FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link
} from '@chakra-ui/react';
import { navbarHeight } from '../../shared/constants';

// Component
const SignIn: FunctionComponent = () => {
  return (
    <Flex height={`calc(100vh - ${navbarHeight})`} justifyContent='center' alignItems='center'>
      <Stack
        width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
        height='fit-content'
        paddingY='12'
        direction='column'
        alignItems='center'
        boxShadow={{ base: 'none', md: 'md' }}
        spacing='4'
      >
        <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
          <Heading textAlign='center'>Already have an account?</Heading>
          <Text textAlign='center'>Sign In Now</Text>
        </Flex>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='john.doe@email.com' />
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='john.doe@email.com' />
          </FormControl>
        </Box>
        <Button width={{ base: '80%', sm: '75%', md: '70%' }} backgroundColor='black' color='white'>
          Sign In
        </Button>
        <NextLink href='/forgot-password'>
          <Link>Forgot Password</Link>
        </NextLink>
      </Stack>
    </Flex>
  );
};

// Display Names
SignIn.displayName = SignIn.name;

export default memo(SignIn);
