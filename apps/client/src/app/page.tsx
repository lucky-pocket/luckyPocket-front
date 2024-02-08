import React from 'react';

import { MainPage } from 'client/pageContainer';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MyPocketListType, StandardType } from 'client/types';
import { useState } from 'react';
import { ServerErrorPage } from 'client/pageContainer';
import { userMyUrl, userMyPocketUrl } from 'api/client';
import { MyInfoType } from 'client/types';
export default async function Main() {
  try {
    const pocketList = await getPocketList();
    const myInfo = await getMyInfo();
    return <MainPage pocketList={[...pocketList]} userInfo={myInfo} />;
  } catch (error) {
    console.error(error);
    return <ServerErrorPage />;
  }
}

const getPocketList = async (): Promise<MyPocketListType[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(`${userMyPocketUrl.getPocketList()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (response.status === 403) {
    return redirect('/auth/signup');
  }

  if (response.status === 404) {
    return redirect('/404');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const pocketList = await response.json();

  return pocketList;
};

const getMyInfo = async (): Promise<MyInfoType> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(`${userMyUrl.getMyInfo()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (response.status === 403) {
    return redirect('/auth/signup');
  }

  if (response.status === 404) {
    return redirect('/404');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const pocketList = await response.json();

  return pocketList;
};
