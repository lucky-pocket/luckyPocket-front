import styled from '@emotion/styled';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: relative;
  width: 38rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.ivory['010']};
`;

export const Writer = styled.div`
  width: 69px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid ${({ theme }) => theme.color.sub.brown['500']};
  border-width: 1px 4px;
  background: #f2ede5;
  color: ${({ theme }) => theme.color.sub.brown['500']};
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-top: 20px;
`;

export const LuckypocketMoney = styled.div`
  width: 108px;
  height: 112px;
  background-image: url('/images/luckyPocketMoney.png');
  background-size: 108px 112px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveContainer = styled.div<{ slideIndex: number }>`
  display: flex;
  position: absolute;
  left: -${({ slideIndex }) => slideIndex * 72.75}rem;
  transition: ease-in-out 0.3s;
`;

export const Card = styled.div`
  position: relative;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  span {
    ${({ theme }) => theme.typo.title.large};
  }
`;
export const SubTitle = styled.div`
  ${({ theme }) => theme.typo.title.medium};
  p {
    ${({ theme }) => theme.typo.title.large};
  }
  span {
    color: ${({ theme }) => theme.color.sub.brown['500']};
  }
`;

export const TitleBox = styled.div`
  display: flex;
`;
export const Message = styled.div`
  ${({ theme }) => theme.typo.text.small};
`;
export const WarnMessage = styled.div`
  ${({ theme }) => theme.typo.text.caption};
  color: ${({ theme }) => theme.color.error['050']};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.gray['090']};
  width: 320px;
  height: 48px;
  color: ${({ theme }) => theme.color.white};
`;
