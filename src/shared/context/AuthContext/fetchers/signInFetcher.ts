// SHARED IMPORTS
import { POST_AUTH_SIGNIN } from '../../../constants';

export const SignInFetcher = async (username: string, password: string): Promise<Response> =>
  await fetch(POST_AUTH_SIGNIN, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
