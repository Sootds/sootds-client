// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useState } from 'react';
import { Button, Flex, Stack, Progress, Circle, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { PersonalInfoForm, VerifyPhoneForm, StoreForm, BillingForm } from './components'
import { VENDOR_STEPS } from './constants';

const CreateVendorStore: FunctionComponent = () => {
  const [vendorStep, setVendorStep] = useState<number>(VENDOR_STEPS.PERSONAL_INFO_FORM);

  return (
    <Flex
      height='fit-content'
      minHeight={`calc(100vh - ${navbarHeight})`}
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        as='section'
        width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
        height='fit-content'
        paddingY='12'
        direction='column'
        boxShadow={{ base: 'none', md: 'md' }}
        transition='height 1s ease-in'
      >
        {vendorStep == VENDOR_STEPS.PERSONAL_INFO_FORM && (
          <Fade in={true}>
            <PersonalInfoForm setVendorStep={setVendorStep} />
          </Fade>
        )}
        {vendorStep == VENDOR_STEPS.VERIFY_PHONE_FORM && (
          <Fade in={true}>
            <VerifyPhoneForm setVendorStep={setVendorStep}/>
          </Fade>
        )}
        {vendorStep == VENDOR_STEPS.STORE_FORM && (
          <Fade in={true}>
            <StoreForm setVendorStep={setVendorStep}/>
          </Fade>
        )}
        {vendorStep == VENDOR_STEPS.BILLING_FORM && (
          <Fade in={true}>
            <BillingForm setVendorStep={setVendorStep}/>
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

CreateVendorStore.displayName = CreateVendorStore.name;

export default memo(CreateVendorStore);
