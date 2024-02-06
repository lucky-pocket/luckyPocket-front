'use client';
import * as S from './style';
import { SearchIcon } from 'client/assets';
import FilterButton from './filter';
import { userType } from 'common';
import { UserList } from '..';
import { PocketListType } from 'client/types';
import { FilterModal } from '..';
import { useState } from 'react';
interface Props {
  keyword: string;
  isShowFilterModal: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: PocketListType;
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

  const [filteredUsers, setFilteredUsers] = useState<PocketType[]>(data.users); // 필터링된 사용자 목록 상태
  const [selectedStandard, setSelectedStandard] = useState<'복주머니' | '엽전'>(
    '복주머니'
  );
  const [selectedGrade, setSelectedGrade] = useState<
    '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  >('전체');
  const [selectedGradeClass, setSelectedGradeClass] = useState<
    '전체' | '1반' | '2반' | '3반' | '4반'
  >('전체');

  // 필터링된 사용자 목록 업데이트 함수
  const updateFilteredUsers = () => {
    // 기준에 따라 사용자를 필터링합니다.
    let filtered = data.users.filter((user) => {
      // 표준 기준에 따라 필터링
      if (selectedStandard === '복주머니' && user.userType === 'TEACHER')
        return false;
      // 학년에 따라 필터링
      if (
        selectedGrade !== '전체' &&
        user.grade !== getGradeValue(selectedGrade)
      )
        return false;
      // 반에 따라 필터링
      if (
        selectedGradeClass !== '전체' &&
        user.class !== getClassValue(selectedGradeClass)
      )
        return false;
      return true;
    });
    // 필터링된 사용자 목록 업데이트
    setFilteredUsers(filtered);
  };

  // 표준 클릭 핸들러
  const handleStandardClick = (standard: '복주머니' | '엽전') => {
    setSelectedStandard(standard);
    updateFilteredUsers();
  };

  // 학년 클릭 핸들러
  const handleGradeClick = (
    grade: '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  ) => {
    setSelectedGrade(grade);
    updateFilteredUsers();
  };

  // 반 클릭 핸들러
  const handleGradeClassClick = (
    gradeClass: '전체' | '1반' | '2반' | '3반' | '4반'
  ) => {
    setSelectedGradeClass(gradeClass);
    updateFilteredUsers();
  };

  // 학년 문자열을 해당하는 숫자로 변환하는 함수
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
        return null; // 선생님인 경우 grade가 null이므로 null 반환
      default:
        return null;
    }
  };

  // 반 문자열을 해당하는 숫자로 변환하는 함수
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
      <UserList userList={filteredUsers} />
    </S.Container>
  );
};

export default SearchBar;
