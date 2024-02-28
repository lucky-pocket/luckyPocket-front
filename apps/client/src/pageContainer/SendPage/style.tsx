import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Send = styled.div`
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
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.ivory['010']};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.288299155609169vh;
`;

export const Section = styled.div`
  width: 33rem;
`;

export const SectionTitleWrapper = styled.div<{ isColumn?: boolean }>`
  display: flex;
  gap: 0.25rem;

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `}
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.title.sub_md}
`;

export const SectionOption = styled.span`
  ${({ theme }) => theme.typo.text.small}
  color:${({ theme }) => theme.color.gray['040']};
  padding-top: 0.3rem;
`;

export const CoinInput = styled.input<{ error: boolean }>`
  ${({ theme }) => theme.typo.text.small}
  color: ${({ theme }) => theme.color.gray['090']};

  width: 100%;
  height: 3.1875rem;
  outline: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  border-radius: 0.625rem;
  background: none;
  padding-left: 1.25rem;
  margin-top: 1.25rem;

  &:focus {
    ${({ error, theme }) =>
      !error &&
      css`
        border: 0.0625rem solid ${theme.color.sub.brown['100']};
      `}
  }

  ${({ error, theme }) =>
    error &&
    css`
      border: 0.0625rem solid ${theme.color.error['050']};
    `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SectionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const SectionDetail = styled.span`
  ${({ theme }) => theme.typo.text.caption}
  color: ${({ theme }) => theme.color.gray['040']};
`;

export const Coins = styled.span`
  ${({ theme }) => theme.typo.text.caption}
  color: ${({ theme }) => theme.color.gray['090']};
`;

export const Caption = styled.span`
  ${({ theme }) => theme.typo.text.caption}
  color: ${({ theme }) => theme.color.error['050']};
`;

export const ScopeButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
`;

export const ScopeButton = styled.button<{ isClicked: boolean }>`
  ${({ theme }) => theme.typo.text.small}
  padding: 0.6rem 1.25rem 0.5rem 1.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.color.gray['040']};

  &:not(:disabled):hover {
    ${({ isClicked, theme }) =>
      !isClicked &&
      css`
        border: 0.0625rem solid ${theme.color.sub.brown['500']};
        color: ${theme.color.sub.brown['100']};
        background-color: #eee3d6;
      `}
  }

  ${({ isClicked, theme }) =>
    isClicked &&
    css`
      border: 0.0625rem solid ${theme.color.sub.brown['100']};
      color: ${theme.color.ivory['010']};
      background-color: ${theme.color.sub.brown['100']};
    `}
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
  line-height: 0;

  svg {
    margin-bottom: 0.125rem;
  }
`;

export const BeforeButton = styled(Button)`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
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
