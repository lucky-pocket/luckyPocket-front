'use client';

import * as I from 'client/assets';
import * as S from './style';
import { userType } from 'common';

interface Props {
  user: userType;
  rank: number;
}

const UserCard: React.FC<Props> = ({ user, rank }) => {
  const rabbitComponents = [
    <I.Rabbit1 />,
    <I.Rabbit2 />,
    <I.Rabbit3 />,
    <I.Rabbit4 />,
  ];

  const randomIndex = Math.floor(Math.random() * rabbitComponents.length);

  return (
    <S.UserCard>
      <S.RabbitBox>
        <S.Corner rank={rank}>{rank}</S.Corner>
        {rabbitComponents[randomIndex]}
      </S.RabbitBox>
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
