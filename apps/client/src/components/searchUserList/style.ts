import styled from '@emotion/styled';

export const UserListWrapper = styled.div`
  width: 33rem;
  height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
  padding-bottom: 3.75rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BackgroundFilter = styled.div`
  width: 100%;
  height: 3.8rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0, #f2ede5 3.22%, rgba(242, 237, 229, 0) 94.49%);
`;
