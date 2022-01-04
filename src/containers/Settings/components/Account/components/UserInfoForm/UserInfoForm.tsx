// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, Fragment, memo } from 'react';
import {
  VStack,
  HStack,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Button
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// SHARED IMPORTS
import { CountryType } from '../../../../../../shared/types';

// LOCAL IMPORTS
import { UserInfoType, UserInfoFormType } from '../../../../types';
import { UserInfoFormSchema } from '../../../../schemas';

// Types
type PropsType = {
  userInfo: UserInfoType;
  countries: Array<CountryType>;
  updateUserInfo: (updatedUserInfo: UserInfoFormType) => void;
};

// Component
const UserInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const {
    register,
    formState: { errors, touchedFields, isDirty },
    reset,
    handleSubmit
  } = useForm<UserInfoFormType>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: joiResolver(UserInfoFormSchema),
    defaultValues: {
      username: props.userInfo.username,
      email: props.userInfo.email,
      name: props.userInfo.name,
      address: {
        name: props.userInfo.address.name,
        city: props.userInfo.address.city,
        state: props.userInfo.address.state,
        code: props.userInfo.address.code,
        countryId: props.userInfo.address.countryId
      }
    }
  });

  const onCancelChanges = useCallback(() => {
    reset();
  }, [props.userInfo]);

  const onSaveChanges: SubmitHandler<UserInfoFormType> = useCallback((updatedUserInfo) => {
    props.updateUserInfo(updatedUserInfo);
  }, []);

  return (
    <VStack
      as='form'
      onSubmit={handleSubmit(onSaveChanges)}
      width='70%'
      height='fit-content'
      spacing={8}
      alignItems='flex-start'
      padding={8}
    >
      <Box width='100%' height='fit-content'>
        <FormControl isInvalid={errors.username?.message && touchedFields.username}>
          <FormLabel children='Username' />
          <Input
            type='username'
            readOnly={true}
            defaultValue={props.userInfo?.username}
            {...register('username')}
          />
        </FormControl>
      </Box>
      <Divider />
      <Box width='100%' height='fit-content'>
        <FormControl isInvalid={errors.email?.message && touchedFields.email}>
          <FormLabel children='Email' />
          <Input
            type='email'
            readOnly={true}
            defaultValue={props.userInfo?.email}
            {...register('email')}
          />
        </FormControl>
      </Box>
      <Divider />
      <Box width='100%' height='fit-content'>
        <FormControl isInvalid={errors.name?.message && touchedFields.name}>
          <FormLabel children='Name' />
          <Input type='text' defaultValue={props.userInfo?.name} {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <Divider />
      <VStack width='100%' height='fit-content' spacing={8} flexDirection='column'>
        <FormControl isInvalid={errors.address?.name?.message && touchedFields.address?.name}>
          <FormLabel children='Address' />
          <Input
            type='text'
            defaultValue={props.userInfo?.address?.name}
            {...register('address.name')}
          />
          <FormErrorMessage>{errors.address?.name?.message}</FormErrorMessage>
        </FormControl>
        <VStack width='100%' height='fit-content' spacing={8}>
          <HStack width='100%' height='fit-content' alignItems='flex-start' spacing={8}>
            <FormControl isInvalid={errors.address?.city?.message && touchedFields.address?.city}>
              <FormLabel children='City' />
              <Input
                type='text'
                defaultValue={props.userInfo?.address?.city}
                {...register('address.city')}
              />
              <FormErrorMessage>{errors.address?.city?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address?.state?.message && touchedFields.address?.state}>
              <FormLabel children='State' />
              <Input
                type='text'
                defaultValue={props.userInfo?.address?.state}
                {...register('address.state')}
              />
              <FormErrorMessage>{errors.address?.state?.message}</FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack width='100%' height='fit-content' alignItems='flex-start' spacing={8}>
            <FormControl isInvalid={errors.address?.code?.message && touchedFields.address?.code}>
              <FormLabel children='Code' />
              <Input
                type='text'
                defaultValue={props.userInfo?.address?.code}
                {...register('address.code')}
              />
              <FormErrorMessage>{errors.address?.code?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel children='Country' />
              <Select {...register('address.countryId')}>
                {props.countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </HStack>
        </VStack>
      </VStack>
      {isDirty && (
        <Fragment>
          <Divider />
          <HStack width='100%' height='fit-content' spacing={8} justifyContent='flex-end'>
            <Button variant='outline' color='red' borderColor='red' onClick={onCancelChanges}>
              Cancel
            </Button>
            <Button backgroundColor='green' color='white' type='submit'>
              Save Changes
            </Button>
          </HStack>
        </Fragment>
      )}
    </VStack>
  );
};

// Display Name
UserInfoForm.displayName = UserInfoForm.name;

export default memo(UserInfoForm);
