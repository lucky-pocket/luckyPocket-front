import styled from '@emotion/styled';

export const NoSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const EmptyText = styled.span`
  color: ${({ theme }) => theme.color.gray['050']};
  text-align: center;
  line-height: 150%;
`;
