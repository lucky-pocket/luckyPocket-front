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
}

const PocketList: React.FC<PocketListProps> = ({ pockets }) => {
  return (
    <S.PocketListContainer>
      <S.PocketDrawer>
        {pockets.map((pocket, index) => (
          <div key={pocket.id}>
            <Pocket
              isEmpty={pocket.isEmpty}
              isPublic={pocket.isPublic}
              sender={pocket.sender}
            />
          </div>
        ))}
        <S.Index>1/1</S.Index>
      </S.PocketDrawer>
    </S.PocketListContainer>
  );
};

export default PocketList;
