import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  width: 38rem;
  height: 100vh;
  background-color: rgba(30, 29, 27, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 30rem;
  height: 9.8125rem;
  background-color: ${({ theme }) => theme.color.ivory['010']};
  border-radius: 0.625rem;
  padding: 1.5rem;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.gray['090']};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.error['050']};
`;

export const ButtonContainer = styled.div`
  text-align: end;

  button {
    font-size: 1.125rem;
    padding: 0.25rem;
    color: ${({ theme }) => theme.color.gray['050']};
  }
`;
