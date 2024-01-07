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
`;

export const ChevronBox = styled.div`
  cursor: pointer;
`;

export const PocketBox = styled.div<{ slideIndex: number }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  position: relative;
`;

export const PocketDrawer = styled.div`
  background-image: url('/images/drawer.png');
  background-size: 480px 514px;
  width: 480px;
  height: 514px;
  background-color: pink;
`;

export const Container = styled.div`
  width: 564px;
  height: 514px;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
`;
