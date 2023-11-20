'use client';

import { WriteBoard } from 'client/assets';
import * as S from './style';
import { Header } from 'client/components';
import { useState } from 'react';
import WriteButton from 'client/components/writeButton';

export default function Write() {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const isInputEmpty = inputValue.trim() === '';

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
        <WriteButton disabled={isInputEmpty} />
      </S.Background>
    </S.Write>
  );
}
