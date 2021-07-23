// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, memo } from 'react';
import { Flex, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignUpForm, VerifyAccountForm, SignUpComplete } from './components';
import { UserType } from './types';
import { SignUpSteps } from './enums';

// Component
const SignUp: FunctionComponent = () => {
  const [step, setStep] = useState<SignUpSteps>(SignUpSteps.SignUpForm);
  const [user, setUser] = useState<UserType | null>(null);

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
        {step == SignUpSteps.SignUpForm && (
          <Fade in={true}>
            <SignUpForm setUser={setUser} setStep={setStep} />
          </Fade>
        )}
        {step == SignUpSteps.VerifyAccountForm && (
          <Fade in={true}>
            <VerifyAccountForm user={user} setUser={setUser} setStep={setStep} />
          </Fade>
        )}
        {step == SignUpSteps.SignUpComplete && (
          <Fade in={true}>
            <SignUpComplete />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

// Display Name
SignUp.displayName = SignUp.name;

export default memo(SignUp);
