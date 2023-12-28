'use client';

import { Header, WriteButton, UserList } from 'client/components';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import { useSelectedIdState } from 'client/stores';

export default function Search() {
  const { selectedId } = useSelectedIdState();

  return (
    <S.Search>
      <S.Background>
        <Header />
        <S.Container>
          <S.InputWrapper>
            <S.Input placeholder='찾고 싶은 사람의 이름을 검색해 보세요.' />
            <SearchIcon />
          </S.InputWrapper>
          <UserList />
        </S.Container>
        <WriteButton
          disabled={selectedId === null}
          nextLink='/write'
          beforeButton='/'
        />
      </S.Background>
    </S.Search>
  );
}
