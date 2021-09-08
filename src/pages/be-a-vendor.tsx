// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { CreateVendorStore } from '../containers';

// Component
const BeAVendorPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  return <CreateVendorStore />;
};

// Display Name
BeAVendorPage.displayName = BeAVendorPage.name;

export default memo(BeAVendorPage);