// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Stack, Input, Button, Wrap, WrapItem } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';
import * as pageRoutes from '../../shared/constants/pageRoutes';

// LOCAL IMPORTS
import { StoreCard } from './components';

// Component
const Stores: FunctionComponent = () => {
  const router = useRouter();

  return (
    <Flex
      width='100%'
      height={`calc(100vh - ${navbarHeight})`}
      paddingTop={8}
      flexDirection='column'
    >
      <Flex width='100%' height='fit-content' marginBottom={8} justifyContent='space-between'>
        <Heading children='Stores' />
        <Stack direction='row' spacing={4}>
          <Input placeholder='Search stores' />
          <Button paddingX={8} colorScheme='gray'>
            Search
          </Button>
        </Stack>
      </Flex>
      <Wrap spacing={8} justify='center' shouldWrapChildren={true}>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />

        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />

        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </Wrap>
    </Flex>
  );
};

// Display Name
Stores.displayName = Stores.name;

export default memo(Stores);
