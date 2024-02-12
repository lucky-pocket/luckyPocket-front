/** @jsxImportSource @emotion/react */

import axios from 'axios';
import * as S from './style';
import Pocket from './pocket';
import * as I from 'client/assets';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MyPocketListType } from 'client/types';
import { API } from 'api/client/API';
import { userMyNoticeUrl, pocketUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';

interface Pocket {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

interface PocketListProps {
  pockets?: Pocket[];
  refetchPocketList: () => void;
}

const PocketList: React.FC<PocketListProps> = ({
  pockets,
  refetchPocketList,
}) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const maxIndex = Math.ceil((pockets?.length || 0) / 12);
  const pocketsPerPage = 12;

  const getCurrentPockets = () => {
    const startIndex = slideIndex * pocketsPerPage;
    const endIndex = startIndex + pocketsPerPage;
    return pockets?.slice(startIndex, endIndex);
  };

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(maxIndex);
    } else {
      setSlideIndex((curIndex) => curIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (maxIndex - 1 === slideIndex) {
      setSlideIndex(0);
    } else {
      setSlideIndex((curIndex) => curIndex + 1);
    }
  };

  const drawer = [
    <I.Drawer key={1} />,
    <I.Drawer key={2} />,
    <I.Drawer key={3} />,
  ];

  return (
    <S.PocketListContainer>
      <S.Container>
        <S.ChevronBox onClick={handlePrevSlide} isVisible={slideIndex !== 0}>
          <I.ChevronIcon turn={'right'} />
        </S.ChevronBox>
        <S.PocketDrawer>
          <S.PocketBox slideIndex={slideIndex}>
            {getCurrentPockets()?.map((pocket) => (
              <div key={pocket.id}>
                <Pocket
                  isEmpty={pocket.isEmpty}
                  isPublic={pocket.isPublic}
                  sender={pocket.sender}
                  pocketId={pocket.id}
                  refetchPocketList={refetchPocketList}
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
          isVisible={!!pockets && pockets.length > 12}
        >
          <I.ChevronIcon turn={'left'} />
        </S.ChevronBox>
      </S.Container>
      <S.Index>
        {pockets?.length === 0
          ? '0/0'
          : `
        ${slideIndex + 1}/${maxIndex}`}
      </S.Index>
    </S.PocketListContainer>
  );
};

export default PocketList;
