// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, useCallback, memo } from 'react';
import NextLink from 'next/link';
import { Flex, Fade } from '@chakra-ui/react';

// LOCAL IMPORTS
import { VendorInfoType, StoreInfoType, BillingInfoType } from './types';
import { CreateVendorStoreSteps } from './enums';
import { VendorInfoForm, StoreInfoForm, BillingInfoForm, SetupComplete } from './components';

// Types
type PropsType = {
  username?: string;
  accessToken?: string;
};

const CreateVendorStore: FunctionComponent<PropsType> = (props: PropsType) => {
  const [step, setStep] = useState<CreateVendorStoreSteps>(CreateVendorStoreSteps.VendorInfoForm);
  const [vendorInfo, setVendorInfo] = useState<VendorInfoType | null>(null);
  const [storeInfo, setStoreInfo] = useState<StoreInfoType | null>(null);
  const [billingInfo, setBillingInfo] = useState<BillingInfoType | null>(null);

  const goToPreviousStep = useCallback((): void => {
    setStep((step) => step - 1);
  }, []);

  return (
    <Flex
      as='section'
      width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
      height='fit-content'
      paddingY='12'
      direction='column'
      boxShadow={{ base: 'none', md: 'md' }}
      transition='height 1s ease-in'
    >
      {step === CreateVendorStoreSteps.VendorInfoForm && (
        <Fade in={true}>
          <VendorInfoForm vendorInfo={vendorInfo} setVendorInfo={setVendorInfo} setStep={setStep} />
        </Fade>
      )}
      {step === CreateVendorStoreSteps.StoreInfoForm && (
        <Fade in={true}>
          <StoreInfoForm
            storeInfo={storeInfo}
            setStoreInfo={setStoreInfo}
            goToPreviousStep={goToPreviousStep}
            setStep={setStep}
          />
        </Fade>
      )}
      {step === CreateVendorStoreSteps.BillingInfoForm && (
        <Fade in={true}>
          <BillingInfoForm
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
            goToPreviousStep={goToPreviousStep}
            setStep={setStep}
          />
        </Fade>
      )}
      {step === CreateVendorStoreSteps.SetupComplete && (
        <Fade in={true}>
          <SetupComplete />
        </Fade>
      )}
    </Flex>
  );
};

// Display Name
CreateVendorStore.displayName = CreateVendorStore.name;

export default memo(CreateVendorStore);
