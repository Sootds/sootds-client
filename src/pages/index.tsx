import React, { FunctionComponent, ReactElement, memo } from 'react';
import { Home } from '../containers';

// Component
const Index: FunctionComponent = (): ReactElement => <Home />;

export default memo(Index);
