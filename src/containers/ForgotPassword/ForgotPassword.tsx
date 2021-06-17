import React, { FunctionComponent, memo } from 'react';

// Component
const ForgotPassword: FunctionComponent = () => <p>Forgot Password!</p>;

// Display Names
ForgotPassword.displayName = ForgotPassword.name;

export default memo(ForgotPassword);
