import styled from "@emotion/styled";
import { theme } from "common";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;
  position: relative;
`;
