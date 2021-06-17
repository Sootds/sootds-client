import React, { FunctionComponent, Fragment, memo } from 'react';
import { Stack } from '@chakra-ui/react';
import { NavItem } from '..';
import { navLinks } from '../../../../constants';
import type { NavLink } from '../../../../constants';

// Component
const DesktopNav: FunctionComponent = () => {
  return (
    <Fragment>
      <Stack display={{ base: 'none', lg: 'flex' }} direction='row' spacing='8'>
        {navLinks.map((navLink: NavLink, index: number) => (
          <NavItem key={index} href={navLink.pageRoute}>{navLink.pageName}</NavItem>
        ))}
      </Stack>
    </Fragment>
  );
};

// Display Names
DesktopNav.displayName = DesktopNav.name;

export default memo(DesktopNav);
