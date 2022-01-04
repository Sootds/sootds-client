// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { Sidebar, AccountTab } from './components';

// Types
type PropsType = {
  username: string;
  accessToken: string;
};

// Component
const Settings: FunctionComponent<PropsType> = (props: PropsType) => {
  return (
    <Flex width='100%' height={`calc(100vh - ${navbarHeight})`} flexDirection='column'>
      <Heading children='Settings' />
      <Flex width='100%' height='100%'>
        <Sidebar />
        <AccountTab username={props.username} accessToken={props.accessToken} />
      </Flex>
    </Flex>
  );
};

// Display Name
Settings.displayName = Settings.name;

export default memo(Settings);
