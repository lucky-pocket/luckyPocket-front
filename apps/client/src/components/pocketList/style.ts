import styled from '@emotion/styled';

export const PocketListContainer = styled.div``;
export const Title = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  span {
    ${({ theme }) => theme.typo.title.large};
  }
`;
export const SubTitle = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  p {
    ${({ theme }) => theme.typo.title.large};
  }
  span {
    color: ${({ theme }) => theme.color.sub.brown['500']};
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.gray['090']};
  width: 20rem;
  height: 3rem;
`;
export const Index = styled.div``;
export const Message = styled.div`
  ${({ theme }) => theme.typo.text.small};
`;
export const WarnMessage = styled.div`
  ${({ theme }) => theme.typo.text.caption};
  color: ${({ theme }) => theme.color.error['050']};
`;
export const PocketDrawer = styled.div`
  width: 30rem;
  height: 32.125rem;
  background-image: url('/images/drawer.png');
  background-size: 30rem 32.125rem;
`;
