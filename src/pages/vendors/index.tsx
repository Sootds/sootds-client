// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';

// Component
const VendorsPage: FunctionComponent = () => {
  return <p>vendors page</p>
}

// Display Name
VendorsPage.displayName = VendorsPage.name;

export default memo(VendorsPage);
