// LOCAL IMPORTS
import { UserType } from './';

export type AuthContextType = {
  isLoading: boolean;
  accessToken: string;
  user: UserType;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
