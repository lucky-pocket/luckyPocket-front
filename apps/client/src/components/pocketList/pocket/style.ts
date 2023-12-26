import styled from '@emotion/styled';

const Sort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PocketContainer = styled.div`
  cursor: pointer;
`;

export const Pocket = styled(Sort)`
  width: 108px;
  height: 117px;
  background-image: url('/images/pocket.png');
  background-size: 108px 117px;
`;

export const PocketMoney = styled(Sort)`
  width: 108px;
  height: 117px;
  background-image: url('/images/pocketMoney.png');
  background-size: 108px 117px;
`;

export const LockPocket = styled(Sort)`
  width: 108px;
  height: 117px;
  background-image: url('/images/lockPocket.png');
  background-size: 108px 117px;
`;

export const LockPocketMoney = styled(Sort)`
  width: 108px;
  height: 117px;
  background-image: url('/images/lockPocketMoney.png');
  background-size: 108px 117px;
`;

export const Sender = styled(Sort)`
  width: 69px;
  height: 27px;
  border: 1px solid ${({ theme }) => theme.color.sub.brown['500']};
  color: ${({ theme }) => theme.color.sub.brown['500']};
  border-width: 1px 3px;
  background: ${({ theme }) => theme.color.ivory['010']};
  position: relative;
  top: 10px;
`;
