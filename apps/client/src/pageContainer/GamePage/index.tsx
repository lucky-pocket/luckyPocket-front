'use client';

import { Header, GameBox } from 'client/components';
import * as S from './style';

export default function Game() {
  return (
    <S.Game>
      <S.Background>
        <Header hasNorigae />
        <GameBox />
      </S.Background>
    </S.Game>
  );
}
