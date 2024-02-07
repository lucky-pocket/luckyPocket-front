'use client';

import React from 'react';
import * as S from './style';
import { NoSearch, UserCard } from '..';
import { PocketType } from 'client/types';

interface Props {
  userList: PocketType[];
  selectedStandard: '복주머니' | '엽전';
}

const UserList: React.FC<Props> = ({ userList, selectedStandard }) => {
  return (
    <S.UserListContainer>
      {userList.length ? (
        <S.UserList>
          {userList.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              rank={index + 1}
              selectedStandard={selectedStandard}
            />
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
