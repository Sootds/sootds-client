// SHARED IMPORTS
import { POST_AUTH_REFRESH_TOKEN } from '../../../constants';

export const verifyTokenFetcher = async (access_token: string, id_token: string): Promise<Response> =>
  await fetch(POST_AUTH_REFRESH_TOKEN, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ access_token, id_token })
  });
