'use client';

import Image from 'next/image';
import * as S from './style';
import { ErrorIcon } from 'client/assets';

export default function InspectionPage() {
  return (
    <S.Inspection>
      <S.Background>
        <S.Wrapper>
          <S.TitleWrapper>
            <ErrorIcon />
            <S.Title>
              서비스 <b>점검중</b> 입니다.
            </S.Title>
            <S.desc>
              점검시간 동안 해당 서비스 이용이 제한되는 점 양해 부탁드립니다.
            </S.desc>
          </S.TitleWrapper>
          <S.DetailWrapper>
            <S.Detail>점검 시간: 10월 23일(월) 오후 5시~12시</S.Detail>
            <S.Detail>점검 이유: 서비스 개선을 위한 점검입니다.</S.Detail>
          </S.DetailWrapper>
          <Image
            src='/images/inspection.png'
            alt='inspection'
            width={402}
            height={393}
          />
        </S.Wrapper>
      </S.Background>
    </S.Inspection>
  );
}
