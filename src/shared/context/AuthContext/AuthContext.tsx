// EXTERNAL IMPORTS
import React, {
  ReactNode,
  createContext,
  FunctionComponent,
  useState,
  useCallback,
  memo
} from 'react';
import jwtDecode from 'jwt-decode';

// LOCAL IMPORTS
import { UserType, AuthContextType, SignInResponseType, IdTokenDecodedType } from './types';
import { signInFetcher } from './fetchers';

// Types
type PropsType = {
  children?: ReactNode;
};

// Context
export const AuthContext = createContext<AuthContextType | null>(null);

// Component
const AuthContextProvider: FunctionComponent<PropsType> = (props: PropsType) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  const signIn = useCallback(async (username: string, password: string): Promise<void> => {
    const response = await signInFetcher(username, password);
    if (response.ok) {
      const json: SignInResponseType = await response.json();
      const idTokenDecoded: IdTokenDecodedType = jwtDecode(json.id_token);

      setAccessToken(json.access_token);
      setUser({
        username: idTokenDecoded['cognito:username'],
        email: idTokenDecoded.email,
        name: idTokenDecoded.name,
        isEmailVerified: idTokenDecoded.email_verified
      });
    } else {
      switch (response.status) {
        case 401:
        default:
          break;
      }
    }
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    setAccessToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Display Name
AuthContextProvider.displayName = AuthContextProvider.name;

export default memo(AuthContextProvider);
