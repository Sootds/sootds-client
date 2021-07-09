// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';

// LOCAL IMPORTS
import { Home } from '../containers';

// Component
const HomePage: FunctionComponent = () => {
  return <Home />;
};

// Display Name
HomePage.displayName = HomePage.name;

export default memo(HomePage);
