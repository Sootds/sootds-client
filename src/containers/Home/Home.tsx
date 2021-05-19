import React, { FunctionComponent, ReactElement, memo } from 'react';

// Component
const Home: FunctionComponent = (): ReactElement => (
  <div>
    <p>Hello!</p>
  </div>
);

export default memo(Home);
