import { css } from '@emotion/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const FirstYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(6.25rem, -6.25rem) rotate(60deg);
	}
`;

const SecondYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(-1.875rem, 3.125rem) rotate(45deg);
	}
`;

const ThirdYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(1.875rem, 1.875rem) rotate(45deg);
	}
`;

const FourthYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(-1.875rem, 6.25rem) rotate(-45deg);
	}
`;

export const Game = styled.div`
  width: 32rem;
  height: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/GameBackground.png');
  flex-direction: column;
`;

export const YutBox = styled.div`
  display: flex;
  gap: 2.5rem;
  .first {
    animation: ${FirstYut} 1.5s ease-in-out forwards;
    z-index: 0;
  }

  .second {
    animation: ${SecondYut} 1.5s ease-in-out forwards;
    z-index: 1;
  }

  .third {
    animation: ${ThirdYut} 1.5s ease-in-out forwards;
    z-index: 1;
  }

  .fourth {
    z-index: 0;
    animation: ${FourthYut} 1.5s ease-in-out forwards;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.875rem;
  span {
    color: ${({ theme }) => theme.color.gray['040']};
  }
`;

export const WarnMessage = styled.div`
  color: ${({ theme }) => theme.color.error['050']};
  text-align: center;
  margin-top: 2.5rem;
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.color.gray['040']};
  text-align: center;
  margin-top: 0.5rem;
`;

export const Count = styled.div`
  text-align: center;
  div {
    ${({ theme }) => theme.typo.title.small}
    color: ${({ theme }) => theme.color.sub.brown['500']};
  }
`;

export const Button = styled.button<{ isError?: boolean }>`
  ${({ theme }) => theme.typo.title.small}
  color: ${({ theme }) => theme.color.sub.brown['500']};
  display: flex;
  width: 15.625rem;
  height: 2.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.sub.brown['500']};
  ${({ isError, theme }) =>
    isError &&
    css`
      color: ${theme.color.error['050']};
      border: 0.0625rem solid ${theme.color.error['050']};
      background: rgba(223, 69, 74, 0.2);
    `}
`;

export const GameContainer = styled.div<{ isLoading?: boolean }>`
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  top: 3.25rem;
`;

export const BottomBox = styled.div`
  height: 9.9375rem;
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.div`
  color: ${({ theme }) => theme.color.sub.brown['500']};
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const Result = styled.div`
  position: absolute;
  font-size: 5rem;
  font-family: JS Arirang HON;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/Durumari.png');
  width: 35rem;
  height: 10rem;
  background-size: 35rem 10.0938rem;
  bottom: 28.125rem;
  padding-bottom: 1.25rem;
`;
