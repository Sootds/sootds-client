// EXTERNAL IMPORTS
import React, { FunctionComponent, useState, useEffect, useCallback, memo } from 'react';
import {
  Flex,
  Spinner,
} from '@chakra-ui/react';

// SHARED IMPORTS
import { CountryType } from '../../../../shared/types'
import { getCountriesFetcher } from '../../../../shared/fetchers'

// LOCAL IMPORTS
import { UserInfoType, UserInfoFormType } from '../../types';
import { getUserInfoFetcher, updateUserInfoFetcher } from '../../fetchers';
import { UserInfoForm } from './components'

// Types
type PropsType = {
  username: string;
  accessToken: string;
};

// Component
const Account: FunctionComponent<PropsType> = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [countries, setCountries] = useState<Array<CountryType> | null>(null);

  useEffect((): void => {
    const getUserInfo = async (username: string, accessToken: string): Promise<void> => {
      setIsLoading(true);

      const response = await getUserInfoFetcher(username, accessToken);
      if (response.ok) {
        const json = await response.json();
        setUserInfo({
          id: json.user_info.id,
          username: json.user_info.username,
          email: json.user_info.email,
          name: json.user_info.name,
          birthdate: json.user_info.birthdate,
          address: {
            name: json.user_info.address.name,
            city: json.user_info.address.city,
            state: json.user_info.address.state,
            code: json.user_info.address.code,
            countryId: json.user_info.address.country_id
          }
        });
      }

      setIsLoading(false);
    };

    getUserInfo(props.username, props.accessToken);
  }, []);

  useEffect((): void => {
    const getCountries = async (): Promise<void> => {
      setIsLoading(true);

      const response = await getCountriesFetcher();
      if (response.ok) {
        const json = await response.json();
        setCountries(json.countries);
      }

      setIsLoading(false);
    }

    getCountries();
  }, []);

  const updateUserInfo = useCallback(async (updatedUserInfo: UserInfoFormType): Promise<void> => {
    setIsLoading(true);

    const response = await updateUserInfoFetcher(
      updatedUserInfo,
      props.username,
      props.accessToken
    );
    if (response.ok) {
      setUserInfo(userInfo => ({
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
        name: updatedUserInfo.name,
        birthdate: updatedUserInfo.birthdate,
        address: {
          name: updatedUserInfo.address.name,
          city: updatedUserInfo.address.city,
          state: updatedUserInfo.address.state,
          code: updatedUserInfo.address.code,
          countryId: updatedUserInfo.address.countryId
        }
      }));
    }

    setIsLoading(false);
  }, []);

  return isLoading || !userInfo || !countries ? (
    <Flex width='100%' height='100%' justifyContent='center' alignItems='center'>
      <Spinner size='xl' />
    </Flex>
  ) : (
    <UserInfoForm userInfo={userInfo} countries={countries} updateUserInfo={updateUserInfo} />
  );
};

// Display Name
Account.displayName = Account.name;

export default memo(Account);
