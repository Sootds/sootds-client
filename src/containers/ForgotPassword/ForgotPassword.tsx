// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';

// Component
const ForgotPassword: FunctionComponent = () => <p>Forgot Password!</p>;

// Display Name
ForgotPassword.displayName = ForgotPassword.name;

export default memo(ForgotPassword);
