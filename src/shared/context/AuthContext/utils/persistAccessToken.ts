// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const persistAccessToken = (accessToken: string): void => {
  if (isBrowser) {
    window.localStorage.setItem('access_token', accessToken);
  }
};
