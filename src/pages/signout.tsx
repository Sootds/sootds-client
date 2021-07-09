// EXTERNAL IMPORTS
import { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// Component
const SignUpPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    authContext.signOut();
    router.push('/');
  }, []);

  return null;
};

// Display Name
SignUpPage.displayName = SignUpPage.name;

export default memo(SignUpPage);
