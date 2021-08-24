// EXTERNAL IMPORTS
import React, { Dispatch, FunctionComponent, useCallback, memo } from 'react';
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
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

// LOCAL IMPORTS
import { BillingFormType } from '../../types';
import { BillingFormSchema } from '../../schemas';
import { CreateVendorStoreSteps } from '../../enums';
import ProgressBar from '../ProgressBar';

// Types
type PropsType = {
  setStep: Dispatch<number>;
};

const BillingForm: FunctionComponent<PropsType> = (props: PropsType) => {
  // const { register, formState, handleSubmit } = useForm<BillingFormType>({
  //   resolver: joiResolver(BillingFormSchema)
  // });

  const onBillingFormSubmit = useCallback<SubmitHandler<BillingFormType>>(
    async (data): Promise<void> => {},
    []
  );

  return (
    <Stack
      as='form'
      // onSubmit={handleSubmit(onBillingFormSubmit)}
      width='100%'
      alignItems='center'
      spacing='4'
    >
      <ProgressBar step={CreateVendorStoreSteps.BillingInfoForm} />
      <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
        <Heading textAlign='center'>Billing</Heading>
        <Text textAlign='center'>Let us know how you'll get paid.</Text>
      </Flex>
      <Tabs
        isFitted
        variant='solid-rounded'
        colorScheme='gray'
        width={{ base: '80%', md: '75%', sm: '70%' }}
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
                  <Input type='text' />
                </FormControl>
              </Box>
              <Stack direction={['column', 'column', 'row']}>
                <Box flex='1'>
                  <FormControl>
                    <FormLabel>Expiry Date</FormLabel>
                    <Select placeholder='Month'></Select>
                  </FormControl>
                </Box>
                <Box flex='1'>
                  <FormControl mt={{ base: '8', md: '8', sm: '4' }}>
                    <Select placeholder='Year'></Select>
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
    </Stack>
  );
};

// Display Name
BillingForm.displayName = BillingForm.name;

export default memo(BillingForm);
