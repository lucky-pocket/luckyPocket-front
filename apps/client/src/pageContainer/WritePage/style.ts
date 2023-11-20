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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 92vh;
  gap: 1.25rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.title.small}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 8rem;
  height: 2.875rem;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.color.gray['060']};

  svg {
    margin-bottom: 0.125rem;
  }
`;

export const BeforeButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.color.gray['050']};
`;

export const NextButton = styled(Button)`
  background: ${({ theme }) => theme.color.sub.brown['100']};
  color: ${({ theme }) => theme.color.ivory['010']};

  svg {
    transform: rotate(180deg);
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.gray['060']};
    background: ${({ theme }) => theme.color.gray['030']};
  }
`;
