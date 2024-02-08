'use client';

import {
  Header,
  WriteButton,
  SearchUserList,
  NoSearch,
} from 'client/components';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import { useSearchedUsersState } from 'client/stores';
import { useQuery } from '@tanstack/react-query';
import { pocketUrl } from 'api/client';
import { API } from 'api/client/API';
import { useEffect } from 'react';
import { UsersType } from 'client/types';

export default function Search() {
  const useUserSearch = async (query: string) => {
    const response = await API.get(pocketUrl.getUserSearch(query));
    return response.data;
  };

  const { selectedId } = useSearchedUsersState();
  const { searchUser, setSearchUser } = useSearchedUsersState();
  const { searchedUsers, setSearchedUsers } = useSearchedUsersState();

  const userSearchResult = useUserSearch(searchUser);
  const { data } = useQuery<{ users: UsersType[] }>(
    ['getUserSearch'],
    () => userSearchResult
  );

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const filteredUsers = data.users.filter(({ name }) =>
        name.includes(searchUser)
      );
      setSearchedUsers(filteredUsers);
    }
  }, [data, searchUser, setSearchedUsers]);

  return (
    <S.Search>
      <S.Background>
        <Header />
        <S.Container>
          <S.InputWrapper>
            <S.Input
              placeholder='찾고 싶은 사람의 이름을 검색해 보세요.'
              onChange={handleSearchUser}
              value={searchUser}
            />
            <SearchIcon />
          </S.InputWrapper>
          {searchedUsers.length === 0 ? (
            <S.ContentContainer>
              <NoSearch />
            </S.ContentContainer>
          ) : (
            <SearchUserList searchedUsers={searchedUsers} />
          )}
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
