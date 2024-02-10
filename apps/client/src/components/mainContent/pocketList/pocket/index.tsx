'use client';
import { useState, useRef, useEffect } from 'react';
import * as S from './style';
import { RevealModal } from 'client/components';
import { API } from 'api/client/API';
import { userMyNoticeUrl, pocketUrl } from 'api/client';
import { Sender } from 'client/types';

import { WriteBoard } from 'client/assets';
import { DetailPocketType } from 'client/types';

interface PocketProps {
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
  pocketId: number;
}

const Pocket: React.FC<PocketProps> = ({
  isEmpty,
  isPublic,
  pocketId,
  sender,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLock, setIsLock] = useState<boolean>(false);
  const [showContentModal, setShowContentModal] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [revealLockSender, setRevealLockSender] = useState<string>('');
  const [detailSender, setDetailSender] = useState<Sender | null>(null);

  const handlePocketClick = async () => {
    try {
      const pocketData = await getDetailPocket(pocketId);
      setContent(pocketData.content);
      setDetailSender(pocketData.sender);
      setShowContentModal(true);
    } catch (error) {
      console.error('Error fetching pocket data:', error);
    }
  };

  const getDetailPocket = async (pocketId: number) => {
    const response = await API.get<DetailPocketType>(
      pocketUrl.getDetailPocket(pocketId)
    );
    console.log(response.data);
    return response.data;
  };

  const lockPocketClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowContentModal(false);
    setShowModal(true);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (showContentModal && !modalRef.current?.contains(e.target)) {
        setShowContentModal(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [showContentModal]);

  return (
    <div>
      <S.PocketContainer onClick={handlePocketClick}>
        {isEmpty ? (
          isPublic ? (
            <S.Pocket>{sender && <S.Sender>{sender}</S.Sender>}</S.Pocket>
          ) : (
            <S.LockPocket onClick={() => setIsLock(true)} />
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
          <S.LockPocketMoney onClick={() => setIsLock(true)} />
        )}
      </S.PocketContainer>
      {showContentModal &&
        (isLock ? (
          <S.WriteBoxContainer>
            <S.WriteBoard ref={modalRef}>
              <p>{content}</p>
              {revealLockSender ? (
                <span>{revealLockSender}</span>
              ) : (
                <S.RevealButton onClick={lockPocketClick}>
                  누가 보냈는지 알아보기
                </S.RevealButton>
              )}
            </S.WriteBoard>
          </S.WriteBoxContainer>
        ) : (
          <S.WriteBoxContainer>
            <S.WriteBoard ref={modalRef}>
              <p>{content}</p>
              <span>{detailSender?.name}</span>
            </S.WriteBoard>
          </S.WriteBoxContainer>
        ))}
      {showModal && (
        <RevealModal
          setShowModal={setShowModal}
          setShowContentModal={setShowContentModal}
          setRevealLockSender={setRevealLockSender}
          pocketId={pocketId}
        />
      )}
    </div>
  );
};

export default Pocket;
