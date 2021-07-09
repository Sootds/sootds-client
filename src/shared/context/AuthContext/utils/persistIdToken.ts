// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const persistIdToken = (idToken: string): void => {
  if (isBrowser) {
    window.localStorage.setItem('id_token', idToken);
  }
};
