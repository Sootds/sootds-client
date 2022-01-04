// EXTERNAL IMPORTS
import { FunctionComponent, memo, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { AuthContext } from '../../shared/context';

// Component
const SettingsPage: FunctionComponent = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect((): void => {
    if (!authContext.user) router.push('/');
    else router.push('/settings/account');
  }, [authContext.user]);

  return null;
};

// Display Name
SettingsPage.displayName = SettingsPage.name;

export default memo(SettingsPage);
