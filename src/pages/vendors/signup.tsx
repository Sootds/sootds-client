// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useContext } from 'react';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';

// LOCAL IMPORTS
import VendorSignUp from '../../containers/VendorSignUp';

// Component
const VendorSignUpPage: FunctionComponent = () => {
  const authContext = useContext(AuthContext);
  return (
    <VendorSignUp
      isSignedIn={authContext.user !== null}
      username={authContext.user?.username}
      accessToken={authContext.accessToken}
    />
  );
};

// Display Name
VendorSignUpPage.displayName = VendorSignUpPage.name;

export default memo(VendorSignUpPage);
