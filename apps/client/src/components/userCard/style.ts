import styled from '@emotion/styled';

export const UserCard = styled.div`
  display: flex;
  height: 10.875rem;
  width: 10.5rem;
  padding: 0.625rem;
  flex-direction: column;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.ivory['010']};
  justify-content: space-between;
  padding: 0.625rem;
`;

export const DescBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Name = styled.div`
  ${({ theme }) => theme.typo.text.small}
`;

export const Class = styled.div`
  ${({ theme }) => theme.typo.text.caption}
  color: ${({ theme }) => theme.color.gray['040']};
`;

export const Amount = styled.div`
  display: flex;
  width: 2.4375rem;
  height: 1.125rem;
  gap: 0.25rem;
  align-items: center;
`;

export const Score = styled.div`
  ${({ theme }) => theme.typo.text.caption}
  padding-top: 0.1875rem;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3.6875rem;
  height: 2.5rem;
`;

export const Corner = styled.div<{ rank?: number }>`
  display: flex;
  padding: 0.125rem 0.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem 0rem 0.3125rem 0rem;
  background: ${({ rank, theme }) =>
    rank === 1
      ? '#d34e41'
      : rank === 2
      ? '#d34e41'
      : rank === 3
      ? '#d34e41'
      : theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.75rem;
  width: 1.0625rem;
  height: 1rem;
`;
