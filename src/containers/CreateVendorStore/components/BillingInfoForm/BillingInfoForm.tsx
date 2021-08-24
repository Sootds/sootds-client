// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react';

// LOCAL IMPORTS
import { CreateVendorStoreSteps } from '../../enums';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  setStep: Dispatch<number>;
};

const BillingInfoForm: FunctionComponent<PropsType> = (props: PropsType) => {
  const onBackButtonClick = useCallback((): void => {
    props.setStep(CreateVendorStoreSteps.StoreInfoForm);
  }, []);

  const onNextButtonClick = useCallback((): void => {
    props.setStep(CreateVendorStoreSteps.CreateVendorStoreComplete);
  }, []);

  return (
    <Stack width='100%' alignItems='center' spacing='4'>
      <ProgressBar step={CreateVendorStoreSteps.BillingInfoForm} />
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Billing Info</Heading>
        <Text textAlign='center'>... to do ...</Text>
      </Flex>
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
        <Button
          onClick={onNextButtonClick}
          type='submit'
          width='25%'
          backgroundColor='black'
          color='white'
        >
          Next
        </Button>
      </Flex>
    </Stack>
  );
};

// Display Name
BillingInfoForm.displayName = BillingInfoForm.name;

export default memo(BillingInfoForm);
