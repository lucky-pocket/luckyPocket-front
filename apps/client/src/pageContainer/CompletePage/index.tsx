'use client';

import { Header } from 'client/components';
import * as S from './style';
import { CompletePocket } from 'client/assets';
import { usePocketSendState } from 'client/stores';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Complete() {
  const { receiverName } = usePocketSendState();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 2000);
  }, []);

  return (
    <S.Complete>
      <S.Background>
        <Header hasNorigae />
        <S.ContentWrapper>
          <CompletePocket />
          <S.CompleteTextContainer>
            <div>
              <S.Name>{receiverName}</S.Name>
              <S.Text> 님께</S.Text>
            </div>
            <S.Text>덕담을 담은 복주머니를 선물 했어요!</S.Text>
          </S.CompleteTextContainer>
        </S.ContentWrapper>
      </S.Background>
    </S.Complete>
  );
}
