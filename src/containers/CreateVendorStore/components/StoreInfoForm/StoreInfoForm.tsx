// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useEffect, useCallback, memo } from 'react';
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
import { StoreInfoFormType, StoreInfoType } from '../../types';
import { StoreInfoFormSchema } from '../../schemas';
import { CreateVendorStoreSteps } from '../../enums';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  storeInfo: StoreInfoType | null;
  setStoreInfo: Dispatch<StoreInfoType | null>;
  setStep: Dispatch<number>;
};

const StoreInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit, setValue } = useForm<StoreInfoFormType>({
    resolver: joiResolver(StoreInfoFormSchema)
  });

  useEffect((): void => {
    if (props.storeInfo) {
      if ('name' in props.storeInfo) {
        setValue('store_name', props.storeInfo.name);
      }
      if ('description' in props.storeInfo) {
        setValue('store_description', props.storeInfo.description);
      }
    }
  });

  const onBackButtonClick = useCallback((): void => {
    props.setStep(CreateVendorStoreSteps.PersonalInfoForm);
  }, []);

  const onStoreInfoFormSubmit = useCallback<SubmitHandler<StoreInfoFormType>>(
    async (data): Promise<void> => {
      props.setStoreInfo({
        name: data.store_name,
        description: data.store_description
      });
      props.setStep(CreateVendorStoreSteps.BillingInfoForm);
    },
    []
  );

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onStoreInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.StoreInfoForm} />
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
          <Textarea
            placeholder='Enter a description of your store'
            {...register('store_description')}
          />
          <FormErrorMessage>{formState.errors.store_description?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Flex width={{ base: '80%', sm: '75%', md: '70%' }} justifyContent='space-between'>
        <Button
          onClick={onBackButtonClick}
          type='button'
          width='25%'
          backgroundColor='black'
          color='white'
        >
          Back
        </Button>
        <Button type='submit' width='25%' backgroundColor='black' color='white'>
          Next
        </Button>
      </Flex>
    </Stack>
  );
};

// Display Name
StoreInfoForm.displayName = StoreInfoForm.name;

export default memo(StoreInfoForm);
