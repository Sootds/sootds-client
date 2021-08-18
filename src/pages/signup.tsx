// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { SignUp } from '../containers';

// Component
const SignUpPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    if (authContext.user) router.push('/');
  }, []);

  return <SignUp />;
};

// Display Name
SignUpPage.displayName = SignUpPage.name;

export default memo(SignUpPage);
