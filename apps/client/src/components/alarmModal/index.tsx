import { Coin, EyesIcon, LuckyPocket } from 'client/assets';
import * as S from './style';
import { useQuery } from '@tanstack/react-query';
import { API } from 'api/client/API';
import { userMyNoticeUrl, userMyUrl } from 'api/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface propsType {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick: (e: any) => void;
}

interface noticeType {
  id: string;
  kind: string;
  pocketId: number;
  checked: boolean;
  createdAt: string;
}

const AlarmModal = ({ modalRef, modalOutSideClick }: propsType) => {
  const getNotice = async () => {
    const response = await API.get(userMyNoticeUrl.getNotice());
    return response.data;
  };

  const { data, refetch } = useQuery(['getNotice'], () => getNotice());

  const getMyCoins = async () => {
    const response = await API.get(userMyUrl.getMyCoin());
    return response.data;
  };

  const { data: coinsData } = useQuery<{ coins: number }>(['getMyCoin'], () =>
    getMyCoins()
  );

  const patchNotice = async () => {
    await API.patch(userMyNoticeUrl.patchNotice());
    refetch();
  };

  useEffect(() => {
    return () => {
      patchNotice();
    };
  }, []);

  const router = useRouter();

  const detailDate = (a: any) => {
    const milliSeconds = (new Date() as any) - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  return (
    <S.Container ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
      <S.Wrapper>
        <S.CoinWrapper>
          <Coin />
          <S.CoinCount>{coinsData?.coins}</S.CoinCount>
        </S.CoinWrapper>
        <S.AlarmWrapper>
          {data &&
            data.notices.map((item: noticeType) => (
              <S.AlarmItem key={item.id} onClick={() => router.push('/')}>
                <S.AlarmTitle>
                  {item.kind === 'REVEALED' ? <EyesIcon /> : <LuckyPocket />}
                  <S.AlarmContent isRead={item.checked}>
                    {item.kind === 'REVEALED'
                      ? '누군가 복주머니를 열람했어요!'
                      : '복주머니가 왔어요!'}
                  </S.AlarmContent>
                </S.AlarmTitle>
                <S.AlarmTime>
                  {detailDate(new Date(item.createdAt))}
                </S.AlarmTime>
              </S.AlarmItem>
            ))}
        </S.AlarmWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default AlarmModal;
