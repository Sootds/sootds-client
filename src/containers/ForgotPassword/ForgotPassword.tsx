// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, memo } from 'react';
import { Flex, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { ForgotPasswordForm, NewPasswordForm, ForgotPasswordComplete } from './components';
import { ForgotPasswordSteps } from './enums';

// Component
const ForgotPassword: FunctionComponent = () => {
  const [step, setStep] = useState<ForgotPasswordSteps>(ForgotPasswordSteps.ForgotPasswordForm);
  const [username, setUsername] = useState<string | null>(null);

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
        {step == ForgotPasswordSteps.ForgotPasswordForm && (
          <Fade in={true}>
            <ForgotPasswordForm setUsername={setUsername} setStep={setStep} />
          </Fade>
        )}
        {step == ForgotPasswordSteps.NewPasswordForm && (
          <Fade in={true}>
            <NewPasswordForm username={username} setStep={setStep} />
          </Fade>
        )}
        {step == ForgotPasswordSteps.ForgotPasswordComplete && (
          <Fade in={true}>
            <ForgotPasswordComplete />
          </Fade>
        )}
      </Flex>
    </Flex>
  );
};

// Display Name
ForgotPassword.displayName = ForgotPassword.name;

export default memo(ForgotPassword);
