'use client';

import MainFooter from './mainFooter';
import MainTitle from './mainTitle';
import PocketList from './pocketList';
import * as S from './style';

interface Pocket {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

interface MainContentProps {
  pockets: Pocket[];
  totalCount: number;
}

const MainContent: React.FC<MainContentProps> = ({ pockets, totalCount }) => {
  return (
    <S.MainContentBox>
      <MainTitle totalCount={totalCount} />
      <PocketList pockets={pockets} />
      <MainFooter />
    </S.MainContentBox>
  );
};

export default MainContent;
