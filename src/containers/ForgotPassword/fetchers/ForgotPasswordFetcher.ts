// SHARED IMPORTS
import { POST_AUTH_FORGOT_PASSWORD } from '../../../shared/constants';

export const ForgotPasswordFetcher = async (username: string): Promise<Response> =>
  await fetch(POST_AUTH_FORGOT_PASSWORD, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username })
  });
