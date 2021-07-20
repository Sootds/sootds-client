import React, { Dispatch, FunctionComponent, memo } from 'react';
import { Flex, Circle, Progress } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Types
type PropsType = {
  vendorStep: number;
};

const ProgressBar: FunctionComponent<PropsType> = (props: PropsType) => {
  return (
    <Flex justify='center' align='center' width='80%' mb={3}>
      <Circle size='35px' bg='gray.500' color='white'>
        {props.vendorStep > 0 ? <CheckIcon /> : 1}
      </Circle>
      <Progress colorScheme='gray' value={props.vendorStep > 0 ? 100 : 0} width='full' height='2px' marginX={1} />
      <Circle size='35px' bg={props.vendorStep > 0 ? 'gray.500' : 'gray.200'} color={props.vendorStep > 0 && 'white'}>
      {props.vendorStep > 1 ? <CheckIcon /> : 2}
      </Circle>
      <Progress colorScheme='gray' value={props.vendorStep > 1 ? 100 : 0} width='full' height='2px' marginX={1} />
      <Circle size='35px' bg={props.vendorStep > 1 ? 'gray.500' : 'gray.200'} color={props.vendorStep > 1 && 'white'}>
      {props.vendorStep > 2 ? <CheckIcon /> : 3}
      </Circle>
      <Progress colorScheme='gray' value={props.vendorStep > 2 ? 100 : 0} width='full' height='2px' marginX={1} />
      <Circle size='35px' bg={props.vendorStep > 2 ? 'gray.500' : 'gray.200'} color={props.vendorStep > 2 && 'white'}>
      {props.vendorStep > 3 ? <CheckIcon /> : 4}
      </Circle>
    </Flex>
  );
};

// Display Name
ProgressBar.displayName = ProgressBar.name;

export default memo(ProgressBar);