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

export const GameContainer = styled.div`
  margin-top: 8.125rem;
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BottomBox = styled.div`
  height: 9.9375rem;
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Loading = styled.div`
  color: ${({ theme }) => theme.color.sub.brown['500']};
  ${({ theme }) => theme.typo.title.medium};
`;
