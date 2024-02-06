'use client';

import { Header, SearchBar, UserList } from 'client/components';
import * as S from './style';
import { useState } from 'react';
import { StandardType, PocketListType } from 'client/types';

export default function Rank({ pocketList }: { pocketList?: PocketListType }) {
  const data = {
    users: [
      {
        userId: 1,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'TEACHER',
        grade: 1,
        class: null,
      },
      {
        userId: 2,
        name: '서주미',
        gender: 'FEMALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 3,
      },
      {
        userId: 3,
        name: '김하온',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 2,
        class: 2,
      },
      {
        userId: 4,
        name: '장예슬',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 2,
        class: 4,
      },
      {
        userId: 5,
        name: '전예빈',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
      {
        userId: 6,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
      {
        userId: 6,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
      {
        userId: 6,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
      {
        userId: 6,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
      {
        userId: 6,
        name: '김원욱',
        gender: 'MALE',
        amount: 23123,
        userType: 'STUDENT',
        grade: 1,
        class: 2,
      },
    ],
  };
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <S.Rank>
      <S.Background>
        <Header />
        <SearchBar
          isShowFilterModal={isShowFilterModal}
          setIsShowFilterModal={setIsShowFilterModal}
          keyword={keyword}
          setKeyword={setKeyword}
          data={data}
        />
      </S.Background>
    </S.Rank>
  );
}
