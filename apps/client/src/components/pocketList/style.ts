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
  border-radius: 10px;
  background: ${({ theme }) => theme.color.gray['090']};
  width: 320px;
  height: 48px;
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
  width: 480px;
  height: 514px;
  background-image: url('/images/drawer.png');
  background-size: 480px 514px;
`;
