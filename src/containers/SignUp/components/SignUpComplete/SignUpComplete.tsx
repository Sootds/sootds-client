// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

// Types
type PropsType = {
  onSignUpCompleteClick: () => void;
};

// Component
const SignUpComplete: FunctionComponent<PropsType> = (props: PropsType) => {
  return (
    <Stack
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Sign up complete!</Heading>
        <Text textAlign='center'>Great to have you on board.</Text>
      </Flex>
      <Button
        onClick={props.onSignUpCompleteClick}
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
