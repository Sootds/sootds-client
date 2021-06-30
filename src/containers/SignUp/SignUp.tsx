// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Link
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignUpFormType } from './types';
import { SignUpFormSchema } from './schemas';

// Component
const SignUp: FunctionComponent = () => {
  const { register, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: joiResolver(SignUpFormSchema)
  });

  const onFormSubmit = useCallback<SubmitHandler<SignUpFormType>>(async (data): Promise<void> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: data.user_name,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password
      })
    });
    const json = await response.json();
    console.log(json);
  }, []);

  return (
    <Flex
      height='fit-content'
      minHeight={`calc(100vh - ${navbarHeight})`}
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        as='form'
        onSubmit={handleSubmit(onFormSubmit)}
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
          <FormControl
            isInvalid={formState.errors.user_name?.message && formState.touchedFields.user_name}
          >
            <FormLabel>Username</FormLabel>
            <Input type='text' {...register('user_name')} />
            <FormErrorMessage>{formState.errors.user_name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl
            isInvalid={formState.errors.first_name?.message && formState.touchedFields.first_name}
          >
            <FormLabel>First Name</FormLabel>
            <Input type='text' {...register('first_name')} />
            <FormErrorMessage>{formState.errors.first_name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl
            isInvalid={formState.errors.last_name?.message && formState.touchedFields.last_name}
          >
            <FormLabel>Last Name</FormLabel>
            <Input type='text' {...register('last_name')} />
            <FormErrorMessage>{formState.errors.last_name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl isInvalid={formState.errors.email?.message && formState.touchedFields.email}>
            <FormLabel>Email</FormLabel>
            <Input type='email' {...register('email')} />
            <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl
            isInvalid={formState.errors.password?.message && formState.touchedFields.password}
          >
            <FormLabel>Password</FormLabel>
            <Input type='password' {...register('password')} />
            <FormErrorMessage>{formState.errors.password?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
          <FormControl
            isInvalid={
              formState.errors.confirm_password?.message && formState.touchedFields.confirm_password
            }
          >
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' {...register('confirm_password')} />
            <FormErrorMessage>{formState.errors.confirm_password?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Button
          type='submit'
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
