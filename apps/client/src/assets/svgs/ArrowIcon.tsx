interface IconProps {
  stroke: string;
}

const ArrowIcon = ({ stroke }: IconProps) => {
  return (
    <svg
      width='9'
      height='14'
      viewBox='0 0 9 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.5 1L2.20711 6.29289C1.81658 6.68342 1.81658 7.31658 2.20711 7.70711L7.5 13'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowIcon;
