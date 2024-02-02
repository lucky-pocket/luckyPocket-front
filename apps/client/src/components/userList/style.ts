import styled from '@emotion/styled';

export const UserListContainer = styled.div`
  height: 800px;
  width: 550px;
`;

export const UserList = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.125rem;
  height: 52.5rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NoSearchContainer = styled.div``;
