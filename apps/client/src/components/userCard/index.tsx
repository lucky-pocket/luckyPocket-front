'use client';

import React from 'react';
import * as I from 'client/assets';
import * as S from './style';
import { PocketType } from 'client/types';
import Link from 'next/link';

interface Props {
  user: PocketType;
  rank: number;
  selectedStandard: '복주머니' | '엽전';
}

const UserCard: React.FC<Props> = ({ user, rank, selectedStandard }) => {
  const rabbitComponents = [
    <I.Rabbit1 key={1} />,
    <I.Rabbit2 key={2} />,
    <I.Rabbit3 key={3} />,
    <I.Rabbit4 key={4} />,
  ];

  const randomIndex = Math.floor(Math.random() * rabbitComponents.length);

  return (
    <Link href={`/users/${user.userId}`}>
      <S.UserCard>
        <S.RabbitBox>
          <S.Corner rank={rank}>{rank}</S.Corner>
          {rabbitComponents[randomIndex]}
        </S.RabbitBox>
        <S.DescBox>
          <S.Person>
            <S.Name>{user.name}</S.Name>
            <S.Class>
              {user.grade}학년 {user.class}반
            </S.Class>
          </S.Person>
          <S.Amount>
            {selectedStandard === '복주머니' ? <I.LuckyPocket /> : <I.Coin />}
            <S.Score>{100}</S.Score>
          </S.Amount>
        </S.DescBox>
      </S.UserCard>
    </Link>
  );
};

export default UserCard;
