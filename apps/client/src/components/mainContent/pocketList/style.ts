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
  width: 4.5rem;
  height: 1.1875rem;
  border-radius: 1.25rem;
  background: rgba(30, 29, 27, 0.5);
  color: ${({ theme }) => theme.color.white};
  position: relative;
  bottom: 3.125rem;
`;

export const ChevronBox = styled.div<{ isVisible: boolean }>`
  cursor: pointer;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const PocketBox = styled.div<{ slideIndex: number }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.0625rem;
  svg {
    position: absolute;
    z-index: 1;
  }
`;

export const PocketDrawer = styled.div`
  position: relative;
  top: 1.875rem;
  background-image: url('/images/drawer.png');
  background-size: 30rem 32.125rem;
  width: 30rem;
  height: 31rem;
`;

export const Container = styled.div`
  width: 36.4375rem;
  height: 32.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DrawerBox = styled.div`
  top: 7.6875rem;
  height: 17.0625rem;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
`;
