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
import { ForgotPasswordFormType } from '../../types';
import { ForgotPasswordFormSchema } from '../../schemas';
import { ForgotPasswordSteps } from '../../enums';
import { ForgotPasswordFetcher } from '../../fetchers';

// Types
type PropsType = {
  setUsername: Dispatch<string | null>;
  setStep: Dispatch<ForgotPasswordSteps>;
};

// Component
const ForgotPasswordForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, formState, handleSubmit } = useForm<ForgotPasswordFormType>({
    resolver: joiResolver(ForgotPasswordFormSchema)
  });

  const onForgotPasswordFormSubmit = useCallback<SubmitHandler<ForgotPasswordFormType>>(
    async (data): Promise<void> => {
      setIsLoading(true);

      const response = await ForgotPasswordFetcher(data.username);

      if (response.ok) {
        props.setUsername(data.username);
        props.setStep(ForgotPasswordSteps.NewPasswordForm);
      } else {
        console.log('ERROR: Forgot password failed.');
      }

      setIsLoading(false);
    },
    []
  );

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onForgotPasswordFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Forgot your password?</Heading>
        <Text textAlign='center'>Let's change that!</Text>
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
          Forgot Password
        </Button>
      )}

      <Skeleton isLoaded={!isLoading}>
        <NextLink href='/signin'>
          <Link>Just remembered?</Link>
        </NextLink>
      </Skeleton>
    </Stack>
  );
};

// Display Name
ForgotPasswordForm.displayName = ForgotPasswordForm.name;

export default memo(ForgotPasswordForm);
