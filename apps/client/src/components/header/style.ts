import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  .background {
    position: absolute;
  }

  .norigae {
    position: absolute;
    right: 3.375rem;
    top: 5rem;
  }
`;

export const HeaderWrap = styled.header`
  position: relative;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem 0 2.5rem;
  z-index: 1;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  z-index: 1;
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
