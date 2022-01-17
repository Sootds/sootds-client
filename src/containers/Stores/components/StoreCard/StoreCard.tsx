// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { Box, Stack, Heading, Text, Button } from '@chakra-ui/react';

// Component
const StoreCard: FunctionComponent = () => {
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
        <Heading children='Store Name' />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad atque tempore
          voluptatibus, ipsam rem mollitia, id dolorem.
        </Text>
        <Stack direction='row'>
          <Button colorScheme='purple'>Visit</Button>
          <Button colorScheme='blue'>Follow</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

// Display Name
StoreCard.displayName = StoreCard.name;

export default memo(StoreCard);
