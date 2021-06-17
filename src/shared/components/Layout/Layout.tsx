import React, { ReactNode, FunctionComponent, memo } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../';

// Types
type Props = {
  children?: ReactNode;
};

// Component
const Layout: FunctionComponent<Props> = (props: Props) => (
  <Box>
    <Navbar />
    <Box as='main' paddingX={{ base: '4', lg: '16' }}>
      {props.children}
    </Box>
  </Box>
);

// Display Name
Layout.displayName = Layout.name;

export default memo(Layout);
