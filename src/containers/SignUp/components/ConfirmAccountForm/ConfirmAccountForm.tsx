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
import { ConfirmAccountFormType } from '../../types';
import { ConfirmAccountFormSchema } from '../../schemas';

// Types
type PropsType = {
  onConfirmAccountFormSubmit: SubmitHandler<ConfirmAccountFormType>;
};

// Component
const ConfirmAccountForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<ConfirmAccountFormType>({
    resolver: joiResolver(ConfirmAccountFormSchema)
  });

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(props.onConfirmAccountFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Verify your account</Heading>
        <Text textAlign='center'>Check your email for a confirmation code</Text>
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
ConfirmAccountForm.displayName = ConfirmAccountForm.name;

export default memo(ConfirmAccountForm);
