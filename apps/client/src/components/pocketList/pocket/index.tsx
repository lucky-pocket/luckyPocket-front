'use client';
import * as S from './style';

interface PocketProps {
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

const Pocket: React.FC<PocketProps> = ({ isEmpty, isPublic, sender }) => {
  return (
    <>
      {isEmpty ? (
        isPublic ? (
          <S.Pocket />
        ) : (
          <S.LockPocket />
        )
      ) : isPublic ? (
        <S.PocketMoney />
      ) : (
        <S.LockPocketMoney />
      )}
    </>
  );
};

export default Pocket;
