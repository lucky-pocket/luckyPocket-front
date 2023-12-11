import styled from '@emotion/styled';

export const UserList = styled.div`
  display: grid;
  width: 100%;
  // 100vh - (리스트 상단 height + 하단 여백 2.5rem)
  height: calc(100vh - 25rem);
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 18.08px;
  overflow-y: scroll;
`;
export const NoSearchContainer = styled.div``;
