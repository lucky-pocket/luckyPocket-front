import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const HeaderWrap = styled.header`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.ivory['010']};
  padding: 0.5rem 2.5rem 0 2.5rem;
  border: 2px solid ${({ theme }) => theme.color.sub.brown['100']};
  border-top: none;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const NavContent = styled.a<{ isChecked: boolean }>`
  ${({ theme }) => theme.typo.title.small}
  color: ${({ theme }) => theme.color.gray['040']};

  ${({ isChecked, theme }) =>
    isChecked &&
    css`
      color: ${theme.color.gray['090']};
      fill: ${theme.color.gray['090']};
    `}
`;

export const Alarm = styled.div`
  cursor: pointer;
`;

export const UnderBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  border: 2px solid ${({ theme }) => theme.color.sub.brown['100']};
  border-top: none;
  background: ${({ theme }) => theme.color.ivory['010']};

  > svg {
    position: absolute;
    right: 3.375rem;
    top: 0.5rem;
  }
`;

export const EavesWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  width: 38rem;
  left: -2px;
  display: flex;
  justify-content: space-between;
`;
