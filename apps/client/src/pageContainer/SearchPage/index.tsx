'use client';

import { Header, WriteButton, UserList, NoSearch } from 'client/components';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import {
  useSelectedIdState,
  useSearchUserState,
  useSearchedUsersState,
} from 'client/stores';
import { useEffect } from 'react';

export default function Search() {
  const userList = [
    { userId: 1, grade: 1, class: 1, name: '남도일' },
    { userId: 2, grade: 2, class: 1, name: '유미란' },
    { userId: 3, grade: 3, class: 3, name: '하인성' },
    { userId: 4, grade: 1, class: 2, name: '서가영' },
    { userId: 5, grade: 2, class: 4, name: '유명한' },
    { userId: 6, grade: 1, class: 1, name: '남도일' },
    { userId: 7, grade: 2, class: 1, name: '유미란' },
    { userId: 8, grade: 3, class: 3, name: '하인성' },
    { userId: 9, grade: 1, class: 2, name: '서가영' },
    { userId: 10, grade: 2, class: 4, name: '유명한' },
    { userId: 11, grade: 1, class: 1, name: '남도일' },
    { userId: 12, grade: 2, class: 1, name: '유미란' },
    { userId: 13, grade: 3, class: 3, name: '하인성' },
    { userId: 14, grade: 1, class: 2, name: '서가영' },
    { userId: 15, grade: 2, class: 4, name: '유명한' },
  ];

  const { selectedId } = useSelectedIdState();
  const { searchUser, setSearchUser } = useSearchUserState();
  const { searchedUsers, setSearchedUsers } = useSearchedUsersState();

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  useEffect(() => {
    const filteredUsers = userList.filter(({ name }) =>
      name.includes(searchUser)
    );
    setSearchedUsers(filteredUsers);
  }, [searchUser, setSearchedUsers]);

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
            <UserList searchedUsers={searchedUsers} />
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
