'use client';

import { Header, PocketList } from 'client/components';
import * as S from './style';

export default function Main() {
  const listData = {
    pockets: [
      {
        id: 1,
        isEmpty: true,
        sender: '김원욱',
        isPublic: false,
      },
      {
        id: 2,
        isEmpty: false,
        sender: null,
        isPublic: false,
      },
      {
        id: 3,
        isEmpty: false,
        sender: '서주미',
        isPublic: false,
      },
      {
        id: 4,
        isEmpty: true,
        sender: null,
        isPublic: true,
      },
      {
        id: 5,
        isEmpty: false,
        sender: '김하온',
        isPublic: true,
      },
    ],
    totalCount: 32,
  };
  return (
    <S.Main>
      <S.Background>
        <Header hasNorigae />
        <S.TitleBox>
          <S.Title>
            <span>홍길동</span>님
          </S.Title>
        </S.TitleBox>
        <S.SubTitle>
          <span>{listData.totalCount}</span>개의 복주머니를 받았어요
        </S.SubTitle>
        <PocketList pockets={listData.pockets} />
        <S.Message>복주머니에 덕담을 담아 나눠보세요!</S.Message>
        <S.Button>복주머니 전달하기</S.Button>
        <S.WarnMessage>
          복주머니를 보내기 위해서는 엽전 1닢이 필요해요
        </S.WarnMessage>
      </S.Background>
    </S.Main>
  );
}
