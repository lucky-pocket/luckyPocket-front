'use client';

import { Header, PocketList } from 'client/components';
import * as S from './style';

export default function Main() {
  const listData = {
    pockets: [
      {
        id: 1,
        isEmpty: true,
        sender: '김원욱',
        isPublic: false,
      },
      {
        id: 2,
        isEmpty: false,
        sender: null,
        isPublic: false,
      },
      {
        id: 3,
        isEmpty: false,
        sender: '서주미',
        isPublic: false,
      },
      {
        id: 4,
        isEmpty: true,
        sender: null,
        isPublic: true,
      },
      {
        id: 5,
        isEmpty: false,
        sender: '김하온',
        isPublic: true,
      },
    ],
    totalCount: 32,
  };
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <PocketList
          pockets={listData.pockets}
          totalCount={listData.totalCount}
        />
      </S.Background>
    </S.Main>
  );
}
