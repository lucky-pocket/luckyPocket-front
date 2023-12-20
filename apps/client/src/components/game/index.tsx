'use client';
import { FlippedYutIcon, YutIcon } from 'client/assets';
import * as S from './style';
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
  const [showResult, setShowResult] = useState<boolean>(false);
  const [btnDisabled, setDisabled] = useState<boolean>(false);
  const handleButtonClick = () => {
    if (coin !== 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 5000);
    } else {
      alert('보유하신 잔액이 부족합니다');
      setDisabled(true);
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
          {showResult && (
            <S.Result>
              <div>빽도</div>
            </S.Result>
          )}
          <S.BottomBox>
            <S.Button
              onClick={handleButtonClick}
              title='윷 던지기'
              disabled={btnDisabled}
              isError={btnDisabled}
            />
            <S.Subtitle>
              <span>현재 보유중인 엽전 개수</span>
              {coin}개
            </S.Subtitle>
            <S.WarnMessage>
              1일 1회 무료로 던질 수 있습니다. 그 후 엽전 2닢을 소모해 던질 수
              있습니다.
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
