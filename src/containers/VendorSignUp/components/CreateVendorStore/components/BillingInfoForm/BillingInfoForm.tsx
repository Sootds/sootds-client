// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useMemo, useCallback, memo } from 'react';
import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Button
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { BillingInfoType, BillingInfoFormType } from '../../types';
import { CreateVendorStoreSteps } from '../../enums';
import { BillingInfoFormSchema } from '../../schemas';
import { getMonths, getYears } from '../../utils';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  billingInfo: BillingInfoType | null;
  setBillingInfo: Dispatch<BillingInfoType | null>;
  goToPreviousStep: () => void;
  setStep: Dispatch<CreateVendorStoreSteps>;
};

// Component
const VendorInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<BillingInfoFormType>({
    resolver: joiResolver(BillingInfoFormSchema),
    defaultValues: {
      cardholderName: props.billingInfo?.cardholderName,
      cardNumber: props.billingInfo?.cardNumber,
      securityCode: props.billingInfo?.securityCode,
      expirationDate: {
        month: props.billingInfo?.expirationDate?.month,
        year: props.billingInfo?.expirationDate?.year
      }
    }
  });

  console.log(formState.errors);

  const months = useMemo(() => getMonths(), []);
  const years = useMemo(() => getYears(), []);

  const onBillingInfoFormSubmit = useCallback<SubmitHandler<BillingInfoType>>((data): void => {
    props.setBillingInfo({
      cardholderName: data.cardholderName,
      cardNumber: data.cardNumber,
      securityCode: data.securityCode,
      expirationDate: {
        month: data.expirationDate.month,
        year: data.expirationDate.year
      }
    });
    props.setStep(CreateVendorStoreSteps.SetupComplete);
  }, []);

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onBillingInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.BillingInfoForm} />
      <Heading textAlign='center'>Billing Info</Heading>
      <Stack direction='column' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={
            formState.errors.cardholderName?.message && formState.touchedFields.cardholderName
          }
        >
          <FormLabel>Cardholder Name</FormLabel>
          <Input type='text' placeholder='Name on card' {...register('cardholderName')} />
          <FormErrorMessage>{formState.errors.cardholderName?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack direction='row' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          width='60%'
          isInvalid={formState.errors.cardNumber?.message && formState.touchedFields.cardNumber}
        >
          <FormLabel>Card Number</FormLabel>
          <Input type='text' {...register('cardNumber')} />
          <FormErrorMessage>{formState.errors.cardNumber?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          width='40%'
          isInvalid={formState.errors.securityCode?.message && formState.touchedFields.securityCode}
        >
          <FormLabel>Security Code</FormLabel>
          <Input type='text' {...register('securityCode')} />
          <FormErrorMessage>{formState.errors.securityCode?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack direction='row' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          width='60%'
          isInvalid={
            formState.errors.expirationDate?.month?.message &&
            formState.touchedFields.expirationDate?.month
          }
        >
          <FormLabel>Expiration Month</FormLabel>
          <Select placeholder='Month' {...register('expirationDate.month')}>
            {Object.keys(months).map((month) => (
              <option key={month} value={month} children={months[month]} />
            ))}
          </Select>
          <FormErrorMessage>{formState.errors.expirationDate?.month?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          width='40%'
          isInvalid={
            formState.errors.expirationDate?.year?.message &&
            formState.touchedFields.expirationDate?.year
          }
        >
          <FormLabel>Year</FormLabel>
          <Select placeholder='Year' {...register('expirationDate.year')}>
            {years.map((year) => (
              <option key={year} value={year} children={year} />
            ))}
          </Select>
          <FormErrorMessage>{formState.errors.expirationDate?.year?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack direction='row' width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Button width='50%' bg='black' color='white' onClick={props.goToPreviousStep}>
          Back
        </Button>
        <Button type='submit' width='50%' bg='black' color='white'>
          Create Store
        </Button>
      </Stack>
    </Stack>
  );
};

// Display Name
VendorInfoForm.displayName = VendorInfoForm.name;

export default memo(VendorInfoForm);
