import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const User = styled.div`
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
  justify-content: center;
  background: ${({ theme }) => theme.color.ivory['010']};

  > svg {
    position: absolute;
    top: 16vh;
  }
`;
