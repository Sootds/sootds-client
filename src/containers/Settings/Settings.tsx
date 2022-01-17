// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';
import * as pageRoutes from '../../shared/constants/pageRoutes';

// LOCAL IMPORTS
import { Sidebar, AccountTab } from './components';

// Types
type PropsType = {
  username: string;
  accessToken: string;
};

// Component
const Settings: FunctionComponent<PropsType> = (props: PropsType) => {
  const router = useRouter();

  return (
    <Flex
      width='100%'
      height={`calc(100vh - ${navbarHeight})`}
      paddingTop={8}
      flexDirection='column'
    >
      <Heading children='Settings' />
      <Flex width='100%' height='100%'>
        <Sidebar pathname={router.pathname} />
        {router.pathname == pageRoutes.SETTINGS_ACCOUNT_PAGE && (
          <AccountTab username={props.username} accessToken={props.accessToken} />
        )}
        {router.pathname == pageRoutes.SETTINGS_NOTIFICATIONS_PAGE && <p>notifications page</p>}
        {router.pathname == pageRoutes.SETTINGS_ORDERS_PAGE && <p>orders page</p>}
      </Flex>
    </Flex>
  );
};

// Display Name
Settings.displayName = Settings.name;

export default memo(Settings);
