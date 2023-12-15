import styled from '@emotion/styled';

export const UserCard = styled.div`
  display: flex;
  height: 174px;
  width: 168px;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  background: #f2ede5;
  justify-content: space-between;
  padding: 10px;
`;

export const DescBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.div`
  ${({ theme }) => theme.typo.text.small}
  font-family: Noto Sans;
`;
export const Class = styled.div`
  ${({ theme }) => theme.typo.text.caption}
  color: ${({ theme }) => theme.color.gray['040']};
`;
export const Amount = styled.div`
  display: flex;
  width: 39px;
  height: 18px;
  gap: 4px;
  align-items: center;
`;
export const Score = styled.div`
  ${({ theme }) => theme.typo.text.caption}
  padding-top: 3px;
`;
export const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 59px;
  height: 40px;
`;
export const Rabbit = styled.div``;
export const Corner = styled.div`
  display: inline-flex;
  padding: 2px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px 0px 5px 0px;
  background: #d34e41;
  color: white;
  font-size: 12px;
  width: 17px;
  height: 16px;
`;
