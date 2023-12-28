'use client';

import * as S from './style';
import { FilterIcon, XIcon } from 'client/assets';

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const FilterButton: React.FC<Props> = ({ onClick, isActive }) => (
  <S.Button type='button' onClick={onClick} isActive={isActive}>
    {isActive ? (
      <>
        <XIcon />
      </>
    ) : (
      <>
        <FilterIcon />
        필터
      </>
    )}
  </S.Button>
);

export default FilterButton;
