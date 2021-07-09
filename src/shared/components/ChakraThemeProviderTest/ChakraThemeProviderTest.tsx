// EXTERNAL IMPORTS
import React, { FunctionComponent, ReactNode, memo } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Types
type PropsType = {
  children?: ReactNode;
};

// Component
const ChakraThemeProviderTest: FunctionComponent<PropsType> = (props: PropsType) => (
  <ChakraProvider>{props.children}</ChakraProvider>
);

// Display Name
ChakraThemeProviderTest.displayName = ChakraThemeProviderTest.name;

export default memo(ChakraThemeProviderTest);
