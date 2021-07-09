// SHARED IMPORTS
import { isBrowser } from '../../../utils';

export const getIdToken = (): string | null => {
  if (isBrowser) {
    return window.localStorage.getItem('id_token');
  }
};
