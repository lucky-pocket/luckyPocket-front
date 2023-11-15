import { Coin, EyesIcon, LuckyPocket } from 'client/assets';
import * as S from './style';

interface propsType {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick: (e: any) => void;
}

const alarmModal = ({ modalRef, modalOutSideClick }: propsType) => {
  const data = [
    {
      svg: <LuckyPocket />,
      title: '복주머니가 왔어요!',
      time: '30분 전',
    },
    {
      svg: <EyesIcon />,
      title: '누군가 복주머니를 열람했어요!',
      time: '30분 전',
    },
  ];

  return (
    <S.Conatiner ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
      <S.Wrapper>
        <S.CoinWrapper>
          <Coin />
          <S.CoinCount>123</S.CoinCount>
        </S.CoinWrapper>
        <S.AlarmWrapper>
          {data.map((data, idx) => (
            <S.AlarmItem key={idx}>
              <S.AlarmTitle>
                {data.svg}
                <S.AlarmContent>{data.title}</S.AlarmContent>
              </S.AlarmTitle>
              <S.AlarmTime>{data.time}</S.AlarmTime>
            </S.AlarmItem>
          ))}
        </S.AlarmWrapper>
      </S.Wrapper>
    </S.Conatiner>
  );
};

export default alarmModal;
