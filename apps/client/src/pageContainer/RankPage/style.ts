import styled from '@emotion/styled';

export const Rank = styled.div`
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
  overflow: hidden;
`;

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  height: 100%;
  overflow: hidden;
  margin-top: 5.9375rem;
`;
