import styled from '@emotion/styled';

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 1.25rem;
  }
`;

export const Input = styled.input`
  width: 26.125rem;
  height: 3rem;
  border-radius: 0.625rem;
  background: none;
  outline: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  padding-left: 1rem;
  padding-right: 2.5rem;

  &:focus {
    border: 0.0625rem solid ${({ theme }) => theme.color.gray['090']};

    & ~ svg path {
      fill: ${({ theme }) => theme.color.gray['090']};
    }
  }
`;
