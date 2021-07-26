// SHARED IMPORTS
import { POST_AUTH_SIGNOUT } from '../../../constants';

export const SignOutFetcher = async (id_token: string, access_token: string): Promise<Response> =>
  await fetch(POST_AUTH_SIGNOUT, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id_token, access_token })
  });
