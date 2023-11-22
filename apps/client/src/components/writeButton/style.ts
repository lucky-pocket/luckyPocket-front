import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 92vh;
  gap: 1.25rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.title.small}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 8rem;
  height: 2.875rem;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.color.gray['060']};

  svg {
    margin-bottom: 0.125rem;
  }
`;

export const BeforeButton = styled(Button)`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
`;

export const NextButton = styled(Button)`
  background: ${({ theme }) => theme.color.sub.brown['100']};
  color: ${({ theme }) => theme.color.ivory['010']};

  svg {
    transform: rotate(180deg);
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.gray['060']};
    background: ${({ theme }) => theme.color.gray['030']};
  }
`;
