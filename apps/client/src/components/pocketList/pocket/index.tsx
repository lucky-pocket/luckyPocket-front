'use client';
import * as S from './style';

interface PocketProps {
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
  onClick?: () => void;
}

const Pocket: React.FC<PocketProps> = ({
  isEmpty,
  isPublic,
  sender,
  onClick,
}) => {
  return (
    <S.PocketContainer onClick={onClick}>
      {isEmpty ? (
        isPublic ? (
          <S.Pocket>{sender && <S.Sender>{sender}</S.Sender>}</S.Pocket>
        ) : (
          <S.LockPocket />
        )
      ) : isPublic ? (
        sender ? (
          <S.PocketMoney>
            {sender && <S.Sender>{sender}</S.Sender>}
          </S.PocketMoney>
        ) : (
          <S.PocketMoney />
        )
      ) : (
        <S.LockPocketMoney />
      )}
    </S.PocketContainer>
  );
};

export default Pocket;
