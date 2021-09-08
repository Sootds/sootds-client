// EXTERNAL IMPORTS
import React, { FunctionComponent, memo, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

// SHARED IMPORTS
import { GET_VENDORS_STORES_GET_STORE } from '../../shared/constants';

// Types
type PropsType = {
  status?: number;
  store?: {
    id: number;
    urlName: string;
    name: string;
  };
};

// Server-Side Render
export const getServerSideProps: GetServerSideProps = async (context) => {
  const storeUrlName = context.query.storeUrlName;

  const response = await fetch(`${GET_VENDORS_STORES_GET_STORE}${storeUrlName}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const json = await response.json();
    return {
      props: {
        status: response.status,
        store: {
          id: json.store.id,
          urlName: json.store.url_name,
          name: json.store.name
        }
      }
    };
  } else return { props: { status: response.status } };
};

// Component
const StorePage: FunctionComponent<PropsType> = (props: PropsType) => {
  const router = useRouter();
  const statusCode = props.status;

  useEffect((): void => {
    if (statusCode !== 200) router.push('/');
  }, []);

  if (statusCode === 200) return <div>{props.store.name}</div>;

  return null;
};

// Display Name
StorePage.displayName = StorePage.name;

export default memo(StorePage);
