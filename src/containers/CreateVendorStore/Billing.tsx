import React from 'react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Text,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Select,
  Button,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react';

const Billing = () => {
  return (
    <>
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Billing</Heading>
        <Text textAlign='center'>Let us know how you'll get paid.</Text>
      </Flex>
      <Tabs
        isFitted
        variant='solid-rounded'
        colorScheme='gray'
        width={{ base: '80%', sm: '75%', md: '80%' }}
      >
        <TabList marginY='4'>
          <Tab>Credit Card</Tab>
          <Tab>Stripe</Tab>
          <Tab>Paypal</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack direction='column' spacing='4'>
              <Box>
                <FormControl>
                  <FormLabel>Cardholder Name</FormLabel>
                  <Input placeholder='Name on Card' type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Card Number</FormLabel>
                  <Input type='text'/>
                </FormControl>
              </Box>
              <Stack direction={['column', 'column', 'row']}>
                <Box flex='1'>
                  <FormControl>
                    <FormLabel>Expiration Date</FormLabel>
                    <Select placeholder='Month'>
                    </Select>
                  </FormControl>
                </Box>
                <Box flex='1'>
                  <FormControl mt='8'>
                    <Select placeholder='Year'>
                    </Select>
                  </FormControl>
                </Box>
                <Box flex='1'>
                  <FormControl>
                    <FormLabel>CVV</FormLabel>
                    <InputGroup>
                      <Input type='text' />
                      <InputRightElement children={<QuestionOutlineIcon />} />
                    </InputGroup>
                  </FormControl>
                </Box>
              </Stack>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Button isFullWidth backgroundColor='black' color='white'>
              Connect with Stripe
            </Button>
          </TabPanel>
          <TabPanel>
            <Button isFullWidth backgroundColor='black' color='white'>
              Connect with Paypal
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Billing;
