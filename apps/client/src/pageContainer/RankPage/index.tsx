'use client';

import { FilterModal, Header, SearchBar, UserList } from 'client/components';
import * as S from './style';
import { useState } from 'react';

export default function Rank() {
  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <S.Rank>
      <S.Background>
        <Header />
        <S.Conatiner>
          <SearchBar
            isShowFilterModal={isShowFilterModal}
            setIsShowFilterModal={setIsShowFilterModal}
            keyword={keyword}
            setKeyword={setKeyword}
          />
          {isShowFilterModal && <FilterModal />}
          <UserList />
        </S.Conatiner>
      </S.Background>
    </S.Rank>
  );
}
