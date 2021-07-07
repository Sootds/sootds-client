// SHARED IMPORTS
import { POST_AUTH_SIGNIN } from '../../../constants';

export const signInFetcher = async (username: string, password: string) =>
  await fetch(POST_AUTH_SIGNIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
