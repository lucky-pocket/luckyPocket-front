import styled from '@emotion/styled';

export const SearchBar = styled.div`
  display: flex;
  width: 34.375rem;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  height: 100vh;
  overflow: hidden;
  position: relative;
  top: 4.375rem;
  @media (max-height: 62.75rem) {
    top: 6.25rem;
  }
`;
