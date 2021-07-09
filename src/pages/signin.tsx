// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { SignIn } from '../containers';

// Component
const SignInPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  if (authContext.user) {
    router.push('/');
  }

  return <SignIn />;
};

// Display Name
SignInPage.displayName = SignInPage.name;

export default memo(SignInPage);
