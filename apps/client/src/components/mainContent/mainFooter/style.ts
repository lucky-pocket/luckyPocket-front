import styled from '@emotion/styled';

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 6.5rem;
`;

export const Message = styled.div`
  ${({ theme }) => theme.typo.text.small};
`;

export const WarnMessage = styled.div`
  ${({ theme }) => theme.typo.text.caption};
  color: ${({ theme }) => theme.color.error['050']};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.gray['090']};
  width: 20rem;
  height: 3rem;
  color: ${({ theme }) => theme.color.white};
`;
