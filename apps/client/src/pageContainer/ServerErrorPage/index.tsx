'use client';

import { Norigae } from 'client/assets';
import * as S from './style';
import Image from 'next/image';

export default function ServerError() {
  return (
    <S.ServerError>
      <S.Background>
        <Norigae />
        <S.Wrapper>
          <Image
            src='/images/500.png'
            alt='serverError'
            width={346}
            height={128}
          />
          <S.ContentWrapper>
            <S.Title>죄송합니다, 페이지가 작동하지 않습니다.</S.Title>
            <S.Desc>
              현재 (페이지 링크)에서
              <br />
              요청을 처리할 수 없습니다.
            </S.Desc>
          </S.ContentWrapper>
        </S.Wrapper>
      </S.Background>
    </S.ServerError>
  );
}
