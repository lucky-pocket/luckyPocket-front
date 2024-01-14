'use client';
import { useState } from 'react';
import * as S from './style';
import { RevealModal } from 'client/components';

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
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <S.PocketContainer onClick={onClick}>
      {isEmpty ? (
        isPublic ? (
          <S.Pocket>{sender && <S.Sender>{sender}</S.Sender>}</S.Pocket>
        ) : (
          <S.LockPocket onClick={() => setShowModal(true)} />
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
        <S.LockPocketMoney onClick={() => setShowModal(true)} />
      )}
      {showModal && <RevealModal setShowModal={setShowModal} />}
    </S.PocketContainer>
  );
};

export default Pocket;
