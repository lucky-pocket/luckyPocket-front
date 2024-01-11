/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PocketListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 19px;
  border-radius: 20px;
  background: rgba(30, 29, 27, 0.5);
  color: ${({ theme }) => theme.color.white};
  position: relative;
  bottom: 50px;
`;

export const ChevronBox = styled.div<{ isVisible?: boolean }>`
  cursor: pointer;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const PocketBox = styled.div<{ slideIndex: number }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px;
  svg {
    position: absolute;
    z-index: 1;
  }
`;

export const PocketDrawer = styled.div`
  position: relative;
  top: 30px;
  background-image: url('/images/drawer.png');
  background-size: 480px 514px;
  width: 480px;
  height: 496px;
`;

export const Container = styled.div`
  width: 564px;
  height: 514px;
  display: flex;
  align-items: center;
`;

export const DrawerBox = styled.div`
  top: 123px;
  height: 273px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
`;
