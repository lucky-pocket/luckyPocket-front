'use client';
import * as S from './style';
import Pocket from './pocket';

interface Pocket {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

interface PocketListProps {
  pockets: Pocket[];
  totalCount: number;
}

const PocketList: React.FC<PocketListProps> = ({ pockets, totalCount }) => {
  return (
    <S.PocketListContainer>
      <S.Title>Total Count: {totalCount}</S.Title>
      <S.PocketDrawer>
        {pockets.map((pocket, index) => (
          <div key={pocket.id}>
            <Pocket
              isEmpty={pocket.isEmpty}
              isPublic={pocket.isPublic}
              sender={pocket.sender}
            />
            <S.Index>{index + 1}</S.Index>
            <S.Message>복주머니에 덕담을 담아 나눠보세요!</S.Message>
            <S.Button />
            <S.WarnMessage>
              복주머니를 보내기 위해서는 엽전 1닢이 필요해요
            </S.WarnMessage>
          </div>
        ))}
      </S.PocketDrawer>
    </S.PocketListContainer>
  );
};

export default PocketList;
