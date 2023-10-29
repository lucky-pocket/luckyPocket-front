'use client';
import { Header } from 'client/components';
import * as S from './style';

export default function GamePage() {
  return (
    <S.Game>
      <S.Background>
        <Header hasNorigae />
      </S.Background>
    </S.Game>
  );
}
