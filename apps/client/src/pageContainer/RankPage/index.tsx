'use client';

import { Header, SearchBar } from 'client/components';
import * as S from './style';
import { useState } from 'react';
import { PocketListType } from 'client/types';

import { API } from 'api/client/API';
import { userUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
export default function Rank() {
  const [option, setOption] = useState<'COIN' | 'POCKET'>('POCKET');

  const getRank = async (option: 'COIN' | 'POCKET') => {
    const response = await API.get(userUrl.getRank(option));
    return response.data;
  };

  const { data, refetch: refetchData } = useQuery<PocketListType>(
    ['getRank'],
    () => getRank(option)
  );

  const [isShowFilterModal, setIsShowFilterModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <S.Rank>
      <S.Background>
        <Header />
        {data && (
          <SearchBar
            isShowFilterModal={isShowFilterModal}
            setIsShowFilterModal={setIsShowFilterModal}
            keyword={keyword}
            setKeyword={setKeyword}
            data={data}
            refetchData={refetchData}
            setOption={setOption}
          />
        )}
      </S.Background>
    </S.Rank>
  );
}
