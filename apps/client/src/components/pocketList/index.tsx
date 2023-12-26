'use client';
import * as S from './style';
import Pocket from './pocket';
import { useQuery } from '@tanstack/react-query';

interface Pocket {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

interface PocketListProps {
  pockets: Pocket[];
}

const usePocketQuery = (pocketId: number) => {
  return useQuery(['pocket', pocketId], async () => {
    const response = await fetch(
      `https://${process.env.CLIENT_API_URL}/pockets/${pocketId}`
    );
    return response.json();
  });
};

const PocketList: React.FC<PocketListProps> = ({ pockets }) => {
  const handlePocketClick = async (pocketId: number, isPublic: boolean) => {
    if (isPublic) {
      const { data, isLoading, isError } = usePocketQuery(pocketId);

      if (!isLoading && !isError) {
        console.log('Fetched data:', data);
      }
    } else {
      alert('틀림');
    }
  };
  return (
    <S.PocketListContainer>
      <S.PocketDrawer>
        {pockets.map((pocket, index) => (
          <div key={pocket.id}>
            <Pocket
              isEmpty={pocket.isEmpty}
              isPublic={pocket.isPublic}
              sender={pocket.sender}
              onClick={() => handlePocketClick(pocket.id, pocket.isPublic)}
            />
          </div>
        ))}
      </S.PocketDrawer>
      <S.Index>1/1</S.Index>
    </S.PocketListContainer>
  );
};

export default PocketList;
