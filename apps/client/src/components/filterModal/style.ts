import styled from '@emotion/styled';

export const FilterModal = styled.div`
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  background: #f2ede5;
  box-shadow: 0px 4px 12px 0px rgba(144, 116, 72, 0.4);
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  top: 230px;
  right: 30px;
`;

export const Title = styled.div`
  color: #000;

  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
export const Desc = styled.div`
  color: #1e1d1b;
  /* text-sm */
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;
export const FilterBox = styled.div`
  width: 384px;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Standard = styled.div``;
export const Grade = styled.div``;
export const GradeClass = styled.div``;
export const OptionBox = styled.div`
  display: flex;
`;
export const Option = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  width: 64px;
  height: 64px;
  background-size: 64px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-400, #a19e97);
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  padding-top: 10px;
  ${({ isActive }) =>
    isActive &&
    `background-image: url('/images/PocketBack.png');
    color: var(--browm-500, #99522F);
    `}
`;
