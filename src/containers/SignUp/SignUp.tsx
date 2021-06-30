// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, useCallback, memo } from 'react';
import { Flex, Fade } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignUpForm, ConfirmAccountForm } from './components';
import { SignUpFormType, ConfirmAccountFormType } from './types';

// Component
const SignUp: FunctionComponent = () => {
  const [step, setStep] = useState<number>(0);

  const onSignUpFormSubmit = useCallback<SubmitHandler<SignUpFormType>>(
    async (data): Promise<void> => {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signup`, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     user_name: data.user_name,
      //     first_name: data.first_name,
      //     last_name: data.last_name,
      //     email: data.email,
      //     password: data.password
      //   })
      // });
      // const json = await response.json();
      // console.log(data);
      setStep(1);
    },
    []
  );

  const onConfirmAccountFormSubmit = useCallback<SubmitHandler<ConfirmAccountFormType>>(
    async (data): Promise<void> => {
      setStep(0);
    },
    []
  );

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
        {step == 0 && (
          <Fade in={true}>
            <SignUpForm onSignUpFormSubmit={onSignUpFormSubmit} />
          </Fade>
        )}
        {step == 1 && (
          <Fade in={true}>
            <ConfirmAccountForm onConfirmAccountFormSubmit={onConfirmAccountFormSubmit} />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

// Display Names
SignUp.displayName = SignUp.name;

export default memo(SignUp);
