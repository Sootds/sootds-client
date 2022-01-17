// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
import {
  Stack,
  Heading,
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
import { StoreInfoType, StoreInfoFormType } from '../../types';
import { CreateVendorStoreSteps } from '../../enums';
import { StoreInfoFormSchema } from '../../schemas';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  storeInfo: StoreInfoType | null;
  setStoreInfo: Dispatch<StoreInfoType | null>;
  goToPreviousStep: () => void;
  setStep: Dispatch<CreateVendorStoreSteps>;
};

// Component
const StoreInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<StoreInfoFormType>({
    resolver: joiResolver(StoreInfoFormSchema),
    defaultValues: {
      name: props.storeInfo?.name,
      urlName: props.storeInfo?.urlName,
      description: props.storeInfo?.description
    }
  });

  const onStoreInfoFormSubmit = useCallback<SubmitHandler<StoreInfoType>>((data): void => {
    props.setStoreInfo({
      name: data.name,
      urlName: data.urlName,
      description: data.description
    });
    props.setStep(CreateVendorStoreSteps.BillingInfoForm);
  }, []);

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onStoreInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.StoreInfoForm} />
      <Heading textAlign='center'>Store Info</Heading>
      <Stack direction='column' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl isInvalid={formState.errors.name?.message && formState.touchedFields.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            placeholder='ex. Kermit Green Shop'
            {...register('name')}
          />
          <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formState.errors.urlName?.message && formState.touchedFields.urlName}
        >
          <FormLabel>URL Name</FormLabel>
          <Input
            type='text'
            placeholder='Use a custom URL for your store (optional)'
            {...register('urlName')}
          />
          <FormErrorMessage>{formState.errors.urlName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formState.errors.description?.message && formState.touchedFields.description}
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Tell us something about your store (optional)'
            {...register('description')}
          />
          <FormErrorMessage>{formState.errors.description?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack direction='row' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Button width='50%' bg='black' color='white' onClick={props.goToPreviousStep}>
          Back
        </Button>
        <Button type='submit' width='50%' bg='black' color='white'>
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

// Display Name
StoreInfoForm.displayName = StoreInfoForm.name;

export default memo(StoreInfoForm);
