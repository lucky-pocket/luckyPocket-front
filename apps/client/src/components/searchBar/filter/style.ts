import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Button = styled.button<{ isActive: boolean }>`
  ${({ theme }) => theme.typo.text.small};
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.ivory['020']};
  color: ${({ theme }) => theme.color.ivory['060']};
  width: 5.625rem;
  height: 3rem;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.color.ivory['060']};
    `}
  :hover {
    cursor: pointer;
  }
`;
