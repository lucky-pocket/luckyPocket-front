'use client';
import * as S from './style';

interface RevealModalProps {
  setShowModal: (value: boolean) => void;
}

const RevealModal: React.FC<RevealModalProps> = ({ setShowModal }) => {
  return (
    <S.RevealModalContainer>
      <S.RevealModal>
        <S.TopBox>
          <S.Title>정말 알아볼까요?</S.Title>
          <S.SubTitle>옆전 2닢이 소모돼요.</S.SubTitle>
        </S.TopBox>
        <S.BottomBox>
          <S.Esc onClick={() => setShowModal(false)}>취소</S.Esc>
          <S.Reveal>알아보기</S.Reveal>
        </S.BottomBox>
      </S.RevealModal>
    </S.RevealModalContainer>
  );
};

export default RevealModal;
