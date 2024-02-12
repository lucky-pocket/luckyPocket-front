import { YutIcon } from 'client/assets';
import * as S from './style';
import { Loading } from '..';
import { useState } from 'react';
import { API } from 'api/client/API';
import { userMyUrl, gameUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
import { FreeTicketInfo } from 'client/types';
interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [btnDisabled, setDisabled] = useState<boolean>(false);
  const [isFree, setIsFree] = useState<boolean>(false);

  const getMyCoins = async () => {
    const response = await API.get(userMyUrl.getMyCoin());
    return response.data;
  };

  const { data: coinsData } = useQuery<{ coins: number }>(['getMyCoin'], () =>
    getMyCoins()
  );

  const getFreeTicket = async () => {
    const response = await API.get(gameUrl.getFreeTicket());
    console.log(response.data);
    if (response.data.ticketCount === 1) {
      setIsFree(true);
    }
    return response.data;
  };

  const { data: freeTicket } = useQuery<FreeTicketInfo>(['getFreeTicket'], () =>
    getFreeTicket()
  );

  const getGameCount = async () => {
    const response = await API.get(gameUrl.getGameCount());
    return response.data.count;
  };

  const { data: count } = useQuery<number>(['getGameCount'], () =>
    getGameCount()
  );

  const postYut = async () => {
    const response = await API.post(gameUrl.postYut(), {
      free: isFree,
    });

    return response.data.output;
  };

  const { data } = useQuery(['postYut', showResult], () => postYut(), {
    enabled: showResult,
  });

  const handleButtonClick = async () => {
    if (coinsData !== undefined && coinsData.coins !== 0) {
      try {
        setIsLoading(true);
        setShowResult(true);
        setDisabled(true);
      } catch (error) {
        console.error(error);
      } finally {
        setInterval(() => {
          setIsLoading(false);
        }, 3000);
        setInterval(() => {
          window.location.reload();
        }, 6000);
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
            <div> {count}번</div>
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
              {freeTicket?.ticketCount === 0 ? '윷던지기' : '무료로 윷 던지기'}
            </S.Button>
            <S.Subtitle>
              <span>현재 보유중인 엽전 개수</span>
              {coinsData ? `${coinsData.coins}개` : '불러오는 중...'}
            </S.Subtitle>
            <S.WarnMessage>
              1일 1회 무료로 던질 수 있습니다. 그 후 엽전 2닢을 소모해 던질 수
              있습니다.
            </S.WarnMessage>
            <S.Message>
              도 개는 2냥, 걸은 3냥, 윷은 4냥, 모는 6냥, 빽도는 -2냥을 얻게
              됩니다.
            </S.Message>
          </S.BottomBox>
        </>
      )}
    </S.GameContainer>
  );
};

export default Game;
