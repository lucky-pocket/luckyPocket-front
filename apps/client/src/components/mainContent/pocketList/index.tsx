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
  const handlePocketClick = async (pocketId: number, isPublic: boolean) => {
    const { data, isLoading, isError } = usePocketQuery(pocketId);
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

  const drawer = [<I.Drawer />, <I.Drawer />, <I.Drawer />];

  return (
    <S.PocketListContainer>
      <S.Container>
        <S.ChevronBox onClick={handlePrevSlide} isVisible={slideIndex !== 0}>
          <I.ChevronIcon turn={'right'} />
        </S.ChevronBox>
        <S.PocketDrawer>
          <S.PocketBox slideIndex={slideIndex}>
            {getCurrentPockets().map((pocket) => (
              <div key={pocket.id}>
                <Pocket
                  isEmpty={pocket.isEmpty}
                  isPublic={pocket.isPublic}
                  sender={pocket.sender}
                  onClick={() => handlePocketClick(pocket.id, pocket.isPublic)}
                />
              </div>
            ))}
            <S.DrawerBox>
              {drawer.map((drawerComponent, index) => (
                <div key={index}>{drawerComponent}</div>
              ))}
            </S.DrawerBox>
          </S.PocketBox>
        </S.PocketDrawer>
        <S.ChevronBox
          onClick={handleNextSlide}
          isVisible={slideIndex !== maxIndex}
        >
          <I.ChevronIcon turn={'left'} />
        </S.ChevronBox>
      </S.Container>
      <S.Index>{`${slideIndex + 1}/${maxIndex + 1}`}</S.Index>
    </S.PocketListContainer>
  );
};

export default PocketList;
