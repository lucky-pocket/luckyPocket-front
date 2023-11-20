'use client';
import { FlippedYutIcon, YutIcon } from 'client/assets';
import * as S from './style';
import { Button } from 'common';
import { useRouter } from 'next/navigation';
import { Loading } from '..';
import { useState } from 'react';
import axios from 'axios';

interface GameProps {
  coin: number;
  count: number;
}

const Game: React.FC<GameProps> = ({ coin, count }) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleButtonClick = () => {
    if (coin !== 0) {
      setIsLoading((prev) => !prev);
    } else {
      alert('보유하신 잔액이 부족합니다');
    }
  };
  return (
    <S.GameContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Count>
            오늘 윷을 던진 횟수
            <div>{count}번</div>
          </S.Count>
          <S.Game>
            <S.YutBox>
              <YutIcon />
              <YutIcon />
              <YutIcon />
              <YutIcon />
            </S.YutBox>
          </S.Game>
          <S.BottomBox>
            <Button onClick={handleButtonClick} title='무료로 윷 던지기' />
            <S.Subtitle>
              <span>현재 보유중인 엽전 개수</span>
              {coin}개
            </S.Subtitle>
            <S.WarnMessage>
              하루에 한 번 무료로 던질 수 있으며 그 뒤로는 엽전 2냥을 사용해
              던질 수 있습니다.
            </S.WarnMessage>
            <S.Message>
              도 개는 1냥, 걸은 2냥, 윷은 3냥, 모는 5냥, 빽도는 -2냥을 얻게
              됩니다.
            </S.Message>
          </S.BottomBox>
        </>
      )}
    </S.GameContainer>
  );
};

export default Game;