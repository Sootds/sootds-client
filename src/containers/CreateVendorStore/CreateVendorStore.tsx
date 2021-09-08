// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext, useState, useEffect } from 'react';
import { Flex, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import {
  PersonalInfoForm,
  StoreInfoForm,
  BillingInfoForm,
  CreateVendorStoreComplete
} from './components';
import { PersonalInfoType, StoreInfoType } from './types';
import { CreateVendorStoreSteps } from './enums';
import { createVendorStoreFetcher } from './fetchers';

const CreateVendorStore: FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  const [step, setStep] = useState<number>(CreateVendorStoreSteps.PersonalInfoForm);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType | null>(null);
  const [storeInfo, setStoreInfo] = useState<StoreInfoType | null>(null);

  useEffect((): void => {
    if (authContext.user) setPersonalInfo({ name: authContext.user.name });
  }, [authContext.user]);

  useEffect((): void => {
    const createVendorStore = async (): Promise<void> => {
      await createVendorStoreFetcher(
        personalInfo,
        storeInfo,
        authContext.user.username,
        authContext.accessToken
      );
    };

    if (step === CreateVendorStoreSteps.CreateVendorStoreComplete) {
      createVendorStore();
    }
  }, [step]);

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
        {step == CreateVendorStoreSteps.PersonalInfoForm && (
          <Fade in={true}>
            <PersonalInfoForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              setStep={setStep}
            />
          </Fade>
        )}
        {step == CreateVendorStoreSteps.StoreInfoForm && (
          <Fade in={true}>
            <StoreInfoForm storeInfo={storeInfo} setStoreInfo={setStoreInfo} setStep={setStep} />
          </Fade>
        )}
        {step == CreateVendorStoreSteps.BillingInfoForm && (
          <Fade in={true}>
            <BillingInfoForm setStep={setStep} />
          </Fade>
        )}
        {step == CreateVendorStoreSteps.CreateVendorStoreComplete && (
          <Fade in={true}>
            <CreateVendorStoreComplete personalInfo={personalInfo} storeInfo={storeInfo} />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

CreateVendorStore.displayName = CreateVendorStore.name;

export default memo(CreateVendorStore);
