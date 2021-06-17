import React, { FunctionComponent, memo } from 'react';
import { Box } from '@chakra-ui/react';

// Component
const Home: FunctionComponent = () => (
  <Box>
    <p>Home page!</p>
  </Box>
);

// Display Names
Home.displayName = Home.name;

export default memo(Home);
