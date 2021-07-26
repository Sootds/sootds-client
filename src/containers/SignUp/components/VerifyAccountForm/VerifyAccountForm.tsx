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
import { UserType, VerifyAccountFormType } from '../../types';
import { VerifyAccountFormSchema } from '../../schemas';
import { SignUpSteps } from '../../enums';

// Types
type PropsType = {
  user: UserType;
  setUser: Dispatch<UserType | null>;
  setStep: Dispatch<SignUpSteps>;
};

// Component
const VerifyAccountForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, formState, handleSubmit } = useForm<VerifyAccountFormType>({
    resolver: joiResolver(VerifyAccountFormSchema)
  });

  const onVerifyAccountFormSubmit = useCallback<SubmitHandler<VerifyAccountFormType>>(
    async (data): Promise<void> => {
      setIsLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/verify-account`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: props.user.username,
            verification_code: data.verification_code
          })
        }
      );

      if (response.ok) {
        props.setStep(SignUpSteps.SignUpComplete);
      } else {
        console.log('ERROR: Account verification failed.');
      }

      setIsLoading(false);
    },
    [props.user]
  );

  // TO DO: Add components for 410 and 400 status codes.
  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onVerifyAccountFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Verify your account</Heading>
        <Text textAlign='center'>Check your email for a verification code.</Text>
      </Flex>
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
          Verify
        </Button>
      )}
    </Stack>
  );
};

// Display Name
VerifyAccountForm.displayName = VerifyAccountForm.name;

export default memo(VerifyAccountForm);
