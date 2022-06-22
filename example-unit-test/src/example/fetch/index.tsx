import { useEffect, useState } from 'react';
import { formatUserName } from '../../helpers/format-username';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetch-api';

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const url = 'https://jsonplaceholder.typicode.com/users';

export const Fetch = () => {
  const { data, error } = useSWR<User[]>(url, fetcher);

  return (
    <>
      <div>Users:</div>
      <div data-testid="user-list">
        {data
          ? data.map((item) => (
              <p key={item.id}> {`${item.name} (${formatUserName(item.username)})`}</p>
            ))
          : 'Loading...'}
      </div>
    </>
  );
};
