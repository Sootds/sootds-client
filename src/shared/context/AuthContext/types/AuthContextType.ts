// LOCAL IMPORTS
import { UserType } from './';

export type AuthContextType = {
  accessToken: string;
  user: UserType;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
