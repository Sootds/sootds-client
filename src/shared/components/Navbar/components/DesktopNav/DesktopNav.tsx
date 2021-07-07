// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, useContext, memo } from 'react';
import { Stack } from '@chakra-ui/react';

// SHARED IMPORTS
import { AuthContext } from '../../../../context';

// LOCAL IMPORTS
import { NavItem } from '..';
import { navLinks } from '../../../../constants';
import type { NavLink } from '../../../../constants';

// Component
const DesktopNav: FunctionComponent = () => {
  const authContext = useContext(AuthContext);

  return (
    <Fragment>
      <Stack display={{ base: 'none', lg: 'flex' }} direction='row' spacing='8'>
        {navLinks.map((navLink: NavLink, index: number) =>
          authContext.user && !navLink.showIfAuth ? null : (
            <NavItem key={index} href={navLink.pageRoute}>
              {navLink.pageName}
            </NavItem>
          )
        )}
      </Stack>
    </Fragment>
  );
};

// Display Names
DesktopNav.displayName = DesktopNav.name;

export default memo(DesktopNav);
