import styled from '@emotion/styled';

export const Inspection = styled.div`
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
  background: ${({ theme }) => theme.color.ivory['010']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.title.large}
  color: ${({ theme }) => theme.color.gray['090']};
  margin-top: 0.5rem;

  b {
    color: ${({ theme }) => theme.color.error['050']};
  }
`;

export const desc = styled.span`
  ${({ theme }) => theme.typo.text.small}
  color: ${({ theme }) => theme.color.gray['040']};
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Detail = styled.span`
  ${({ theme }) => theme.typo.text.small}
  color: ${({ theme }) => theme.color.gray['090']};
`;
