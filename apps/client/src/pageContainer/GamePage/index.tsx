'use client';

import { Header, GameBox } from 'client/components';
import * as S from './style';

export default function Game() {
  return (
    <S.Game>
      <S.Background>
        <Header hasNorigae />
        <GameBox coin={0} count={11} />
      </S.Background>
    </S.Game>
  );
}
