import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header, MainContent } from 'client/components';
import * as S from './style';
import { MyPocketListType, MyInfoType } from 'client/types';
import { API } from 'api/client/API';
import { userMyUrl, userMyPocketUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
import MainFooter from 'client/components/mainContent/mainFooter';

interface Props {}

const Main: React.FC<Props> = ({}) => {
  const router = useRouter();

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

  const { data: pocketList, refetch: refetchPocketList } =
    useQuery<MyPocketListType>(['getPocketList'], () => getPocketList(0, 300));

  useEffect(() => {
    const checkRefresh = async () => {
      try {
        await getMyInfo();
        await getPocketList(0, 300);
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          router.push('/auth/signin');
        }
      }
    };
    checkRefresh();
  }, []);

  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <MainContent
          pockets={pocketList?.pockets}
          totalCount={pocketList?.pockets.length}
          userInfo={userInfo}
          refetchPocketList={refetchPocketList}
          isUser={true}
        />
      </S.Background>
    </S.Main>
  );
};

export default Main;
