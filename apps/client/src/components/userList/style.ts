import styled from '@emotion/styled';

export const UserListContainer = styled.div`
  height: 55rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserList = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.125rem;
`;

export const NoSearchContainer = styled.div`
  height: 51.25rem;
  width: 34.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
