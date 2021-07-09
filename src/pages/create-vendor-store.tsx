// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';

// LOCAL IMPORTS
import { CreateVendorStore } from '../containers';

// Component
const CreateVendorStorePage: FunctionComponent = () => <CreateVendorStore />;

// Display Name
CreateVendorStorePage.displayName = CreateVendorStorePage.name;

export default memo(CreateVendorStorePage);
