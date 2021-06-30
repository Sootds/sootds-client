// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignUpForm, VerifyAccountForm, SignUpComplete } from './components';
import { UserType } from './types';
import { SIGN_UP_STEPS } from './constants';

// Component
const SignUp: FunctionComponent = () => {
  const [signUpStep, setSignUpStep] = useState<number>(SIGN_UP_STEPS.SIGN_UP_FORM);
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
        {signUpStep == SIGN_UP_STEPS.SIGN_UP_FORM && (
          <Fade in={true}>
            <SignUpForm setUser={setUser} setSignUpStep={setSignUpStep} />
          </Fade>
        )}
        {signUpStep == SIGN_UP_STEPS.VERIFY_ACCOUNT_FORM && (
          <Fade in={true}>
            <VerifyAccountForm user={user} setUser={setUser} setSignUpStep={setSignUpStep} />
          </Fade>
        )}
        {signUpStep == SIGN_UP_STEPS.SIGN_UP_COMPLETE && (
          <Fade in={true}>
            <SignUpComplete />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

// Display Names
SignUp.displayName = SignUp.name;

export default memo(SignUp);
