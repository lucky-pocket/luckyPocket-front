'use client';

import * as S from './style';

const MainFooter = () => {
  return (
    <>
      <S.Message>복주머니에 덕담을 담아 나눠보세요!</S.Message>
      <S.Button>복주머니 전달하기</S.Button>
      <S.WarnMessage>
        복주머니를 보내기 위해서는 엽전 1닢이 필요해요
      </S.WarnMessage>
    </>
  );
};

export default MainFooter;
