// SHARED IMPORTS
import { POST_AUTH_NEW_PASSWORD } from '../../../shared/constants';

export const NewPasswordFetcher = async (
  username: string,
  verification_code: string,
  new_password: string
): Promise<Response> =>
  await fetch(POST_AUTH_NEW_PASSWORD, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      verification_code,
      new_password
    })
  });
