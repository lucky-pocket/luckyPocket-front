'use client';

import { Header, WriteButton } from 'client/components';
import * as S from './style';
import { useState } from 'react';
import { ScopeType } from 'client/type/ScopeType';

const Send = () => {
  let coins = 46;

  const [coinsToSend, setCoinsToSend] = useState<string | null>(null);
  const [coinsError, setCoinsError] = useState<boolean>(false);
  const [selectedScope, setSelectedScope] = useState<ScopeType>('PRIVATE');

  const ERROR_MESSAGES =
    '복주머니 배송비는 엽전 1닢입니다, 선물 금액은 배송비를 고려해 정해주세요!';

  const notNullCoinToSend =
    coinsToSend === '' || coinsToSend === null ? 0 : coinsToSend;

  console.log(notNullCoinToSend);

  const hasError = (value: number) => {
    setCoinsError(value > coins - 1);
  };

  const handleButtonClick = (scope: ScopeType) => {
    setSelectedScope((prev) => (prev === scope ? null : scope));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isNotNumber = (value: string) => {
      const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
      return regExp.test(value);
    };

    if (!isNotNumber(e.target.value)) {
      const value = e.target.value;

      const sanitizedValue = value
        .replace(/^0+/, '0')
        .replace(/^0+(\d+)/, '$1');

      if (!isNaN(Number(sanitizedValue))) {
        setCoinsToSend(sanitizedValue);
        hasError(Number(sanitizedValue));
      }
    }
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
              type='string'
            />
            <S.SectionDetailWrapper>
              <S.SectionDetail>
                현재 보유중인 엽전 개수 <S.Coins>{coins}닢</S.Coins>
              </S.SectionDetail>
              {coinsError ? (
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
