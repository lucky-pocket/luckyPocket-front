'use client';
import * as S from './style';
import { API } from 'api/client/API';
import { userMyPocketUrl } from 'api/client';
import { Sender } from 'client/types';

interface RevealModalProps {
  setShowModal: (value: boolean) => void;
  setShowContentModal: (value: boolean) => void;
  setDetailSender: (value: Sender | null) => void;
  setIsLock: (value: boolean) => void;
  pocketId: number;
}

const RevealModal: React.FC<RevealModalProps> = ({
  setShowModal,
  setShowContentModal,
  pocketId,
  setIsLock,
  setDetailSender,
}) => {
  const handlePocketClick = async () => {
    setShowModal(false);
    try {
      const name = await postMyPocketName(pocketId);
      console.log(name);
      setShowContentModal(true);
      setIsLock(false);
    } catch (error) {
      console.error('Error fetching pocket data:', error);
    }
  };

  const postMyPocketName = async (pocketId: number) => {
    const response = await API.post<string>(
      userMyPocketUrl.postMyPocketName(pocketId)
    );
    console.log(response.data);
    return response.data;
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowModal(false);
    setShowContentModal(false);
  };
  return (
    <S.RevealModalContainer>
      <S.RevealModal>
        <S.TopBox>
          <S.Title>정말 알아볼까요?</S.Title>
          <S.SubTitle>옆전 1닢이 소모돼요.</S.SubTitle>
        </S.TopBox>
        <S.BottomBox>
          <S.Esc onClick={handleClick}>취소</S.Esc>
          <S.Reveal onClick={handlePocketClick}>알아보기</S.Reveal>
        </S.BottomBox>
      </S.RevealModal>
    </S.RevealModalContainer>
  );
};

export default RevealModal;
