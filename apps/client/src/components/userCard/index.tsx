'use client';

import * as I from 'client/assets';
import * as S from './style';
import { userType } from 'common';

interface Props {
  user: userType;
  rank: number;
}

const UserCard: React.FC<Props> = ({ user, rank }) => {
  return (
    <S.UserCard>
      <S.Corner rank={rank}>{rank}</S.Corner>
      <I.Rabbit1 />
      <S.DescBox>
        <S.Person>
          <S.Name>{user.name}</S.Name>
          <S.Class>{user.class}</S.Class>
        </S.Person>
        <S.Amount>
          <I.LuckyPocket />
          <S.Score>{100}</S.Score>
        </S.Amount>
      </S.DescBox>
    </S.UserCard>
  );
};

export default UserCard;
