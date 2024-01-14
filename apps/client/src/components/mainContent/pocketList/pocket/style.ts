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
