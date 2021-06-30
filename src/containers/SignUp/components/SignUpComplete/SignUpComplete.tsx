// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Stack, Heading, Text, Button } from '@chakra-ui/react';

// Component
const SignUpComplete: FunctionComponent = () => {
  const router = useRouter();

  const onSignUpCompleteClick = useCallback<() => void>((): void => {
    router.push('/signin');
  }, []);

  return (
    <Stack width='100%' alignItems='center' spacing='4'>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Sign up complete!</Heading>
        <Text textAlign='center'>Great to have you on board.</Text>
      </Flex>
      <Button
        onClick={onSignUpCompleteClick}
        width={{ base: '80%', sm: '75%', md: '70%' }}
        backgroundColor='black'
        color='white'
      >
        Go to Sign In
      </Button>
    </Stack>
  );
};

// Display Name
SignUpComplete.displayName = SignUpComplete.name;

export default memo(SignUpComplete);
