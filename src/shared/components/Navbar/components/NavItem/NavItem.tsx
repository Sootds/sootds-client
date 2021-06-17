import React, { ReactNode, FunctionComponent, memo } from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

// Types
type Props = {
  children?: ReactNode;
  href: string;
};

// Component
const NavItem: FunctionComponent<Props> = (props: Props) => (
  <Box width='fit-content' height='fit-content' >
    <NextLink href={props.href}>
      <Link>{props.children}</Link>
    </NextLink>
  </Box>
);

// Display Names
NavItem.displayName = NavItem.name;

export default memo(NavItem);
