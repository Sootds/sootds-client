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

// Types
type PropsType = {
  // vendorInfo: VendorInfoType | null;
  // setVendorInfo: Dispatch<VendorInfoType | null>;
  // setStep: Dispatch<CreateVendorStoreSteps>;
};

// Component
const SetupComplete: FunctionComponent<PropsType> = (props: PropsType) => (
  <Stack width='100%' alignItems='center' spacing='4'>
    <Heading textAlign='center'>Store setup complete!</Heading>
    <Button type='submit' bg='black' color='white' width={{ base: '80%', sm: '75%', md: '70%' }}>
      View Store
    </Button>
  </Stack>
);

// Display Name
SetupComplete.displayName = SetupComplete.name;

export default memo(SetupComplete);
