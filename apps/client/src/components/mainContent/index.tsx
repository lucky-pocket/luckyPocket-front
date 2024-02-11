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
  refetchPocketList: () => void;
  isUser: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  pockets,
  totalCount,
  userInfo,
  refetchPocketList,
  isUser,
}) => {
  return (
    <S.MainContentBox isUser={isUser}>
      <MainTitle totalCount={totalCount} userInfo={userInfo} />
      <PocketList pockets={pockets} refetchPocketList={refetchPocketList} />
      {isUser && <MainFooter />}
    </S.MainContentBox>
  );
};

export default MainContent;
