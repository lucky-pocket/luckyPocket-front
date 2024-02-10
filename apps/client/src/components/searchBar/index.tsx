'use client';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import FilterButton from './filter';
import { UserList } from '..';
import { PocketListType, PocketType } from 'client/types';
import { FilterModal } from '..';
import { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: PocketListType;
  refetchData: () => void;
  setOption: React.Dispatch<React.SetStateAction<'COIN' | 'POCKET'>>;
}

const SearchBar: React.FC<Props> = ({
  keyword,
  isShowFilterModal,
  setKeyword,
  setIsShowFilterModal,
  data,
  refetchData,
  setOption,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);

    const filtered = data.users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };
  const [filteredUsers, setFilteredUsers] = useState<PocketType[]>(data.users);
  const [selectedStandard, setSelectedStandard] = useState<'복주머니' | '엽전'>(
    '복주머니'
  );
  const [selectedGrade, setSelectedGrade] = useState<
    '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  >('전체');
  const [selectedGradeClass, setSelectedGradeClass] = useState<
    '전체' | '1반' | '2반' | '3반' | '4반'
  >('전체');

  const handleStandardClick = async (standard: '복주머니' | '엽전') => {
    {
      standard === '엽전' ? setOption('POCKET') : setOption('COIN');
    }
    await refetchData();
    console.log(standard);
    setSelectedStandard(standard);
  };

  const handleGradeClick = (
    grade: '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  ) => {
    setSelectedGrade(grade);
  };

  const handleGradeClassClick = (
    gradeClass: '전체' | '1반' | '2반' | '3반' | '4반'
  ) => {
    setSelectedGradeClass(gradeClass);
  };

  useEffect(() => {
    updateFilteredUsers();
  }, [selectedStandard, selectedGrade, selectedGradeClass]);

  const updateFilteredUsers = useCallback(() => {
    let filtered = data.users.filter((user) => {
      if (selectedStandard === '복주머니' && user.userType === 'TEACHER')
        return false;
      if (
        selectedGrade !== '전체' &&
        user.grade !== getGradeValue(selectedGrade)
      )
        return false;
      if (
        selectedGradeClass !== '전체' &&
        user.class !== getClassValue(selectedGradeClass)
      )
        return false;
      return true;
    });
    setFilteredUsers(filtered);
  }, [selectedStandard, selectedGrade, selectedGradeClass]);

  const getGradeValue = (
    grade: '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  ): number | null => {
    switch (grade) {
      case '1학년':
        return 1;
      case '2학년':
        return 2;
      case '3학년':
        return 3;
      case '선생님':
        return null;
      default:
        return null;
    }
  };

  const getClassValue = (
    gradeClass: '전체' | '1반' | '2반' | '3반' | '4반'
  ): number | null => {
    switch (gradeClass) {
      case '1반':
        return 1;
      case '2반':
        return 2;
      case '3반':
        return 3;
      case '4반':
        return 4;
      default:
        return null;
    }
  };

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
      {isShowFilterModal && (
        <FilterModal
          selectedStandard={selectedStandard}
          selectedGrade={selectedGrade}
          selectedGradeClass={selectedGradeClass}
          onStandardClick={handleStandardClick}
          onGradeClick={handleGradeClick}
          onGradeClassClick={handleGradeClassClick}
        />
      )}
      <UserList userList={filteredUsers} selectedStandard={selectedStandard} />
    </S.Container>
  );
};

export default SearchBar;
