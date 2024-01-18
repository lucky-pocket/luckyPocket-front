import styled from '@emotion/styled';

export const RevealModalContainer = styled.div`
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
`;

export const RevealModal = styled.div`
  width: 30rem;
  height: 9.8125rem;
  border-radius: 0.625rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.color.ivory['010']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.text.medium};
  font-weight: 400;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.error['050']};
  ${({ theme }) => theme.typo.text.caption};
`;

export const Esc = styled.div`
  color: ${({ theme }) => theme.color.gray['030']};
  ${({ theme }) => theme.typo.text.caption};
  cursor: pointer;
`;

export const Reveal = styled.div`
  color: ${({ theme }) => theme.color.gray['050']};
  ${({ theme }) => theme.typo.text.caption};

  :hover {
    color: ${({ theme }) => theme.color.sub.brown['500']};
    cursor: pointer;
    transition: color 100ms ease-in-out;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BottomBox = styled.div`
  display: flex;
  position: relative;
  left: 21.875rem;
  gap: 1rem;
`;
