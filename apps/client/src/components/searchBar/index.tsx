'use client';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import FilterButton from './filter';

interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
}) => {
  return (
    <S.SearchBar>
      <S.InputWrapper>
        <S.Input placeholder='찾고 싶은 사람의 이름을 검색해 보세요.' />
        <SearchIcon />
      </S.InputWrapper>
      <FilterButton
        onClick={() =>
          setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
        }
        isActive={isShowFilterModal}
      />
    </S.SearchBar>
  );
};

export default SearchBar;
