// SHARED IMPORTS
import { POST_USER_INFO } from '../../../shared/constants';

// LOCAL IMPORTS
export const getUserInfoFetcher = async (
  username: string,
  accessToken: string
): Promise<Response> =>
  await fetch(POST_USER_INFO, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, access_token: accessToken })
  });
