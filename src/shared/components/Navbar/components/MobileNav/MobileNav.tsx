import React, { FunctionComponent, Fragment, memo } from 'react';
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
import { Logo, NavItem } from '../';
import { navLinks } from '../../../../constants';
import type { NavLink } from '../../../../constants';

// Component
const MobileNav: FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <IconButton
        onClick={onOpen}
        display={{ lg: 'none' }}
        icon={<HamburgerIcon />}
        aria-label='Toggle Navigation'
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='medium'>
            <DrawerCloseButton />
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <Stack direction='column' spacing='4'>
              {navLinks.map((navLink: NavLink, index: number) => (
                <NavItem key={index} href={navLink.pageRoute}>{navLink.pageName}</NavItem>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

// Display Names
MobileNav.displayName = MobileNav.name;

export default memo(MobileNav);
