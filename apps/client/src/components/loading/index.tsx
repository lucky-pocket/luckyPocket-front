'use client';
import { FlippedYutIcon, YutIcon } from 'client/assets';
import * as S from './style';

const Loading = () => {
  return (
    <>
      <S.Game>
        <S.YutBox>
          <span className='first'>
            <YutIcon />
          </span>
          <span className='second'>
            <YutIcon />
          </span>
          <span className='third'>
            <YutIcon />
          </span>
          <span className='fourth'>
            <FlippedYutIcon />
          </span>
        </S.YutBox>
      </S.Game>
      <S.Loading>윷 던지는 중...</S.Loading>
    </>
  );
};

export default Loading;
