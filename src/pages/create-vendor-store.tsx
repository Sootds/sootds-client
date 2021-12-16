// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { CreateVendorStore } from '../containers';

// Component
const CreateVendorStorePage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    if (!authContext.user) router.push('/');
  }, [authContext.user]);

  return authContext.user ? <CreateVendorStore /> : null;
};

// Display Name
CreateVendorStorePage.displayName = CreateVendorStorePage.name;

export default memo(CreateVendorStorePage);
