'use client';

import { Header, GameBox } from 'client/components';
import * as S from './style';

export default function Loading() {
  return (
    <S.Loading>
      <S.Background>
        <Header hasNorigae />
        <GameBox coin={11} count={11} isLoading={true} />
      </S.Background>
    </S.Loading>
  );
}
