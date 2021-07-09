// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const getAccessToken = (): string | null => {
  if (isBrowser) {
    return window.localStorage.getItem('access_token');
  }
};
