'use client';

import { useState } from 'react';
import { Header, UserItem, WriteButton } from 'client/components';
import * as S from './style';
import { SearchIcon } from 'client/assets';

export default function Search() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const userList = [
    { id: '1', grade: '1', class: '1', name: '남도일' },
    { id: '2', grade: '2', class: '1', name: '유미란' },
    { id: '3', grade: '3', class: '3', name: '하인성' },
    { id: '4', grade: '1', class: '2', name: '서가영' },
    { id: '5', grade: '2', class: '4', name: '유명한' },
    { id: '6', grade: '1', class: '1', name: '남도일' },
    { id: '7', grade: '2', class: '1', name: '유미란' },
    { id: '8', grade: '3', class: '3', name: '하인성' },
    { id: '9', grade: '1', class: '2', name: '서가영' },
    { id: '10', grade: '2', class: '4', name: '유명한' },
    { id: '11', grade: '1', class: '1', name: '남도일' },
    { id: '12', grade: '2', class: '1', name: '유미란' },
    { id: '13', grade: '3', class: '3', name: '하인성' },
    { id: '14', grade: '1', class: '2', name: '서가영' },
    { id: '15', grade: '2', class: '4', name: '유명한' },
  ];

  const handleItemClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <S.Search>
      <S.Background>
        <Header />
        <S.Container>
          <S.InputWrapper>
            <S.Input placeholder='찾고 싶은 사람의 이름을 검색해 보세요.' />
            <SearchIcon />
          </S.InputWrapper>
          <S.UserListWrapper>
            {userList.map(({ id, grade, class: userClass, name }, idx) => (
              <UserItem
                key={idx}
                id={id}
                isClicked={selectedId === id}
                onClick={() => handleItemClick(id)}
              >
                {grade}학년 {userClass}반 {name}
              </UserItem>
            ))}
            <S.BackgroundFilter />
          </S.UserListWrapper>
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
