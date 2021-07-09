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
          (authContext.user && navLink.showIfAuth) ||
          (!authContext.user && navLink.showIfNotAuth) || 
          (!authContext.user && navLink.showIfAuth && navLink.showIfNotAuth) ? (
            <NavItem key={index} href={navLink.pageRoute}>
              {navLink.pageName}
            </NavItem>
          ) : null
        )}
      </Stack>
    </Fragment>
  );
};

// Display Name
DesktopNav.displayName = DesktopNav.name;

export default memo(DesktopNav);
