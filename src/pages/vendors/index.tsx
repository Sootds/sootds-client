// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';

// LOCAL IMPORTS
import { Vendors } from '../../containers';

// Component
const VendorsPage: FunctionComponent = () => {
  // const authContext = useContext(AuthContext);

  return <Vendors />;
};

// Display Name
VendorsPage.displayName = VendorsPage.name;

export default memo(VendorsPage);
