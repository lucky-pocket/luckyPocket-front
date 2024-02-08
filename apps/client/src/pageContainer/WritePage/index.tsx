'use client';

import { WriteBoard } from 'client/assets';
import * as S from './style';
import { Header } from 'client/components';
import WriteButton from 'client/components/writeButton';
import { usePocketSendState } from 'client/stores';

export default function Write() {
  const { pocketSend, setPocketSend } = usePocketSendState();
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPocketSend({ ...pocketSend, message: e.target.value });
  };
  const isTextareaEmpty = pocketSend.message.trim() === '';
  const MAX_LENGTH = 300 as const;

  console.log(pocketSend);

  return (
    <S.Write>
      <S.Background>
        <WriteBoard />
        <Header />
        <S.WriteBoxContainer>
          <S.WriteBox
            placeholder='최대 300글자까지 작성할 수 있습니다.*'
            value={pocketSend.message}
            onChange={handleTextareaChange}
            maxLength={MAX_LENGTH}
          />
        </S.WriteBoxContainer>
        <WriteButton
          disabled={isTextareaEmpty}
          beforeButton='/search'
          nextLink='/send'
        />
      </S.Background>
    </S.Write>
  );
}
