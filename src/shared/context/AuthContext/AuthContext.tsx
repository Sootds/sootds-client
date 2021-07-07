// EXTERNAL IMPORTS
import React, {
  ReactNode,
  createContext,
  FunctionComponent,
  useState,
  useCallback,
  memo
} from 'react';

// Types
type User = {
  username: string;
  email: string;
  name: string;
  isEmailVerified: boolean;
};

type AuthContext = {
  accessToken: string;
  refreshToken: string; // TO DO: Move this somewhere else.
  user: User;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type Props = {
  children?: ReactNode;
};

// Context
export const AuthContext = createContext<AuthContext | null>(null);

// Component
const AuthContextProvider: FunctionComponent<Props> = (props: Props) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback(async (username: string, password: string): Promise<void> => {}, []);
  const signOut = useCallback(async (): Promise<void> => {}, []);

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Display Name
AuthContextProvider.displayName = AuthContextProvider.name;

export default memo(AuthContextProvider);
