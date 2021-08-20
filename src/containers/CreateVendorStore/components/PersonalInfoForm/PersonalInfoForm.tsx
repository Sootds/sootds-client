// EXTERNAL IMPORTS
import React, {
  Dispatch,
  FunctionComponent,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
  memo
} from 'react';
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
  Button,
  propNames
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { PersonalInfoFormType, PersonalInfoType } from '../../types';
import { PersonalInfoFormSchema } from '../../schemas';
import { CreateVendorStoreSteps } from '../../enums';
import { getMonths, getDays, getYears, getCountries } from '../../utils';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  personalInfo: PersonalInfoType | null;
  setPersonalInfo: Dispatch<PersonalInfoType | null>;
  setStep: Dispatch<number>;
};

// Component
const PersonalInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const { register, watch, formState, handleSubmit, setValue } = useForm<PersonalInfoFormType>({
    resolver: joiResolver(PersonalInfoFormSchema),
    defaultValues: {
      name: props.personalInfo?.name,
      address: props.personalInfo?.address,
      city: props.personalInfo?.city,
      state: props.personalInfo?.state,
      code: props.personalInfo?.code
    }
  });
  const watchMonth = watch('month', null);

  useEffect((): void => {
    if (props.personalInfo) {
      if ('name' in props.personalInfo) {
        setValue('name', props.personalInfo.name);
      }
      if (props.personalInfo.dateOfBirth) {
        setValue('day', String(props.personalInfo.dateOfBirth.day));
        setValue('month', String(props.personalInfo.dateOfBirth.month));
        setValue('year', String(props.personalInfo.dateOfBirth.year));
      }
    }
  }, [props.personalInfo]);

  const onPersonalInfoFormSubmit = useCallback<SubmitHandler<PersonalInfoFormType>>(
    async (data): Promise<void> => {
      props.setPersonalInfo({
        name: data.name,
        dateOfBirth: {
          day: parseInt(data.day, 10),
          month: parseInt(data.month, 10),
          year: parseInt(data.year, 10)
        },
        address: data.address,
        city: data.city,
        country_id: parseInt(data.country, 10),
        state: data.state,
        code: data.code
      });
      props.setStep(CreateVendorStoreSteps.StoreInfoForm);
    },
    []
  );

  const days = useMemo((): number[] => getDays(parseInt(watchMonth) || 1), [watchMonth]);
  const months = useMemo((): {} => getMonths(), []);
  const years = useMemo((): number[] => getYears(), []);
  const countries = useMemo((): {} => getCountries(), []);

  return (
    <Stack
      as='form'
      onSubmit={handleSubmit(onPersonalInfoFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.PersonalInfoForm} />
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Personal Information</Heading>
        <Text textAlign='center'>Let's get started! Tell us about yourself.</Text>
      </Flex>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.name?.message && formState.touchedFields.name}>
            <FormLabel>Name</FormLabel>
            <Input id='name' type='text' {...register('name')} />
            <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.month?.message && formState.touchedFields.month}>
            <FormLabel>Date of Birth</FormLabel>
            <Select placeholder='Month' id='month' {...register('month')}>
              {Object.keys(months).map(
                (id): ReactNode => (
                  <option value={id}>{months[id]}</option>
                )
              )}
            </Select>
            <FormErrorMessage>{formState.errors.month?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            mt={{ base: '8', md: '8', sm: '4' }}
            isInvalid={formState.errors.day?.message && formState.touchedFields.day}
          >
            <Select placeholder='Day' {...register('day')}>
              {days.map((day: number) => (
                <option value={day}>{day}</option>
              ))}
            </Select>
            <FormErrorMessage>{formState.errors.day?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl
            mt={{ base: '8', md: '8', sm: '4' }}
            isInvalid={formState.errors.year?.message && formState.touchedFields.year}
          >
            <Select placeholder='Year' {...register('year')}>
              {years.map((year: number) => (
                <option value={year}>{year}</option>
              ))}
            </Select>
            <FormErrorMessage>{formState.errors.year?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>

      <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
        <FormControl
          isInvalid={formState.errors.address?.message && formState.touchedFields.address}
        >
          <FormLabel>Address</FormLabel>
          <Input id='address' type='text' {...register('address')} />
          <FormErrorMessage>{formState.errors.address?.message}</FormErrorMessage>
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
            <Select id='country' defaultValue={1} {...register('country')}>
              {Object.keys(countries).map((id) => (
                <option value={id}>{countries[id]}</option>
              ))}
            </Select>
            <FormErrorMessage>{formState.errors.country?.message}</FormErrorMessage>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '70%' }}>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.state?.message && formState.touchedFields.state}>
            <FormLabel>Province/State</FormLabel>
            <Input id='state' type='text' {...register('state')} />
            <FormErrorMessage>{formState.errors.state?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex='1'>
          <FormControl isInvalid={formState.errors.code?.message && formState.touchedFields.code}>
            <FormLabel>Postal/Zip Code</FormLabel>
            <Input id='code' type='text' {...register('code')} />
            <FormErrorMessage>{formState.errors.code?.message}</FormErrorMessage>
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
