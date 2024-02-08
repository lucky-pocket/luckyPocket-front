import { FlippedYutIcon, YutIcon } from 'client/assets';
import * as S from './style';
import { useRouter } from 'next/navigation';
import { Loading } from '..';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GameResult } from 'client/types';
import { API } from 'api/client/API';
import { userMyUrl, gameUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
interface GameProps {
  count: number;
}

const Game: React.FC<GameProps> = ({ count }) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [btnDisabled, setDisabled] = useState<boolean>(false);
  const [coin, setCoin] = useState<number>(10);

  const getMyCoins = async () => {
    const response = await API.get(userMyUrl.getMyCoin());
    return response.data;
  };

  const { data: coinsData } = useQuery<{ coins: number }>(['getMyCoin'], () =>
    getMyCoins()
  );

  const postYut = async () => {
    const response = await API.post(gameUrl.postYut(), { free: false });

    return response.data.output;
  };

  const { data } = useQuery(['postYut'], () => postYut());

  const handleButtonClick = async () => {
    if (coin !== 0) {
      setIsLoading(true);
      try {
        await postYut();
        setShowResult(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
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
          {showResult && <S.Result>{data}</S.Result>}
          <S.BottomBox>
            <S.Button
              onClick={handleButtonClick}
              disabled={btnDisabled}
              isError={btnDisabled}
            >
              윷 던지기
            </S.Button>
            <S.Subtitle>
              <span>현재 보유중인 엽전 개수</span>
              {coinsData?.coins}개
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
