'use client';

import { Header, MainContent } from 'client/components';
import * as S from './style';
import { MyPocketListType, MyInfoType } from 'client/types';
import { API } from 'api/client/API';
import { userUrl, userMyPocketUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';

interface UserProps {
  userId: number;
}

export default function User({ userId }: UserProps) {
  const getUserInfo = async () => {
    const response = await API.get(userUrl.getUserInfo(userId));
    return response.data;
  };

  const { data: userInfo } = useQuery<MyInfoType>(['getUserInfo'], () =>
    getUserInfo()
  );

  const getPocketList = async (offset: number, limit: number) => {
    const response = await API.get(`${userUrl.getPocketList(userId)}`, {
      params: { offset, limit },
    });
    return response.data;
  };

  const { data: pocketList, refetch: refetchPocketList } =
    useQuery<MyPocketListType>(['getPocketList'], () => getPocketList(0, 300));

  return (
    <S.User>
      <S.Background>
        <Header hasNorigae />
        <MainContent
          pockets={pocketList?.pockets}
          totalCount={pocketList?.pockets.length}
          userInfo={userInfo}
          refetchPocketList={refetchPocketList}
          isUser={false}
        />
      </S.Background>
    </S.User>
  );
}
