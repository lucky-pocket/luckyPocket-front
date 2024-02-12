import { usePocketLimitModalState, usePocketSendState } from 'client/stores';
import * as S from './style';
import { useRouter } from 'next/navigation';

interface propsType {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick: (e: any) => void;
}

const PocketLimitModal = ({ modalRef, modalOutSideClick }: propsType) => {
  const { setPocketLimitModal } = usePocketLimitModalState();
  const { reset } = usePocketSendState();
  const router = useRouter();

  return (
    <S.Container
      ref={modalRef}
      onClick={(e) => {
        modalOutSideClick(e);
        reset();
        router.push('/search');
      }}
    >
      <S.Wrapper>
        <S.TextWrapper>
          <S.Title>이런 편지지를 다 썼어요!</S.Title>
          <S.Content>
            하루에 한 유저에게 보낼 수 있는 편지는 최대 5장이에요.
          </S.Content>
        </S.TextWrapper>
        <S.ButtonContainer>
          <button
            onClick={() => {
              setPocketLimitModal(false);
              reset();
              router.push('/search');
            }}
          >
            확인
          </button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default PocketLimitModal;
