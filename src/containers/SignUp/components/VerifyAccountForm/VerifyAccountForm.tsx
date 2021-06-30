// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
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
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { UserType, VerifyAccountFormType } from '../../types';
import { VerifyAccountFormSchema } from '../../schemas';
import { SIGN_UP_STEPS } from '../../constants';

// Types
type PropsType = {
  user: UserType;
  setUser: Dispatch<UserType | null>;
  setSignUpStep: Dispatch<number>;
};

// Component
const VerifyAccountForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<VerifyAccountFormType>({
    resolver: joiResolver(VerifyAccountFormSchema)
  });

  const onVerifyAccountFormSubmit = useCallback<SubmitHandler<VerifyAccountFormType>>(
    async (data): Promise<void> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/verify-account`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_name: props.user.userName,
            confirmation_code: data.confirmation_code
          })
        }
      );

      if (response.ok) {
        props.setSignUpStep(SIGN_UP_STEPS.SIGN_UP_COMPLETE);
      } else {
        console.log('ERROR: Account confirmation failed.');
      }
    },
    [props.user]
  );

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
        <Text textAlign='center'>Check your email for a confirmation code.</Text>
      </Flex>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.confirmation_code?.message && formState.touchedFields.confirmation_code
          }
        >
          <FormLabel>Confirmation Code</FormLabel>
          <Input id='confirmation_code' type='text' {...register('confirmation_code')} />
          <FormErrorMessage>{formState.errors.confirmation_code?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Button
        type='submit'
        width={{ base: '80%', sm: '75%', md: '70%' }}
        backgroundColor='black'
        color='white'
      >
        Verify
      </Button>
    </Stack>
  );
};

// Display Name
VerifyAccountForm.displayName = VerifyAccountForm.name;

export default memo(VerifyAccountForm);
