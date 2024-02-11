import styled from '@emotion/styled';

export const MainContentBox = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 47.375rem;
  height: ${({ isUser }) => (isUser ? '758px' : '558px')};
`;
