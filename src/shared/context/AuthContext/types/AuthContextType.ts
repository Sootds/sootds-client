// LOCAL IMPORTS
import { UserType } from './';

export type AuthContextType = {
  accessToken: string;
  refreshToken: string; // TO DO: Move this somewhere else.
  user: UserType;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
