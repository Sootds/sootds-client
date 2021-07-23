// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useState, useCallback, memo } from 'react';
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
  Link,
  Spinner,
  Skeleton
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { UserType, SignUpFormType } from '../../types';
import { SignUpFormSchema } from '../../schemas';
import { SignUpSteps } from '../../enums';

// Types
type PropsType = {
  setUser: Dispatch<UserType | null>;
  setStep: Dispatch<SignUpSteps>;
};

// Component
const SignUpForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: joiResolver(SignUpFormSchema)
  });

  const onSignUpFormSubmit = useCallback<SubmitHandler<SignUpFormType>>(
    async (data): Promise<void> => {
      setIsLoading(true);

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
        props.setStep(SignUpSteps.VerifyAccountForm);
      } else {
        console.log('ERROR: Sign up failed.');
      }

      setIsLoading(false);
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
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Username</FormLabel>
            <Input id='username' type='text' {...register('username')} />
            <FormErrorMessage>{formState.errors.username?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl isInvalid={formState.errors.name?.message && formState.touchedFields.name}>
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Name</FormLabel>
            <Input id='name' type='text' {...register('name')} />
            <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl isInvalid={formState.errors.email?.message && formState.touchedFields.email}>
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Email</FormLabel>
            <Input id='email' type='email' {...register('email')} />
            <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.password?.message && formState.touchedFields.password}
        >
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Password</FormLabel>
            <Input id='password' type='password' {...register('password')} />
            <FormErrorMessage>{formState.errors.password?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.confirm_password?.message && formState.touchedFields.confirm_password
          }
        >
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Confirm Password</FormLabel>
            <Input id='confirm_password' type='password' {...register('confirm_password')} />
            <FormErrorMessage>{formState.errors.confirm_password?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      {isLoading ? (
        <Button
          type='button'
          width={{ base: '80%', sm: '75%', md: '70%' }}
          backgroundColor='black'
          color='white'
        >
          <Spinner color='white' />
        </Button>
      ) : (
        <Button
          type='submit'
          width={{ base: '80%', sm: '75%', md: '70%' }}
          backgroundColor='black'
          color='white'
        >
          Sign Up
        </Button>
      )}

      <NextLink href='/signin'>
        <Link>Already have an account?</Link>
      </NextLink>
    </Stack>
  );
};

// Display Name
SignUpForm.displayName = SignUpForm.name;

export default memo(SignUpForm);
