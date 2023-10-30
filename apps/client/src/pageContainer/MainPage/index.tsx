'use client';
import { Header } from 'client/components';
import * as S from './style';

export default function GamePage() {
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
      </S.Background>
    </S.Main>
  );
}
