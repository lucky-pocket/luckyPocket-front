'use client';
import { Norigae } from 'client/assets';
import * as S from './style';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <S.Main>
      <S.Background>
        <Norigae />
        <S.Wrapper>
          <Image
            src='/images/404.png'
            alt='notFound'
            width={353}
            height={128}
          />
          <S.ContentWrapper>
            <S.Title>죄송합니다, 페이지를 찾을 수 없습니다.</S.Title>
            <S.Desc>
              페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.
              <br />
              입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </S.Desc>
          </S.ContentWrapper>
        </S.Wrapper>
      </S.Background>
    </S.Main>
  );
}
