import styled from '@emotion/styled';

export const UserList = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  // 100vh - (리스트 상단 height + 하단 여백 2.5rem)
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
  height: 840px;
  overflow-y: scroll;
`;
export const NoSearchContainer = styled.div``;
