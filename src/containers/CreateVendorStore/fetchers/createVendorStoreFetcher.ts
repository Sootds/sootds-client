// SHARED IMPORTS
import { POST_VENDORS_STORES_CREATE_STORE } from '../../../shared/constants';

// LOCAL IMPORTS
import { PersonalInfoType, StoreInfoType } from '../types';

export const createVendorStoreFetcher = async (
  personalInfo: PersonalInfoType,
  storeInfo: StoreInfoType,
  username: string,
  accessToken: string
): Promise<Response> =>
  await fetch(POST_VENDORS_STORES_CREATE_STORE, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      access_token: accessToken,
      personal_info: {
        name: personalInfo.name,
        date_of_birth: {
          day: personalInfo.dateOfBirth.day,
          month: personalInfo.dateOfBirth.month,
          year: personalInfo.dateOfBirth.year
        },
        address: personalInfo.address,
        city: personalInfo.city,
        country_id: personalInfo.country_id,
        state: personalInfo.state,
        code: personalInfo.code
      },
      store_info: storeInfo
    })
  });
