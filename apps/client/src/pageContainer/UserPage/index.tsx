'use client';

import * as S from './style';
import { Header } from 'client/components';

interface UserProps {
  userId: number;
}

export default function User({ userId }: UserProps) {
  return (
    <S.User>
      <S.Background></S.Background>
    </S.User>
  );
}
