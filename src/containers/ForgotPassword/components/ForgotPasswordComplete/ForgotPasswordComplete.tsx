// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Stack, Heading, Text, Button } from '@chakra-ui/react';

// Component
const ForgotPasswordComplete: FunctionComponent = () => {
  const router = useRouter();

  const onForgotPasswordCompleteClick = useCallback<() => void>((): void => {
    router.push('/signin');
  }, []);

  return (
    <Stack width='100%' alignItems='center' spacing='4'>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>All set!</Heading>
        <Text textAlign='center'>You've successfully set your new password.</Text>
      </Flex>
      <Button
        onClick={onForgotPasswordCompleteClick}
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
ForgotPasswordComplete.displayName = ForgotPasswordComplete.name;

export default memo(ForgotPasswordComplete);
