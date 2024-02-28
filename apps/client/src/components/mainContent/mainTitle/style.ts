import styled from '@emotion/styled';

export const Title = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  font-size: 30px;
  span {
    ${({ theme }) => theme.typo.title.large};
    font-size: 35px;
  }
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  font-size: 30px;
  p {
    ${({ theme }) => theme.typo.title.large};
    font-size: 30px;
  }
  span {
    ${({ theme }) => theme.typo.title.large};
    font-size: 35px;
    position: relative;
    top: 2px;
    color: ${({ theme }) => theme.color.sub.brown['500']};
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 1.875rem;
`;

export const Message = styled.div`
  ${({ theme }) => theme.typo.text.small};
`;

export const WarnMessage = styled.div`
  ${({ theme }) => theme.typo.text.caption};
  color: ${({ theme }) => theme.color.error['050']};
`;
