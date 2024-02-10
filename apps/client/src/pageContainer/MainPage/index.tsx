'use client';

import { Header, MainContent } from 'client/components';
import * as S from './style';
import { MyPocketListType, MyInfoType, MyPocketsType } from 'client/types';
import { API } from 'api/client/API';
import { userMyNoticeUrl, userMyUrl, userMyPocketUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';

interface Props {}

const Main: React.FC<Props> = ({}) => {
  const getMyInfo = async () => {
    const response = await API.get(userMyUrl.getMyInfo());
    return response.data;
  };

  const { data: userInfo } = useQuery<MyInfoType>(['getMyInfo'], () =>
    getMyInfo()
  );

  const getPocketList = async (offset: number, limit: number) => {
    const response = await API.get(
      `${userMyPocketUrl.getPocketList()}/received?`,
      {
        params: { offset, limit },
      }
    );
    return response.data;
  };

  const { data: pocketList } = useQuery<MyPocketListType>(
    ['getPocketList'],
    () => getPocketList(1, 300)
  );

  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <MainContent
          pockets={pocketList?.pockets}
          totalCount={pocketList?.pockets.length}
          userInfo={userInfo}
        />
      </S.Background>
    </S.Main>
  );
};

export default Main;
