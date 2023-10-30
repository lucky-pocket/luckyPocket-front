'use client';

import { Norigae } from 'client/assets';
import * as S from './style';
import Image from 'next/image';

export default function Timeout() {
  return (
    <S.Timeout>
      <S.Background>
        <Norigae />
        <S.Wrapper>
          <Image src='/images/504.png' alt='timeout' width={346} height={128} />
          <S.ContentWrapper>
            <S.Title>죄송합니다, 시간이 초과 되었습니다.</S.Title>
            <S.Desc>
              시간 초과로 인해 페이지 로드에 실패하였습니다.
              <br />
              잠시 후 다시 시도해주세요.
            </S.Desc>
          </S.ContentWrapper>
        </S.Wrapper>
      </S.Background>
    </S.Timeout>
  );
}
