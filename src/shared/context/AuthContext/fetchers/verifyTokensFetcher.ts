// SHARED IMPORTS
import { POST_AUTH_REFRESH_TOKEN } from '../../../constants';

export const verifyTokensFetcher = async (id_token: string, access_token: string): Promise<Response> =>
  await fetch(POST_AUTH_REFRESH_TOKEN, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id_token, access_token })
  });
