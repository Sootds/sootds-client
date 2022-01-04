// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';

// LOCAL IMPORTS
import { Settings } from '../../containers';

// Component
const OrdersPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    if (!authContext.user) router.push('/');
  }, [authContext.user]);

  return authContext.user ? (
    <Settings username={authContext.user.username} accessToken={authContext.accessToken} />
  ) : null;
};

// Display Name
OrdersPage.displayName = OrdersPage.name;

export default memo(OrdersPage);
