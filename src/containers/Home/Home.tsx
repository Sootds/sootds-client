// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// Component
const Home: FunctionComponent = () => (
  <Flex
    height='fit-content'
    minHeight={`calc(100vh - ${navbarHeight})`}
    justifyContent='center'
    alignItems='center'
  >
    <Heading as='h1' textAlign='center' fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
      Welcome to Sootds!
    </Heading>
  </Flex>
);

// Display Name
Home.displayName = Home.name;

export default memo(Home);
