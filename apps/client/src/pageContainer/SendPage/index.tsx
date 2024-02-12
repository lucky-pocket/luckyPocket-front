'use client';

import { Header, PocketLimitModal } from 'client/components';
import * as S from './style';
import { useRef, useState } from 'react';
import { ScopeType } from 'client/types/ScopeType';
import { API } from 'api/client/API';
import { pocketUrl, userMyUrl } from 'api/client';
import { useQuery } from '@tanstack/react-query';
import {
  usePocketLimitModalState,
  usePocketSendState,
  useSearchedUsersState,
} from 'client/stores';
import Link from 'next/link';
import { ArrowIcon } from 'client/assets';
import { useRouter } from 'next/navigation';

const Send = () => {
  const getMyCoins = async () => {
    const response = await API.get(userMyUrl.getMyCoin());
    return response.data;
  };

  const { data: coinsData } = useQuery<{ coins: number }>(['getMyCoin'], () =>
    getMyCoins()
  );

  const currentCoins = coinsData?.coins || 0;
  const [coinsToSend, setCoinsToSend] = useState<number | null>(null);
  const [coinsError, setCoinsError] = useState<boolean>(false);
  const [selectedScope, setSelectedScope] = useState<ScopeType>('PRIVATE');
  const { pocketSend, setPocketSend, reset } = usePocketSendState();
  const { pocketLimitModal, setPocketLimitModal } = usePocketLimitModalState();
  const modalRef = useRef<HTMLDivElement>(null);
  const { setSelectedId } = useSearchedUsersState();
  const router = useRouter();
  const getArrowIcon = (stroke: string) => <ArrowIcon stroke={stroke} />;

  const ERROR_MESSAGES =
    '복주머니 배송비는 엽전 1닢입니다, 선물 금액은 배송비를 고려해 정해주세요!';

  const hasError = (value: number) => {
    setCoinsError(value > currentCoins - 1);
  };

  const handleButtonClick = (scope: ScopeType) => {
    setSelectedScope((prev) => (prev === scope ? null : scope));
    setPocketSend({
      ...pocketSend,
      isPublic: scope === 'PUBLIC' ? true : false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isNotNumber = (value: string) => {
      const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
      return regExp.test(value);
    };

    if (!isNotNumber(e.target.value)) {
      const value = e.target.value;

      const sanitizedValue = Number(
        value.replace(/^0+/, '0').replace(/^0+(\d+)/, '$1')
      );
      const notNullCoinToSend = sanitizedValue === null ? 0 : sanitizedValue;

      if (!isNaN(sanitizedValue)) {
        setCoinsToSend(sanitizedValue);
        hasError(sanitizedValue);
        setPocketSend({ ...pocketSend, coins: notNullCoinToSend });
      }
    }
  };

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setPocketLimitModal(false);
    }
  };

  const sendPocket = async () => {
    await API.post(pocketUrl.postPocket(), pocketSend).catch((error: any) => {
      console.log(error);
      if (error.status === 418) {
        setPocketLimitModal(true);
      }
    });
  };

  return (
    <S.Send>
      <S.Background>
        <Header hasNorigae />
        <S.ContentWrapper>
          {pocketLimitModal && (
            <PocketLimitModal
              modalRef={modalRef}
              modalOutSideClick={modalOutSideClick}
            />
          )}
          <S.Section>
            <S.SectionTitleWrapper>
              <S.Title>엽전으로 마음을 표현해봐요</S.Title>
              <S.SectionOption>(선택)</S.SectionOption>
            </S.SectionTitleWrapper>
            <S.CoinInput
              value={coinsToSend ?? ''}
              onChange={handleInputChange}
              placeholder='보낼 엽전 개수를 입력해 주세요.'
              error={coinsError}
              type='string'
            />
            <S.SectionDetailWrapper>
              <S.SectionDetail>
                현재 보유중인 엽전 개수 <S.Coins>{currentCoins}닢</S.Coins>
              </S.SectionDetail>
              {coinsError || currentCoins < 1 ? (
                <S.Caption>{ERROR_MESSAGES}</S.Caption>
              ) : (
                <S.SectionDetail>{ERROR_MESSAGES}</S.SectionDetail>
              )}
            </S.SectionDetailWrapper>
          </S.Section>
          <S.Section>
            <S.SectionTitleWrapper isColumn>
              <S.Title>복주머니를 익명으로 보낼 수 있어요</S.Title>
              <S.SectionDetail>
                비공개 복주머니는 엽전을 소모해 발신인을 볼 수 있어요.
              </S.SectionDetail>
            </S.SectionTitleWrapper>
            <S.ScopeButtonWrapper>
              <S.ScopeButton
                onClick={() => handleButtonClick('PRIVATE')}
                isClicked={selectedScope === 'PRIVATE'}
              >
                비공개
              </S.ScopeButton>
              <S.ScopeButton
                onClick={() => handleButtonClick('PUBLIC')}
                isClicked={selectedScope === 'PUBLIC'}
              >
                공개
              </S.ScopeButton>
            </S.ScopeButtonWrapper>
          </S.Section>
        </S.ContentWrapper>
        <S.ButtonContainer>
          <Link href='/write'>
            <S.BeforeButton>
              {getArrowIcon('#6F6B63')}
              이전
            </S.BeforeButton>
          </Link>
          <S.NextButton
            disabled={coinsError || selectedScope === null || currentCoins < 1}
            onClick={() => {
              sendPocket().then(() => {
                reset();
                setSelectedId(null);
                router.push('/complete');
              });
            }}
          >
            보내기
            {coinsError || selectedScope === null || currentCoins < 1
              ? getArrowIcon('#6F6B63')
              : getArrowIcon('#F2EDE5')}
          </S.NextButton>
        </S.ButtonContainer>
      </S.Background>
    </S.Send>
  );
};

export default Send;
