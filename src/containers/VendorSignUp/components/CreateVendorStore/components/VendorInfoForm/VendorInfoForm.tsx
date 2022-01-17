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
import { VendorInfoType, VendorInfoFormType } from '../../types';
import { CreateVendorStoreSteps } from '../../enums';
import { VendorInfoFormSchema } from '../../schemas';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  vendorInfo: VendorInfoType | null;
  setVendorInfo: Dispatch<VendorInfoType | null>;
  setStep: Dispatch<CreateVendorStoreSteps>;
};

// Component
const VendorInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<VendorInfoFormType>({
    resolver: joiResolver(VendorInfoFormSchema),
    defaultValues: {
      name: props.vendorInfo?.name,
      description: props.vendorInfo?.description
    }
  });

  const onVendorInfoFormSubmit = useCallback<SubmitHandler<VendorInfoType>>((data): void => {
    props.setVendorInfo({ name: data.name, description: data.description });
    props.setStep(CreateVendorStoreSteps.StoreInfoForm);
  }, []);

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onVendorInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.VendorInfoForm} />
      <Heading textAlign='center'>Vendor Info</Heading>
      <Stack direction='column' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl isInvalid={formState.errors.name?.message && formState.touchedFields.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            placeholder='Use a custom vendor name or your own'
            {...register('name')}
          />
          <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formState.errors.description?.message && formState.touchedFields.description}
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='What makes you a unique vendor? (optional)'
            {...register('description')}
          />
          <FormErrorMessage>{formState.errors.description?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Button type='submit' bg='black' color='white' width={{ base: '80%', sm: '75%', md: '70%' }}>
        Next
      </Button>
    </Stack>
  );
};

// Display Name
VendorInfoForm.displayName = VendorInfoForm.name;

export default memo(VendorInfoForm);
