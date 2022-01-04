// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

// Types
type PropsType = {
  children?: ReactNode;
  href: string;
};

// Component
const NavLink: FunctionComponent<PropsType> = (props: PropsType) => (
  <Box width='fit-content' height='fit-content' >
    <NextLink href={props.href}>
      <Link>{props.children}</Link>
    </NextLink>
  </Box>
);

// Display Name
NavLink.displayName = NavLink.name;

export default memo(NavLink);
