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
  Input,
  Select,
  FormErrorMessage,
  Button
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { PersonalInfoFormType } from '../../types';
import { PersonalInfoFormSchema } from '../../schemas';
import { VENDOR_STEPS } from '../../constants';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  setVendorStep: Dispatch<number>;
};

// Component
const PersonalInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, formState, handleSubmit } = useForm<PersonalInfoFormType>({
    resolver: joiResolver(PersonalInfoFormSchema)
  });

  const onPersonalInfoFormSubmit = useCallback<SubmitHandler<PersonalInfoFormType>>(
    async (data): Promise<void> => {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/personal-info`, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     first_name: data.first_name,
      //     last_name: data.last_name,
      //     month: data.month,
      //     date: data.date,
      //     year: data.year,
      //     address1: data.address1,
      //     address2: data.address2,
      //     city: data.city,
      //     country: data.country,
      //     postal_code: data.postal_code
      //   })
      // });

      if (true) {
        props.setVendorStep(VENDOR_STEPS.VERIFY_PHONE_FORM);
      } else {
        console.log('ERROR: failed.');
      }
    },
    []
  );

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onPersonalInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar vendorStep={VENDOR_STEPS.PERSONAL_INFO_FORM} />
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Personal Information</Heading>
        <Text textAlign='center'>Let's get started! Tell us about yourself.</Text>
      </Flex>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl
            isInvalid={formState.errors.first_name?.message && formState.touchedFields.first_name}
          >
            <FormLabel>First Name</FormLabel>
            <Input id='first_name' type='text' {...register('first_name')} />
            <FormErrorMessage>{formState.errors.first_name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            isInvalid={formState.errors.last_name?.message && formState.touchedFields.last_name}
          >
            <FormLabel>Last Name</FormLabel>
            <Input id='last_name' type='text' {...register('last_name')} />
            <FormErrorMessage>{formState.errors.last_name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.month?.message && formState.touchedFields.month}>
            <FormLabel>Date of Birth</FormLabel>
            <Select placeholder='Month' id='month' {...register('month')}>
              <option>October</option>
            </Select>
            <FormErrorMessage>{formState.errors.month?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            mt={{ base: '8', md: '8', sm: '4'}}
            isInvalid={formState.errors.date?.message && formState.touchedFields.date}
          >
            <Select placeholder='Date' {...register('date')}>
              <option>1</option>
            </Select>
            <FormErrorMessage>{formState.errors.date?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            mt={{ base: '8', md: '8', sm: '4'}}
            isInvalid={formState.errors.year?.message && formState.touchedFields.year}
          >
            <Select placeholder='Year' {...register('year')}>
              <option>1998</option>
            </Select>
            <FormErrorMessage>{formState.errors.year?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>

      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.address1?.message && formState.touchedFields.address1}
        >
          <FormLabel>Address1</FormLabel>
          <Input id='address1' type='text' {...register('address1')} />
          <FormErrorMessage>{formState.errors.address1?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.address2?.message && formState.touchedFields.address2}
        >
          <FormLabel>Address2</FormLabel>
          <Input id='address2' type='text' {...register('address2')} />
          <FormErrorMessage>{formState.errors.address2?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.city?.message && formState.touchedFields.city}>
            <FormLabel>City</FormLabel>
            <Input id='city' type='text' {...register('city')} />
            <FormErrorMessage>{formState.errors.city?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            isInvalid={formState.errors.country?.message && formState.touchedFields.country}
          >
            <FormLabel>Country</FormLabel>
            <Select id='country' defaultValue='Canada' {...register('country')}>
              <option>Canada</option>
            </Select>
            <FormErrorMessage>{formState.errors.country?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl
            isInvalid={formState.errors.province?.message && formState.touchedFields.province}
          >
            <FormLabel>Province</FormLabel>
            <Input id='province' type='text' {...register('province')} />
            <FormErrorMessage>{formState.errors.province?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            isInvalid={formState.errors.postal_code?.message && formState.touchedFields.postal_code}
          >
            <FormLabel>Postal/Zip Code</FormLabel>
            <Input id='postal_code' type='text' {...register('postal_code')} />
            <FormErrorMessage>{formState.errors.postal_code?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>
      <Button type='submit' bg='black' color='white' width={{ base: '80%', sm: '75%', md: '70%' }}>
        Next
      </Button>
    </Stack>
  );
};

// Display Name
PersonalInfoForm.displayName = PersonalInfoForm.name;

export default memo(PersonalInfoForm);
