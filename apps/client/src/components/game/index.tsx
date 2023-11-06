'use client';
import { BoardIcon, YutIcon } from 'client/assets';
import * as S from './style';

const Game = () => {
  return (
    <S.Game>
      <S.YutBox>
        <YutIcon />
        <YutIcon />
        <YutIcon />
        <YutIcon />
      </S.YutBox>
    </S.Game>
  );
};

export default Game;
