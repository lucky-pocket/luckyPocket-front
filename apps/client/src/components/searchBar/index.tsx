'use client';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import FilterButton from './filter';
import { userType } from 'common';
import { UserList } from '..';

interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: userType[];
}

const SearchBar: React.FC<Props> = ({
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
  data,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
  };

  const filteredUsers = data.filter(
    (user) => user.name?.toLowerCase().includes(keyword.toLowerCase()) ?? false
  );

  return (
    <S.Container>
      <S.SearchBar>
        <S.InputWrapper>
          <S.Input
            placeholder='찾고 싶은 사람의 이름을 검색해 보세요.'
            value={keyword}
            onChange={handleInputChange}
          />
          <SearchIcon />
        </S.InputWrapper>
        <FilterButton
          onClick={() =>
            setIsShowFilterModal((isShowFilterModal) => !isShowFilterModal)
          }
          isActive={isShowFilterModal}
        />
      </S.SearchBar>
      <UserList userList={filteredUsers} />
    </S.Container>
  );
};

export default SearchBar;
