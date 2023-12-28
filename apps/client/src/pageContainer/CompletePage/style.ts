import styled from '@emotion/styled';

export const Complete = styled.div`
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
`;

export const CompleteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Name = styled.span`
  ${({ theme }) => theme.typo.title.sub_md}
`;

export const Text = styled.span`
  text-align: center;
  font-size: 1.5rem;
  line-height: 120%;
`;
