import React from 'react';
import { Flex, Stack, Box, Heading, Text, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

const PersonalInformation = () => {
  return (
      <>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Personal Information</Heading>
        <Text textAlign='center'>Let's get started! Tell us about yourself.</Text>
      </Flex>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '80%' }}>
        <Box flex="1">
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '80%' }}>
        <Box flex="1">
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Select placeholder='Month'>
            </Select>
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl mt='8'>
          <Select placeholder='Date'>
          </Select>
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl mt='8'>
          <Select placeholder='Year'>
          </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box width={{ base: '80%', sm: '75%', md: '80%' }}>
        <FormControl>
          <FormLabel>Address1</FormLabel>
          <Input type='text' />
        </FormControl>
      </Box>
      <Box width={{ base: '80%', sm: '75%', md: '80%' }}>
        <FormControl>
          <FormLabel>Address2</FormLabel>
          <Input type='text' />
        </FormControl>
      </Box>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '80%' }}>
        <Box flex="1">
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Canada'>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction={['column', 'column', 'row']} width={{ base: '80%', sm: '75%', md: '80%' }}>
        <Box flex="1">
          <FormControl>
            <FormLabel>Province</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel>Postal/Zip Code</FormLabel>
            <Input type='text' />
          </FormControl>
        </Box>
      </Stack>
      </>
  );
};

export default PersonalInformation;
