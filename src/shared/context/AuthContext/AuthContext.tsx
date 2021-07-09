// EXTERNAL IMPORTS
import React, {
  ReactNode,
  createContext,
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  memo
} from 'react';
import jwtDecode from 'jwt-decode';

// LOCAL IMPORTS
import { UserType, AuthContextType, SignInResponseType, IdTokenDecodedType } from './types';
import { signInFetcher, verifyTokenFetcher } from './fetchers';
import { persistAccessToken, persistIdToken, getAccessToken, getIdToken } from './utils';

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

  useEffect((): void => {
    const accessToken = getAccessToken();
    const idToken = getIdToken();

    const refreshTokens = async (accessToken: string, idToken: string): Promise<void> => {
      const response = await verifyTokenFetcher(accessToken, idToken);
      if (response.ok) {
        const idTokenDecoded: IdTokenDecodedType = jwtDecode(idToken);
        setAccessToken(accessToken);
        setUser({
          username: idTokenDecoded['cognito:username'],
          email: idTokenDecoded.email,
          name: idTokenDecoded.name,
          isEmailVerified: idTokenDecoded.email_verified
        });
        console.log('signed in');
      } else {
        setAccessToken(null);
        setUser(null);
        console.log('no tokens');
      }
    };

    refreshTokens(accessToken, idToken);
  }, []);

  const signIn = useCallback(async (username: string, password: string): Promise<void> => {
    const response = await signInFetcher(username, password);
    if (response.ok) {
      const json: SignInResponseType = await response.json();
      const idTokenDecoded: IdTokenDecodedType = jwtDecode(json.id_token);

      persistAccessToken(json.access_token);
      persistIdToken(json.id_token);

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
