import styled from '@emotion/styled';

const Sort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PocketContainer = styled.div`
  cursor: pointer;
  position: relative;
  top: 0.9375rem;
  transition: filter 100ms ease-in-out;
`;

export const WriteBoard = styled(Sort)`
  background-image: url('/images/contentImg.png');
  width: 480px;
  height: 600px;
  background-size: 480px 600px;
  flex-direction: column;
  p {
    z-index: 10;
    ${({ theme }) => theme.typo.text.small}
    width: 338px;
    height: 348px;
    line-height: 180%;
  }
`;

export const DetailSender = styled(Sort)`
  position: relative;
  ${({ theme }) => theme.typo.title.small}
  left: 120px;
  top: 40px;
`;

export const Coin = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo.title.small}
  width: 50px;
  position: relative;
  left: -160px;
  top: 20px;
  svg {
    bottom: 0.5px;
  }
`;

export const CoinIcon = styled.div`
  padding-left: 10px;
  width: 50px;
`;

export const WriteBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  cursor: default;

  span {
    ${({ theme }) => theme.typo.title.small}
  }
`;

export const RevealButton = styled(Sort)`
  width: 292px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.color.sub.brown['100']};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.ivory['010']};
  color: ${({ theme }) => theme.color.sub.brown['100']};
  transition: all 200ms;
  cursor: pointer;
  position: relative;
  top: 35px;

  :hover {
    background-color: ${({ theme }) => theme.color.sub.brown['100']};
    color: ${({ theme }) => theme.color.ivory['010']};
  }
`;
export const Pocket = styled(Sort)`
  width: 6.75rem;
  height: 7.5rem;
  background-image: url('/images/pocket.png');
  background-size: 6.75rem 7.3125rem;
  :hover {
    filter: brightness(0.7);
  }
`;

export const PocketMoney = styled(Sort)`
  width: 6.75rem;
  height: 7.5rem;
  background-image: url('/images/pocketMoney.png');
  background-size: 6.75rem 7.3125rem;
  :hover {
    filter: brightness(0.7);
  }
`;

export const LockPocket = styled(Sort)`
  width: 6.75rem;
  height: 7.5rem;
  background-image: url('/images/lockPocket.png');
  background-size: 6.75rem 7.3125rem;
  :hover {
    filter: brightness(0.7);
  }
`;

export const LockPocketMoney = styled(Sort)`
  width: 6.75rem;
  height: 7.5rem;
  background-image: url('/images/lockPocketMoney.png');
  background-size: 6.75rem 7.3125rem;
  :hover {
    filter: brightness(0.7);
  }
`;

export const Sender = styled(Sort)`
  width: 4.3125rem;
  height: 1.6875rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.sub.brown['500']};
  color: ${({ theme }) => theme.color.sub.brown['500']};
  border-width: 0.0625rem 0.1875rem;
  background: ${({ theme }) => theme.color.ivory['010']};
  position: relative;
  top: 0.625rem;
`;
