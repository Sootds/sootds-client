// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { ForgotPassword } from '../containers';

// Component
const ForgotPasswordPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    if (authContext.user) router.push('/');
  }, []);

  return <ForgotPassword />;
};

// Display Name
ForgotPasswordPage.displayName = ForgotPasswordPage.name;

export default memo(ForgotPasswordPage);
