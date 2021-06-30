// EXTERNAL IMPORTS
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
  FormErrorMessage,
  Input,
  Button,
  Link
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { SignUpFormType } from '../../types';
import { SignUpFormSchema } from '../../schemas';

// Types
type PropsType = {
  onSignUpFormSubmit: SubmitHandler<SignUpFormType>;
};

// Component
const SignUpForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: joiResolver(SignUpFormSchema)
  });

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(props.onSignUpFormSubmit)}
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
          isInvalid={formState.errors.user_name?.message && formState.touchedFields.user_name}
        >
          <FormLabel>Username</FormLabel>
          <Input id='user_name' type='text' {...register('user_name')} />
          <FormErrorMessage>{formState.errors.user_name?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.first_name?.message && formState.touchedFields.first_name}
        >
          <FormLabel>First Name</FormLabel>
          <Input id='first_name' type='text' {...register('first_name')} />
          <FormErrorMessage>{formState.errors.first_name?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.last_name?.message && formState.touchedFields.last_name}
        >
          <FormLabel>Last Name</FormLabel>
          <Input id='last_name' type='text' {...register('last_name')} />
          <FormErrorMessage>{formState.errors.last_name?.message}</FormErrorMessage>
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
