// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';

// SHARED IMPORTS
import { AuthContext } from '../shared/context';

// LOCAL IMPORTS
import { Home, FirstSignIn } from '../containers';

// Component
const HomePage: FunctionComponent = () => {
  const authContext = useContext(AuthContext);

  if (authContext.user && 'isFirstSignIn' in authContext.user && authContext.user.isFirstSignIn) {
    return <FirstSignIn />;
  }

  return <Home />;
};

// Display Name
HomePage.displayName = HomePage.name;

export default memo(HomePage);
