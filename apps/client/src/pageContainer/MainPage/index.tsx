'use client';

import { Header, MainContent } from 'client/components';
import * as S from './style';
import { PocketListType } from 'client/types';
interface Props {
  pocketList: PocketListType[];
}

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
      {
        id: 6,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 7,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 8,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 9,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 10,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 11,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 12,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 13,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 14,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 15,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 16,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 17,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 18,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 19,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 20,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 21,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 22,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 23,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 24,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 25,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
      {
        id: 26,
        isEmpty: true,
        sender: '옙인',
        isPublic: true,
      },
    ],
    totalCount: 32,
  };
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <MainContent
          pockets={listData.pockets}
          totalCount={listData.totalCount}
        />
      </S.Background>
    </S.Main>
  );
}
