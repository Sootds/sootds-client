// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';

// LOCAL IMPORTS
import { ForgotPassword } from '../containers';

// Component
const ForgotPasswordPage: FunctionComponent = () => <ForgotPassword />;

// Display Name
ForgotPasswordPage.displayName = ForgotPasswordPage.name;

export default memo(ForgotPasswordPage);
