import React from 'react';
import { Flex, Heading, Text, Stack, Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const Store = () => {
  return (
    <>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Store Setup</Heading>
        <Text textAlign='center'>Create your own shop and start selling on Sootds.</Text>
      </Flex>
      <Stack direction='column' width={{ base: '80%', sm: '75%', md: '80%' }} spacing='4'>
        <Box>
          <FormControl>
            <FormLabel>Store Name</FormLabel>
            <Input type='text' placeholder='Name your store' />
          </FormControl>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Store Description</FormLabel>
                <Textarea placeholder="Enter a description of your store"/>
            </FormControl>
        </Box>
      </Stack>
    </>
  );
};

export default Store;
