import React, { FunctionComponent, memo } from 'react';
import { Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Text textTransform='uppercase' fontWeight='bold'>
    Sootds
  </Text>
);

// Display Names
Logo.displayName = Logo.name;

export default memo(Logo);
