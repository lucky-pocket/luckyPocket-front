/** @jsxImportSource @emotion/react */

import axios from 'axios';
import * as S from './style';
import Pocket from './pocket';
import { useQuery } from '@tanstack/react-query';
import * as I from 'client/assets';
import { useState } from 'react';

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
  return useQuery(['pocket', pocketId], () =>
    axios.get(`${process.env.CLIENT_API_URL}/pockets/${pocketId}`)
  );
};

const PocketList: React.FC<PocketListProps> = ({ pockets }) => {
  const { data, isLoading, isError } = usePocketQuery(1);
  const handlePocketClick = async (pocketId: number, isPublic: boolean) => {
    if (isPublic) {
      console.log(data);

      if (!isLoading && !isError) {
        console.log('Fetched data:', data);
      }
    } else {
    }
  };

  const [slideIndex, setSlideIndex] = useState<number>(0);

  const maxIndex = Math.ceil(pockets.length / 16);
  const pocketsPerPage = 12;

  const getCurrentPockets = () => {
    const startIndex = slideIndex * pocketsPerPage;
    const endIndex = startIndex + pocketsPerPage;
    return pockets.slice(startIndex, endIndex);
  };

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(maxIndex);
    } else {
      setSlideIndex((curIndex) => curIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (maxIndex === slideIndex) {
      setSlideIndex(0);
    } else {
      setSlideIndex((curIndex) => curIndex + 1);
    }
  };

  return (
    <S.PocketListContainer>
      <S.Container>
        {pockets.length >= pocketsPerPage && (
          <S.ChevronBox onClick={handlePrevSlide}>
            <I.ChevronIcon turn={'right'} />
          </S.ChevronBox>
        )}
        <S.PocketDrawer>
          <S.PocketBox slideIndex={slideIndex}>
            {getCurrentPockets().map((pocket, index) => (
              <div key={pocket.id}>
                <Pocket
                  isEmpty={pocket.isEmpty}
                  isPublic={pocket.isPublic}
                  sender={pocket.sender}
                  onClick={() => handlePocketClick(pocket.id, pocket.isPublic)}
                />
              </div>
            ))}
          </S.PocketBox>
        </S.PocketDrawer>
        {pockets.length >= pocketsPerPage && (
          <S.ChevronBox onClick={handleNextSlide}>
            <I.ChevronIcon turn={'left'} />
          </S.ChevronBox>
        )}
      </S.Container>
      <S.Index>{`${slideIndex + 1}/${maxIndex + 1}`}</S.Index>
    </S.PocketListContainer>
  );
};

export default PocketList;
