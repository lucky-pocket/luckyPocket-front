'use client';

import React, { useState } from 'react';

import * as I from 'client/assets';
import * as S from './style';
import { userType } from 'common';
import { UserCard } from '..';

interface Props {
  coin?: number;
  pocket?: number;
}

const UserList: React.FC<Props> = ({ coin, pocket }) => {
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
  ];
  const [userList, setUserList] = useState<userType[]>(data);
  return (
    <>
      {userList.length ? (
        <S.UserList>
          {userList.map((user, index) => (
            <UserCard key={index} user={user} rank={index} />
          ))}
        </S.UserList>
      ) : (
        <S.NoSearchContainer>
          {/* <NoSearch
            textArr={[
                '해당 정보를 가진 학생을 찾을 수 없어요.',
                '오타, 띄어쓰기 등을 확인 해주세요.',
            ]}
        /> */}
        </S.NoSearchContainer>
      )}
    </>
  );
};

export default UserList;
