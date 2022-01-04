// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { VStack } from '@chakra-ui/react';

// SHARED IMPORTS
import { NavLinkType } from '../../../../shared/types';
import { NavLink } from '../../../../shared/components'
import * as pageRoutes from '../../../../shared/constants/pageRoutes'

// Constants
const options: Array<NavLinkType> = [
  {
    pageRoute: pageRoutes.SETTINGS_ACCOUNT_PAGE,
    pageName: 'Account',
    showIfAuth: true,
    showIfNotAuth: false
  },
  {
    pageRoute: pageRoutes.SETTINGS_NOTIFICATIONS_PAGE,
    pageName: 'Notifications',
    showIfAuth: true,
    showIfNotAuth: false
  },
  {
    pageRoute: pageRoutes.SETTINGS_ORDERS_PAGE,
    pageName: 'Orders',
    showIfAuth: true,
    showIfNotAuth: false
  }
]

// Type
type PropsType = {
  pathname: string;
}

// Component
const Sidebar: FunctionComponent<PropsType> = (props: PropsType) => {
  return (
    <VStack width='30%' height='fit-content' alignItems='flex-start' padding='8'>
      {options.map((option) => (
        <NavLink key={option.pageRoute} href={option.pageRoute}>
          {option.pageName}
        </NavLink>
      ))}
    </VStack>
  );
};

// Display Name
Sidebar.displayName = Sidebar.name;

export default memo(Sidebar);
