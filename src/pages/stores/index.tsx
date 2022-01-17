// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';

// LOCAL IMPORTS
import { Stores } from '../../containers';

// Component
const StoresPage: FunctionComponent = () => {
  // const authContext = useContext(AuthContext);

  return <Stores />;
};

// Display Name
StoresPage.displayName = StoresPage.name;

export default memo(StoresPage);
