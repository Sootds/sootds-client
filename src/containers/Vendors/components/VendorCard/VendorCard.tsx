// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { Box, Stack, Heading, Text, Button } from '@chakra-ui/react';

// Component
const VendorCard: FunctionComponent = () => {
  return (
    <Box width={96} height={64} padding={8} boxShadow='md'>
      <Stack
        width='100%'
        height='100%'
        spacing={4}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading children='Vendor Name' />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad atque tempore
          voluptatibus, ipsam rem mollitia, id dolorem.
        </Text>
        <Stack direction='row'>
          <Button colorScheme='purple'>View Store</Button>
          <Button colorScheme='blue'>Follow</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

// Display Name
VendorCard.displayName = VendorCard.name;

export default memo(VendorCard);
