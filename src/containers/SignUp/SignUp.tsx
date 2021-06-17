import React, { FunctionComponent, useState, memo } from 'react';
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
const SignUp: FunctionComponent = () => {
  const signUpUser = async (): Promise<void> => {
    const rawResponse = await fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: 'hello',
        lastName: 'hi',
        email: 'hello.hi@email.com'
      })
    });
    const json = await rawResponse.json();
    console.log(json);
  };

  return (
    <Flex
      height='fit-content'
      minHeight={`calc(100vh - ${navbarHeight})`}
      justifyContent='center'
      alignItems='center'
    >
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
          <Heading textAlign='center'>Ready to get started?</Heading>
          <Text textAlign='center'>Sign Up Now</Text>
        </Flex>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' />
          </FormControl>
        </Box>
        <Button
          onClick={signUpUser}
          width={{ base: '80%', sm: '75%', md: '70%' }}
          backgroundColor='black'
          color='white'
        >
          Sign In
        </Button>
        <NextLink href='/signin'>
          <Link>Already have an account?</Link>
        </NextLink>
      </Stack>
    </Flex>
  );
};

// Display Names
SignUp.displayName = SignUp.name;

export default memo(SignUp);
