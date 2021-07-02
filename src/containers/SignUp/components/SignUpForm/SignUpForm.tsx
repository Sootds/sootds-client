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
import { UserType, SignUpFormType } from '../../types';
import { SignUpFormSchema } from '../../schemas';
import { SIGN_UP_STEPS } from '../../constants';

// Types
type PropsType = {
  setUser: Dispatch<UserType | null>
  setSignUpStep: Dispatch<number>;
};

// Component
const SignUpForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: joiResolver(SignUpFormSchema)
  });

  const onSignUpFormSubmit = useCallback<SubmitHandler<SignUpFormType>>(
    async (data): Promise<void> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          name: data.name,
          email: data.email,
          password: data.password
        })
      });

      if (response.ok) {
        props.setUser({
          username: data.username,
          name: data.name
        });
        props.setSignUpStep(SIGN_UP_STEPS.VERIFY_ACCOUNT_FORM);
      } else {
        console.log('ERROR: Sign up failed.');
      }
    },
    []
  );

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onSignUpFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Ready to get started?</Heading>
        <Text textAlign='center'>Sign Up Now</Text>
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
          isInvalid={formState.errors.name?.message && formState.touchedFields.name}
        >
          <FormLabel>Name</FormLabel>
          <Input id='name' type='text' {...register('name')} />
          <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl isInvalid={formState.errors.email?.message && formState.touchedFields.email}>
          <FormLabel>Email</FormLabel>
          <Input id='email' type='email' {...register('email')} />
          <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
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
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.confirm_password?.message && formState.touchedFields.confirm_password
          }
        >
          <FormLabel>Confirm Password</FormLabel>
          <Input id='confirm_password' type='password' {...register('confirm_password')} />
          <FormErrorMessage>{formState.errors.confirm_password?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Button
        type='submit'
        width={{ base: '80%', sm: '75%', md: '70%' }}
        backgroundColor='black'
        color='white'
      >
        Sign Up
      </Button>
      <NextLink href='/signin'>
        <Link>Already have an account?</Link>
      </NextLink>
    </Stack>
  );
};

// Display Name
SignUpForm.displayName = SignUpForm.name;

export default memo(SignUpForm);
