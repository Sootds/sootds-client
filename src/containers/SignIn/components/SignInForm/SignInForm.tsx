// EXTERNAL IMPORTS
import React, { FunctionComponent, useContext, useCallback, memo } from 'react';
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
  Button
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// SHARED IMPORTS
import { AuthContext } from '../../../../shared/context';

// LOCAL IMPORTS
import { SignInFormType } from '../../types';
import { SignInFormSchema } from '../../schemas';

// Component
const SignInForm: FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  const signInForm = useForm<SignInFormType>({ resolver: joiResolver(SignInFormSchema) });

  const onSignInSubmit = useCallback<SubmitHandler<SignInFormType>>(async (data): Promise<void> => {
    authContext.signIn(data.username, data.password);
  }, []);

  return (
    <Stack
      as='form'
      onSubmit={signInForm.handleSubmit(onSignInSubmit)}
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
          isInvalid={
            signInForm.formState.errors.username?.message &&
            signInForm.formState.touchedFields.username
          }
        >
          <FormLabel>Username</FormLabel>
          <Input id='username' type='text' {...signInForm.register('username')} />
          <FormErrorMessage>{signInForm.formState.errors.username?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            signInForm.formState.errors.password?.message &&
            signInForm.formState.touchedFields.password
          }
        >
          <FormLabel>Password</FormLabel>
          <Input id='password' type='password' {...signInForm.register('password')} />
          <FormErrorMessage>{signInForm.formState.errors.password?.message}</FormErrorMessage>
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
