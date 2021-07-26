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
import { signInFetcher, verifyTokenFetcher, signOutFetcher } from './fetchers';
import {
  persistAccessToken,
  persistIdToken,
  getAccessToken,
  getIdToken,
  removeAccessToken,
  removeIdToken
} from './utils';

// Types
type PropsType = {
  children?: ReactNode;
};

// Context
export const AuthContext = createContext<AuthContextType | null>(null);

// Component
const AuthContextProvider: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect((): void => {
    const idToken = getIdToken();
    const accessToken = getAccessToken();

    const refreshTokens = async (idToken: string, accessToken: string): Promise<void> => {
      setIsLoading(true);

      const response = await verifyTokenFetcher(idToken, accessToken);
      if (response.ok) {
        const idTokenDecoded: IdTokenDecodedType = jwtDecode(idToken);
        setAccessToken(accessToken);
        setUser({
          username: idTokenDecoded['cognito:username'],
          email: idTokenDecoded.email,
          name: idTokenDecoded.name,
          isEmailVerified: idTokenDecoded.email_verified
        });
      } else {
        setAccessToken(null);
        setUser(null);
      }

      setIsLoading(false);
    };

    if (idToken && accessToken) {
      refreshTokens(idToken, accessToken);
    }
  }, []);

  const signIn = useCallback(async (username: string, password: string): Promise<void> => {
    setIsLoading(true);

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

    setIsLoading(false);
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    const idToken = getIdToken();
    const accessToken = getAccessToken();

    const signOutUser = async (idToken: string, accessToken: string): Promise<void> => {
      setIsLoading(true);

      const response = await signOutFetcher(idToken, accessToken);
      if (response.ok) {
        removeAccessToken();
        removeIdToken();
        setAccessToken(null);
        setUser(null);
      }

      setIsLoading(false);
    };

    signOutUser(idToken, accessToken);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, accessToken, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Display Name
AuthContextProvider.displayName = AuthContextProvider.name;

export default memo(AuthContextProvider);
