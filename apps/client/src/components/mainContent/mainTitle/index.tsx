'use client';

import * as S from './style';
import { MyInfoType } from 'client/types';

interface MainTitleProps {
  totalCount?: number;
  userInfo?: MyInfoType;
}

const MainTitle: React.FC<MainTitleProps> = ({ totalCount, userInfo }) => {
  return (
    <S.TitleBox>
      <S.Title>
        <span>{userInfo?.name}</span>님
      </S.Title>
      <S.SubTitle>
        <span>{totalCount}</span>개의 복주머니를 받았어요
      </S.SubTitle>
    </S.TitleBox>
  );
};

export default MainTitle;
