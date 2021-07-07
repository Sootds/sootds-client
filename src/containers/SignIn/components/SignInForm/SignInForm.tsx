// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
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

// LOCAL IMPORTS
import { SignInFormType } from '../../types';
import { SignInFormSchema } from '../../schemas';

// Component
const SignInForm: FunctionComponent = () => {
  const { register, formState, handleSubmit } = useForm<SignInFormType>({
    resolver: joiResolver(SignInFormSchema)
  });

  const onSignInSubmit = useCallback<SubmitHandler<SignInFormType>>(async (data): Promise<void> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    });

    if (response.ok) {
    } else {
      console.log('ERROR: Sign up failed.');
    }
  }, []);

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onSignInSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Ready to get started?</Heading>
        <Text textAlign='center'>Sign In Now</Text>
      </Flex>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.username?.message && formState.touchedFields.username}
        >
          <FormLabel>Username</FormLabel>
          <Input id='username' type='text' {...register('username')} />
          <FormErrorMessage>{formState.errors.username?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.password?.message && formState.touchedFields.password}
        >
          <FormLabel>Password</FormLabel>
          <Input id='password' type='password' {...register('password')} />
          <FormErrorMessage>{formState.errors.password?.message}</FormErrorMessage>
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
    </Stack>
  );
};

// Display Name
SignInForm.displayName = SignInForm.name;

export default memo(SignInForm);
