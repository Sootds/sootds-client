// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, useCallback, memo } from 'react';
import { Flex, Fade } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignUpForm, VerifyAccountForm } from './components';
import { SignUpFormType, VerifyAccountFormType } from './types';

// Types
type UserType = {
  userName: string;
  firstName: string;
};

// Component
const SignUp: FunctionComponent = () => {
  const [step, setStep] = useState<number>(0);
  const [user, setUser] = useState<UserType | null>(null);

  const onSignUpFormSubmit = useCallback<SubmitHandler<SignUpFormType>>(
    async (data): Promise<void> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_name: data.user_name,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password
        })
      });

      if (response.ok) {
        setUser({
          userName: data.user_name,
          firstName: data.first_name
        });
        setStep(1);
      } else {
        console.log('ERROR: Sign up failed.');
      }
    },
    []
  );

  const onVerifyAccountFormSubmit = useCallback<SubmitHandler<VerifyAccountFormType>>(
    async (data): Promise<void> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/verify-account`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_name: user.userName,
            confirmation_code: data.confirmation_code
          })
        }
      );

      if (response.ok) {
        setStep(2);
      } else {
        console.log('ERROR: Account confirmation failed.');
      }
    },
    [user]
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
            <VerifyAccountForm onVerifyAccountFormSubmit={onVerifyAccountFormSubmit} />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

// Display Names
SignUp.displayName = SignUp.name;

export default memo(SignUp);
