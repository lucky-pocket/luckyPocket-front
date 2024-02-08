import { FlippedYutIcon, YutIcon } from 'client/assets';
import * as S from './style';
import { useRouter } from 'next/navigation';
import { Loading } from '..';
import { useState } from 'react';
import axios from 'axios';
import { GameResult } from 'client/types';

interface GameProps {
  count: number;
}

const Game: React.FC<GameProps> = ({ count }) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [btnDisabled, setDisabled] = useState<boolean>(false);
  const [coin, setCoin] = useState<number>(10);
  const [result, setResult] = useState<string>('');
  const handleButtonClick = async () => {
    if (coin !== 0) {
      setIsLoading(true);
      try {
        const accessToken = document.cookie;
        console.log(accessToken);
        const response = await axios.post<GameResult>(
          `${process.env.NEXT_PUBLIC_CLIENT_API_URL}games/yut`,
          { free: true }, // 요청 데이터 추가
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, // JWT 토큰 추가
            },
          }
        );
        const { coinsEarned } = response.data;
        const updatedCoin = coin + coinsEarned;
        setCoin(updatedCoin);
        setShowResult(true);
        setResult(response.data.output);
      } catch (error) {
        console.error('윷 던지기 요청 중 오류 발생:', error);
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
          {showResult && <S.Result>{result}</S.Result>}
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
