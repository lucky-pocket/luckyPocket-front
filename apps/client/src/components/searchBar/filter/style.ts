import styled from '@emotion/styled';

export const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background: var(--ivory-200, #e1d5c3);
  :hover {
    cursor: pointer;
  }
  color: var(--ivory-600, #907448);
  /* text-sm */
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  width: 90px;
  height: 48px;

  ${({ isActive }) => isActive && `background: #907448;`}
`;
