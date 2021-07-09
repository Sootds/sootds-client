// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Fade } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { SignInForm } from './components';

// Component
const SignIn: FunctionComponent = () => {
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
        <Fade in={true}>
          <SignInForm />
        </Fade>
      </Flex>
    </Flex>
  );
};

// Display Name
SignIn.displayName = SignIn.name;

export default memo(SignIn);
