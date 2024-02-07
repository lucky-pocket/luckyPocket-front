import styled from '@emotion/styled';

export const ServerError = styled.div`
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
  background-image: url('/images/frame.png');
  background-size: 38rem 100vh;
  background-color: ${({ theme }) => theme.color.ivory['010']};

  .norigae {
    position: absolute;
    top: 3.8vh;
    right: 5.8vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.text.medium}
`;

export const Desc = styled.span`
  ${({ theme }) => theme.typo.text.small}
  text-align: center;
`;
