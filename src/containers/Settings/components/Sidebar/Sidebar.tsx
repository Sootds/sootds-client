// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

// Constants
const options = ['Account', 'Notifications', 'Orders'];

// Component
const Sidebar: FunctionComponent = () => {
  return (
    <VStack width='30%' height='fit-content' alignItems='flex-start' padding='8'>
      {options.map((option) => (
        <Box key={option}>
          <Text children={option} />
        </Box>
      ))}
    </VStack>
  );
};

// Display Name
Sidebar.displayName = Sidebar.name;

export default memo(Sidebar);
