'use client';

import { Header, MainContent } from 'client/components';
import * as S from './style';
import { MyPocketListType, MyInfoType } from 'client/types';
interface Props {
  pocketList: MyPocketListType[];
  userInfo: MyInfoType;
}

const Main: React.FC<Props> = ({ pocketList, userInfo }) => {
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <MainContent
          pockets={pocketList[0].pockets}
          totalCount={pocketList[0].totalCount}
          userInfo={userInfo}
        />
      </S.Background>
    </S.Main>
  );
};

export default Main;
