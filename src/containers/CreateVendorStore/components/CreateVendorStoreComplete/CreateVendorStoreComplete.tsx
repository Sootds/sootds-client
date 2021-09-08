// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react';

// LOCAL IMPORTS
import { PersonalInfoType, StoreInfoType } from '../../types';
import { CreateVendorStoreSteps } from '../../enums';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  personalInfo: PersonalInfoType | null;
  storeInfo: StoreInfoType | null;
};

const CreateVendorStoreComplete: FunctionComponent<PropsType> = (props: PropsType) => (
  <Stack width='100%' alignItems='center' spacing='4'>
    <ProgressBar step={CreateVendorStoreSteps.CreateVendorStoreComplete} />
    <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
      <Heading textAlign='center'>Congrats!</Heading>
      <Text textAlign='center'>You've created your own store!</Text>
    </Flex>
    <Button
      type='submit'
      backgroundColor='black'
      color='white'
      width={{ base: '80%', sm: '75%', md: '70%' }}
    >
      Go To Your Store
    </Button>
  </Stack>
);

// Display Name
CreateVendorStoreComplete.displayName = CreateVendorStoreComplete.name;

export default memo(CreateVendorStoreComplete);
