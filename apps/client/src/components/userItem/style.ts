import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UserItem = styled.div<{ isClicked: boolean }>`
  ${({ theme }) => theme.typo.text.small}
  width: 100%;
  border-radius: 0.625rem;
  padding: 1.25rem 1.25rem 1.125rem;
  cursor: pointer;

  ${({ isClicked, theme }) =>
    isClicked
      ? css`
          border: 0.0625rem solid ${theme.color.sub.brown['500']};
          color: ${theme.color.sub.brown['500']};
        `
      : css`
          border: 0.0625rem solid ${theme.color.gray['030']};
          color: ${theme.color.gray['050']};
        `}
`;
