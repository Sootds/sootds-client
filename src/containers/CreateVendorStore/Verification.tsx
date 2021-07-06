import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Box,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react';

const Verification = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Verification</Heading>
        <Text textAlign='center'>Verify your email address and phone number.</Text>
      </Flex>
      <Stack direction='column' width={{ base: '80%', sm: '75%', md: '80%' }} spacing='3'>
        <Box>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children='+1' />
              <Input type='tel' placeholder='phone number' />
            </InputGroup>
          </FormControl>
        </Box>
        {isSent && (
          <Box>
            <FormControl>
              <Input type='text' placeholder='Verification Code' />
            </FormControl>
          </Box>
        )}
        <Button
          backgroundColor='black'
          color='white'
          onClick={() => setIsSent(true)}
        >
          Send Verification Code
        </Button>
      </Stack>
    </>
  );
};

export default Verification;
