'use client';

import * as S from './style';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <S.FooterBox>
      <S.Message>복주머니에 덕담을 담아 나눠보세요!</S.Message>
      <Link href='/search'>
        <S.Button>복주머니 전달하기</S.Button>
      </Link>
      <S.WarnMessage>
        복주머니를 보내기 위해서는 엽전 5냥이 필요해요
      </S.WarnMessage>
    </S.FooterBox>
  );
};

export default MainFooter;
