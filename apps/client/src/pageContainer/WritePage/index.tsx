'use client';

import { ArrowIcon, WriteBoard } from 'client/assets';
import * as S from './style';
import { Header } from 'client/components';
import { useState } from 'react';
import Link from 'next/link';

export default function Write() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const isInputEmpty = inputValue.trim() === '';
  const getArrowIcon = (stroke: string) => <ArrowIcon stroke={stroke} />;

  return (
    <S.Write>
      <S.Background>
        <WriteBoard />
        <Header />
        <S.WriteBoxContainer>
          <S.WriteBox
            placeholder='최대 300글자까지 작성할 수 있습니다.*'
            value={inputValue}
            onChange={handleInputChange}
          />
        </S.WriteBoxContainer>
        <S.ButtonContainer>
          <Link href='/'>
            <S.BeforeButton>
              {getArrowIcon('#6F6B63')}
              이전
            </S.BeforeButton>
          </Link>
          <S.NextButton disabled={isInputEmpty}>
            다음
            {isInputEmpty ? getArrowIcon('#6F6B63') : getArrowIcon('#F2EDE5')}
          </S.NextButton>
        </S.ButtonContainer>
      </S.Background>
    </S.Write>
  );
}
