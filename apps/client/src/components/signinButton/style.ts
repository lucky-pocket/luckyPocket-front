import styled from "@emotion/styled";

export const Title = styled.div`
  font-family: JS Arirang HON;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: ${({ theme }) => theme.color.gray["090"]};
  box-shadow: 0px 4px 8px 0px rgba(88, 61, 46, 0.8);
  border-radius: 1.25rem;
  width: 13.875rem;
  height: 2.625rem;
  font-size: 1.5rem;
`;

export const SigninButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
