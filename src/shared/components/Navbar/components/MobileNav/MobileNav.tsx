// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, useContext, memo } from 'react';
import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// SHARED IMPORTS
import { AuthContext } from '../../../../context';

// LOCAL IMPORTS
import { NavLinkType } from '../../../../types';
import { Logo, NavLink } from '../';
import { navLinks } from '../../../../constants';

// Component
const MobileNav: FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  const disclosure = useDisclosure();

  return (
    <Fragment>
      <IconButton
        onClick={disclosure.onOpen}
        display={{ lg: 'none' }}
        icon={<HamburgerIcon />}
        aria-label='Toggle Navigation'
      />
      <Drawer isOpen={disclosure.isOpen} onClose={disclosure.onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='medium'>
            <DrawerCloseButton />
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <Stack direction='column' spacing='4'>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

// Display Name
MobileNav.displayName = MobileNav.name;

export default memo(MobileNav);
