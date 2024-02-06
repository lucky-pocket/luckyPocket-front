'use client';

import React from 'react';
import * as S from './style';
import { userType } from 'common';
import { NoSearch, UserCard } from '..';
import { PocketType } from 'client/types';

interface Props {
  coin?: number;
  pocket?: number;
  userList: PocketType[];
}

const UserList: React.FC<Props> = ({ coin, pocket, userList }) => {
  return (
    <S.UserListContainer>
      {userList.length ? (
        <S.UserList>
          {userList.map((user, index) => (
            <UserCard key={index} user={user} rank={index + 1} />
          ))}
        </S.UserList>
      ) : (
        <S.NoSearchContainer>
          <NoSearch />
        </S.NoSearchContainer>
      )}
    </S.UserListContainer>
  );
};

export default UserList;
