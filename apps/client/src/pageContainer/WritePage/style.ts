import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Write = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: relative;
  width: 38rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.ivory['010']};

  > svg {
    position: absolute;
    top: 16vh;
  }
`;

export const WriteBoxContainer = styled.div`
  position: relative;
  width: 30rem;
  height: 37.5rem;
  top: 16vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriteBox = styled.textarea`
  position: absolute;
  width: 21.125rem;
  height: 25.3125rem;
  resize: none;
  outline: none;
  background: none;
  border: none;
  word-break: break-all;
  color: ${({ theme }) => theme.color.gray['090']};
  font-size: 1.0625rem;
  line-height: 1.75rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray['040']};
  }
`;
