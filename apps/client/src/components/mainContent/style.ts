import styled from '@emotion/styled';

export const MainContentBox = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({ isUser }) => (isUser ? '650px' : '558px')};
`;
