import styled from '@emotion/styled';

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

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Message = styled.div`
  ${({ theme }) => theme.typo.text.small};
`;
export const WarnMessage = styled.div`
  ${({ theme }) => theme.typo.text.caption};
  color: ${({ theme }) => theme.color.error['050']};
`;
