import React, { FunctionComponent, memo } from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { navbarHeight } from '../../shared/constants';
import PersonalInformation from './PersonalInformation';
import Verification from './Verification';
import Store from './Store';
import Billing from './Billing';

const CreateVendorStore: FunctionComponent = () => {
  const content = 'fdssdf';

  const steps = [
    { label: 'Step 1', content: <PersonalInformation /> },
    { label: 'Step 2', content: <Verification /> },
    { label: 'Step 3', content: <Store /> },
    { label: 'Step 4', content: <Billing /> }
  ];

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  return (
    <Flex
      direction='column'
      height='fit-content'
      minHeight={`calc(100vh - ${navbarHeight})`}
      justifyContent='center'
      alignItems='center'
    >
      <Steps
        colorScheme='gray'
        activeStep={activeStep}
        size='sm'
        paddingY='12'
        width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
        responsive={false}
        flexWrap='wrap'
      >
        {steps.map(({ label, content }) => (
          <Step key={label}>
            <Stack
              height='fit-content'
              direction='column'
              alignItems='center'
              spacing='4'
              width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
            >
            {content}
            </Stack>
          </Step>
        ))}
      </Steps>
      <Flex justify='space-between' width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }} paddingY='10'>
        <Button disabled={activeStep === 0} onClick={prevStep}>
          prev
        </Button>
        {activeStep === 4 ? (
          <Button onClick={reset} backgroundColor='black' color='white'>
            reset
          </Button>
        ) : (
          <Button onClick={nextStep} backgroundColor='black' color='white'>
            next
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

CreateVendorStore.displayName = CreateVendorStore.name;

export default memo(CreateVendorStore);