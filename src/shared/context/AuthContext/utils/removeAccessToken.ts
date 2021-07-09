// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const removeAccessToken = (): void => {
  if (isBrowser) {
    window.localStorage.removeItem('access_token');
  }
};
