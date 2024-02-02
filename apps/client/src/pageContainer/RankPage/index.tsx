'use client';

import { FilterModal, Header, SearchBar, UserList } from 'client/components';
import * as S from './style';
import { useState } from 'react';

export default function Rank() {
  const data = [
    {
      name: '전예빈',
      class: '2학년 2반',
      pocket: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
    {
      name: '서주미',
      class: '2학년 2반',
      coin: 24,
    },
  ];
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
        {isShowFilterModal && <FilterModal />}
      </S.Background>
    </S.Rank>
  );
}
