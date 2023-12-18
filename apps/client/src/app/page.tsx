import React from 'react';

import { MainPage } from 'client/pageContainer';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { pocketUrl } from 'api/client';
import { PocketListType } from 'client/types';

export default async function Main() {
  try {
    const pocketList = await getPocketList();
    return <MainPage pocketList={pocketList} />;
  } catch (error) {
    console.error(error);
    //return <ErrorPage />;
  }
}

const getPocketList = async (): Promise<PocketListType[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  // if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(
      `/users/me${pocketUrl.getMyPocketList()}`,
      process.env.CLIENT_API_URL
    ),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  // if (response.status === 403) {
  //   return redirect('/auth/signup');
  // }

  if (response.status === 404) {
    return redirect('/404');
  }

  // if (!response.ok) {
  //   return redirect('/auth/signin');
  // }

  const pocketList = await response.json();

  return pocketList;
};
