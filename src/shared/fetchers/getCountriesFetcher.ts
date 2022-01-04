// SHARED IMPORTS
import { GET_COUNTRIES } from '../constants';

export const getCountriesFetcher = async (): Promise<Response> =>
  await fetch(GET_COUNTRIES, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
