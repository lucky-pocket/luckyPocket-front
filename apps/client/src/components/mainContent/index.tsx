'use client';

import MainFooter from './mainFooter';
import MainTitle from './mainTitle';
import PocketList from './pocketList';
import * as S from './style';
import { MyPocketListType } from 'client/types';

import { MyInfoType } from 'client/types';

interface Pocket {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

interface MainContentProps {
  pockets?: Pocket[];
  totalCount?: number;
  userInfo?: MyInfoType;
  getPocketList: (offset: number, limit: number) => Promise<any>;
}

const MainContent: React.FC<MainContentProps> = ({
  pockets,
  totalCount,
  userInfo,
  getPocketList,
}) => {
  return (
    <S.MainContentBox>
      <MainTitle totalCount={totalCount} userInfo={userInfo} />
      <PocketList pockets={pockets} getPocketList={getPocketList} />
      <MainFooter />
    </S.MainContentBox>
  );
};

export default MainContent;
