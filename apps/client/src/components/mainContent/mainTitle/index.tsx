'use client';

import * as S from './style';

interface MainTitleProps {
  totalCount: number;
}

const MainTitle: React.FC<MainTitleProps> = ({ totalCount }) => {
  return (
    <S.TitleBox>
      <S.Title>
        <span>홍길동</span>님
      </S.Title>
      <S.SubTitle>
        <span>{totalCount}</span>개의 복주머니를 받았어요
      </S.SubTitle>
    </S.TitleBox>
  );
};

export default MainTitle;
