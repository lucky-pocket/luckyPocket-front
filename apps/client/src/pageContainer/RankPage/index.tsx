'use client';

import { Header, UserList } from 'client/components';
import * as S from './style';
import { UserCard } from 'client/components';

export default function Rank() {
  return (
    <S.Rank>
      <S.Background>
        <Header hasNorigae />
        <UserList />
      </S.Background>
    </S.Rank>
  );
}
