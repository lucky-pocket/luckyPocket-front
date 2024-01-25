/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ChevronIconProp {
  turn: 'left' | 'right';
}

const Turn = {
  left: 0,
  right: '180',
} as const;

const ChevronIcon: React.FC<ChevronIconProp> = ({ turn }) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
  >
    <circle opacity='0.6' cx='20' cy='20' r='20' fill='#1E1D1B' />
    <path d='M18 26L24 20L18 14' stroke='#F2EDE5' strokeLinecap='round' />
  </svg>
);

export default ChevronIcon;
