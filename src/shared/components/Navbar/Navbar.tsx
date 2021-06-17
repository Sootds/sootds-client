import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { Logo, MobileNav, DesktopNav } from './components';
import { navbarHeight } from '../../constants';

// Component
const Navbar: FunctionComponent = () => (
  <Flex
    as='nav'
    width='100%'
    height={navbarHeight}
    position='sticky'
    top={0}
    justifyContent='space-between'
    alignItems='center'
    paddingX={{ base: '4', lg: '16' }}
    backgroundColor='white'
    boxShadow='md'
    zIndex={10}
  >
    <Logo />
    <MobileNav />
    <DesktopNav />
  </Flex>
);

// Display Names
Navbar.displayName = Navbar.name;

export default memo(Navbar);
