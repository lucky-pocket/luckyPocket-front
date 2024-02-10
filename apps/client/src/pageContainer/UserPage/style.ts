import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const User = styled.div`
  width: 100%;
  height: 100%;
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
  flex-direction: column;
  background-image: url('/images/frame.png');
  background-size: 38rem 67.5rem;
`;
