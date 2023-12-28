'use client';

import { Header, WriteButton } from 'client/components';
import * as S from './style';
import { useState } from 'react';
import { ScopeType } from 'client/type/ScopeType';

const Send = () => {
  let coins = 46;

  const [coinsToSend, setCoinsToSend] = useState<number | null>(null);
  const [coinsError, setCoinsError] = useState<boolean>(false);
  const [selectedScope, setSelectedScope] = useState<ScopeType>('PRIVATE');
  const [coinsErrorMessage, setCoinsErrorMessage] = useState<string>('');

  const ERROR_MESSAGES = {
    exceedCoins:
      '복주머니 배송비는 엽전 2닢입니다, 선물 금액은 배송비를 고려해 정해주세요!',
    lessThanOne: '다른 사람의 엽전을 뺏어 올 수는 없어요!',
  };

  const notNullCoinToSend = coinsToSend ?? 0;

  const validateCoinsToSend = (value: number) => {
    let errorMessage = '';
    let hasError = false;

    if (value > coins - 2) {
      errorMessage = ERROR_MESSAGES.exceedCoins;
      hasError = true;
    } else if (value < 0) {
      errorMessage = ERROR_MESSAGES.lessThanOne;
      hasError = true;
    }

    setCoinsErrorMessage(errorMessage);
    setCoinsError(hasError);
  };

  const handleButtonClick = (scope: ScopeType) => {
    setSelectedScope((prev) => (prev === scope ? null : scope));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    Number.isNaN(value) ? setCoinsToSend(null) : setCoinsToSend(value);
    validateCoinsToSend(value);
  };

  return (
    <S.Send>
      <S.Background>
        <Header hasNorigae />
        <S.ContentWrapper>
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
              type='number'
              onKeyDown={(e) =>
                ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
              }
            />
            <S.SectionDetailWrapper>
              <S.SectionDetail>
                현재 보유중인 엽전 개수 <S.Coins>{coins}닢</S.Coins>
              </S.SectionDetail>
              {coinsError ? (
                <S.Caption>{coinsErrorMessage}</S.Caption>
              ) : (
                <S.SectionDetail>{ERROR_MESSAGES.exceedCoins}</S.SectionDetail>
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
        <WriteButton
          disabled={coinsError || selectedScope === null}
          beforeButton='/write'
          nextLink='/complete'
        />
      </S.Background>
    </S.Send>
  );
};

export default Send;
