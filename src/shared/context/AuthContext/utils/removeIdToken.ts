// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const removeIdToken = (): void => {
  if (isBrowser) {
    window.localStorage.removeItem('id_token');
  }
};
