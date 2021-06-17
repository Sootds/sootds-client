import React, { FunctionComponent, ReactNode, memo } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Types
type Props = {
  children?: ReactNode;
};

// Component
const ChakraThemeProviderTest: FunctionComponent<Props> = (props: Props) => (
  <ChakraProvider>{props.children}</ChakraProvider>
);

// Display Name
ChakraThemeProviderTest.displayName = ChakraThemeProviderTest.name;

export default memo(ChakraThemeProviderTest);
