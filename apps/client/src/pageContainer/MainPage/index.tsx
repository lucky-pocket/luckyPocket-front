'use client';

import { Header } from 'client/components';
import * as S from './style';
import { PocketListType } from 'client/types';
interface Props {
  pocketList: PocketListType[];
}

const Main: React.FC<Props> = ({ pocketList }) => {
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
      </S.Background>
    </S.Main>
  );
};

export default Main;
