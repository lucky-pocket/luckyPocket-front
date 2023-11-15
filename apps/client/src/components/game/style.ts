import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const FirstYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(100px, -100px) rotate(60deg);
	}
`;

const SecondYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(-30px, 50px) rotate(45deg);
	}
`;

const ThirdYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(30px, 30px) rotate(45deg);
	}
`;

const FourthYut = keyframes`
	from {
		transform: translate(0, 0);
        transform: rotateX(0deg);
	}
	to {
        transform: translate(-30px, 100px) rotate(-45deg);
	}
`;

export const Game = styled.div`
  width: 512px;
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/GameBackground.png');
  flex-direction: column;
`;

export const YutBox = styled.div`
  display: flex;
  gap: 40px;

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
  gap: 40px;
  span {
    color: #a19e97;
  }
`;

export const WarnMessage = styled.div`
  color: #df454a;
  text-align: center;
`;
export const Message = styled.div`
  color: #a19e97;
  text-align: center;
`;

export const Count = styled.div`
  text-align: center;
  div {
    color: #99522f;
    font-size: 18px;
    padding-top: 8px;
    font-weight: 700;
  }
`;

export const GameContainer = styled.div`
  margin-top: 130px;
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BottomBox = styled.div`
  height: 159px;
  width: 544px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
