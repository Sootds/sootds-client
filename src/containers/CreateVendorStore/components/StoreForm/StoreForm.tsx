// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
import {
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { StoreFormType } from '../../types';
import { StoreFormSchema } from '../../schemas';
import { VENDOR_STEPS } from '../../constants';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  setVendorStep: Dispatch<number>;
};

const StoreForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<StoreFormType>({
    resolver: joiResolver(StoreFormSchema)
  });

  const onStoreFormSubmit = useCallback<SubmitHandler<StoreFormType>>(
    async (data): Promise<void> => {
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/store`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       store_name: data.store_name,
      //       store_description: data.store_description
      //     })
      //   }
      // );

      if (true) {
        props.setVendorStep(VENDOR_STEPS.BILLING_FORM);
      } else {
        console.log('ERROR: failed.');
      }
    },
    []
  );

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onStoreFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar vendorStep={VENDOR_STEPS.STORE_FORM} />
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Store Setup</Heading>
        <Text textAlign='center'>Create your own shop and start selling on Sootds.</Text>
      </Flex>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.store_name?.message && formState.touchedFields.store_name}
        >
          <FormLabel>Store Name</FormLabel>
          <Input
            id='store_name'
            type='text'
            placeholder='Name your store'
            {...register('store_name')}
          />
          <FormErrorMessage>{formState.errors.store_name?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.store_description?.message && formState.touchedFields.store_description
          }
        >
          <FormLabel>Store Description</FormLabel>
          <Textarea placeholder='Enter a description of your store' {...register('store_description')} />
          <FormErrorMessage>{formState.errors.store_description?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Button
        type='submit'
        width={{ base: '80%', sm: '75%', md: '70%' }}
        backgroundColor='black'
        color='white'
      >
        Next
      </Button>
    </Stack>
  );
};

// Display Name
StoreForm.displayName = StoreForm.name;

export default memo(StoreForm);
