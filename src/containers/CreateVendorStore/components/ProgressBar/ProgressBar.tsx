// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Circle, Progress } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// LOCAL IMPORTS
import { CreateVendorStoreSteps } from '../../enums';

// Types
type PropsType = {
  step: number;
};

const ProgressBar: FunctionComponent<PropsType> = (props: PropsType) => {
  return (
    <Flex justify='center' align='center' width='80%' mb={3}>
      <Circle size='35px' bg='gray.500' color='white'>
        {props.step > CreateVendorStoreSteps.PersonalInfoForm ? <CheckIcon /> : 1}
      </Circle>
      <Progress
        colorScheme='gray'
        value={props.step > CreateVendorStoreSteps.PersonalInfoForm ? 100 : 0}
        width='full'
        height='2px'
        marginX={1}
      />
      <Circle
        size='35px'
        bg={props.step > CreateVendorStoreSteps.StoreForm ? 'gray.500' : 'gray.200'}
        color={props.step > CreateVendorStoreSteps.StoreForm && 'white'}
      >
        {props.step > CreateVendorStoreSteps.StoreForm ? <CheckIcon /> : 2}
      </Circle>
      <Progress
        colorScheme='gray'
        value={props.step > CreateVendorStoreSteps.StoreForm ? 100 : 0}
        width='full'
        height='2px'
        marginX={1}
      />
      <Circle
        size='35px'
        bg={props.step > CreateVendorStoreSteps.BillingForm ? 'gray.500' : 'gray.200'}
        color={props.step > CreateVendorStoreSteps.BillingForm && 'white'}
      >
        {props.step > CreateVendorStoreSteps.BillingForm ? <CheckIcon /> : 3}
      </Circle>
    </Flex>
  );
};

// Display Name
ProgressBar.displayName = ProgressBar.name;

export default memo(ProgressBar);
