// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useState, useCallback, memo } from 'react';
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
  Spinner,
  Skeleton
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { NewPasswordFormType } from '../../types';
import { NewPasswordFormSchema } from '../../schemas';
import { ForgotPasswordSteps } from '../../enums';
import { NewPasswordFetcher } from '../../fetchers';

// Types
type PropsType = {
  username: string | null;
  setStep: Dispatch<ForgotPasswordSteps>;
};

// Component
const NewPasswordForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, formState, handleSubmit } = useForm<NewPasswordFormType>({
    resolver: joiResolver(NewPasswordFormSchema)
  });

  const onNewPasswordFormSubmit = useCallback<SubmitHandler<NewPasswordFormType>>(
    async (data): Promise<void> => {
      setIsLoading(true);

      const response = await NewPasswordFetcher(
        props.username,
        data.verification_code,
        data.new_password
      );

      if (response.ok) {
        props.setStep(ForgotPasswordSteps.ForgotPasswordComplete);
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
      onSubmit={handleSubmit(onNewPasswordFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Set your new password</Heading>
        <Text textAlign='center'>Check your email for a verification code</Text>
      </Flex>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.new_password?.message && formState.touchedFields.new_password}
        >
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>New Password</FormLabel>
            <Input id='new_password' type='password' {...register('new_password')} />
            <FormErrorMessage>{formState.errors.new_password?.message}</FormErrorMessage>
          </Skeleton>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.verification_code?.message && formState.touchedFields.verification_code
          }
        >
          <Skeleton isLoaded={!isLoading}>
            <FormLabel>Verification Code</FormLabel>
            <Input id='verification_code' type='text' {...register('verification_code')} />
            <FormErrorMessage>{formState.errors.verification_code?.message}</FormErrorMessage>
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
          Set New Password
        </Button>
      )}
    </Stack>
  );
};

// Display Name
NewPasswordForm.displayName = NewPasswordForm.name;

export default memo(NewPasswordForm);
