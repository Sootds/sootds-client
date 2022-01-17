// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// LOCAL IMPORTS
import { CreateVendorStore, CreateAccountPrompt } from './components';

// Types
type PropsType = {
  isSignedIn: boolean;
  username?: string;
  accessToken?: string;
};

// Component
const VendorSignUp: FunctionComponent<PropsType> = (props: PropsType) => (
  <Flex
    width='100%'
    height={`calc(100vh - ${navbarHeight})`}
    justifyContent='center'
    alignItems='center'
  >
    {props.isSignedIn ? (
      <CreateVendorStore username={props.username} accessToken={props.accessToken} />
    ) : (
      <CreateAccountPrompt />
    )}
  </Flex>
);

// Display Name
VendorSignUp.displayName = VendorSignUp.name;

export default memo(VendorSignUp);
