import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 38rem;
  height: calc(100vh - 4.5rem);
`;

export const Wrapper = styled.div`
  width: 21.5rem;
  height: 25rem;
  background: ${({ theme }) => theme.color.ivory['010']};
  position: absolute;
  top: 6.25rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(144, 116, 72, 0.5);
  border-radius: 0.625rem;
  z-index: 2;
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 16px 0;
`;

export const CoinCount = styled.span`
  ${({ theme }) => theme.typo.text.small}
  margin-top: 0.25rem;
`;

export const AlarmWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 0.5rem;
`;

export const AlarmItem = styled.div`
  width: 21.2rem;
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const AlarmTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const AlarmContent = styled.span<{ isRead?: boolean }>`
  ${({ theme }) => theme.typo.text.small}
  margin-top:  0.25rem;

  ${({ isRead, theme }) =>
    isRead
      ? css`
          color: ${theme.color.gray['050']};
        `
      : css`
          color: ${theme.color.sub.brown['500']};
        `}
`;

export const AlarmTime = styled.span`
  ${({ theme }) => theme.typo.text.small}
  color: ${({ theme }) => theme.color.gray['030']}
`;
