// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, useContext, memo } from 'react';
import { Stack } from '@chakra-ui/react';

// SHARED IMPORTS
import { NavLinkType } from '../../../../types';
import { AuthContext } from '../../../../context';

// LOCAL IMPORTS
import { NavLink } from '..';
import { navLinks } from '../../../../constants';

// Component
const DesktopNav: FunctionComponent = () => {
  const authContext = useContext(AuthContext);

  return (
    <Fragment>
      <Stack display={{ base: 'none', lg: 'flex' }} direction='row' spacing='8'>
        {navLinks.map((navLink: NavLinkType, index: number) =>
          (authContext.user && navLink.showIfAuth) ||
          (!authContext.user && navLink.showIfNotAuth) || 
          (!authContext.user && navLink.showIfAuth && navLink.showIfNotAuth) ? (
            <NavLink key={index} href={navLink.pageRoute}>
              {navLink.pageName}
            </NavLink>
          ) : null
        )}
      </Stack>
    </Fragment>
  );
};

// Display Name
DesktopNav.displayName = DesktopNav.name;

export default memo(DesktopNav);
