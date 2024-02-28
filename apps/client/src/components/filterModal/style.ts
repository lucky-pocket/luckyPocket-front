import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterModal = styled.div`
  padding: 1.25rem;
  gap: 1.25rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.ivory['010']};
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(144, 116, 72, 0.4);
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  top: 8vh;
  right: 0.675rem;
  z-index: 1;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title.sub_md};
`;

export const Desc = styled.div`
  color: ${({ theme }) => theme.color.gray['090']};
  ${({ theme }) => theme.typo.text.small};
`;

export const FilterBox = styled.div`
  width: 24rem;
  height: 19.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Standard = styled.div``;

export const Grade = styled.div``;

export const GradeClass = styled.div``;

export const OptionBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Option = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background-size: 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.gray['040']};
  text-align: center;
  padding-top: 0.625rem;

  ${({ theme }) => theme.typo.text.caption};
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-image: url('/images/PocketBack.png');
      color: ${theme.color.sub.brown['500']};
    `}

  :hover {
    background-image: url('/images/HoverPocket.png');
  }
`;
