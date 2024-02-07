import { RankPage } from 'client/pageContainer';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { PocketListType } from 'client/types';

export default async function Rank() {
  // const pocketList = await getPocketList();

  return <RankPage />;
}

const getPocketList = async (): Promise<PocketListType[]> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect('/auth/refresh');

  const response = await fetch(
    new URL(`/users/rank?${getPocketList()}`, process.env.BASE_URL),
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

  if (response.status === 401) {
    return redirect('/auth/refresh');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const pocketList = await response.json();

  return pocketList;
};
