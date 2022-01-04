// SHARED IMPORTS
import { PUT_UPDATE_USER_INFO } from '../../../shared/constants';

// LOCAL IMPORTS
import { UserInfoFormType } from '../types';

export const updateUserInfoFetcher = async (
  updatedUserInfo: UserInfoFormType,
  username: string,
  accessToken: string
): Promise<Response> =>
  await fetch(PUT_UPDATE_USER_INFO, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      access_token: accessToken,
      updated_user_info: {
        name: updatedUserInfo.name,
        birthdate: updatedUserInfo.birthdate,
        address: {
          name: updatedUserInfo.address.name,
          city: updatedUserInfo.address.city,
          state: updatedUserInfo.address.state,
          code: updatedUserInfo.address.code,
          country_id: updatedUserInfo.address.countryId,
        }
      }
    })
  });
