'use client';

import { Header } from 'client/components';
import * as S from './style';
import { CompletePocket } from 'client/assets';

export default function Complete() {
  return (
    <S.Complete>
      <S.Background>
        <Header hasNorigae />
        <S.ContentWrapper>
          <CompletePocket />
          <S.CompleteTextContainer>
            <div>
              <S.Name>홍길동</S.Name>
              <S.Text> 님께</S.Text>
            </div>
            <S.Text>덕담을 담은 복주머니를 선물 했어요!</S.Text>
          </S.CompleteTextContainer>
        </S.ContentWrapper>
      </S.Background>
    </S.Complete>
  );
}
