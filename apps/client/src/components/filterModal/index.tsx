'use client';

import React from 'react';
import * as S from './style';

interface Props {
  selectedStandard: '복주머니' | '엽전';
  selectedGrade: '전체' | '1학년' | '2학년' | '3학년' | '선생님';
  selectedGradeClass: '전체' | '1반' | '2반' | '3반' | '4반';
  onStandardClick: (standard: '복주머니' | '엽전') => void;
  onGradeClick: (
    grade: '전체' | '1학년' | '2학년' | '3학년' | '선생님'
  ) => void;
  onGradeClassClick: (
    gradeClass: '전체' | '1반' | '2반' | '3반' | '4반'
  ) => void;
}

const FilterModal: React.FC<Props> = ({
  selectedStandard,
  selectedGrade,
  selectedGradeClass,
  onStandardClick,
  onGradeClick,
  onGradeClassClick,
}) => {
  return (
    <S.FilterModal>
      <S.Title>필터</S.Title>
      <S.FilterBox>
        <S.Standard>
          <S.Desc>랭킹 기준</S.Desc>
          <S.OptionBox>
            {['복주머니', '엽전'].map((standard) => (
              <S.Option
                key={standard}
                onClick={() => onStandardClick(standard as '복주머니' | '엽전')}
                isActive={selectedStandard === standard}
              >
                {standard}
              </S.Option>
            ))}
          </S.OptionBox>
        </S.Standard>
        <S.Grade>
          <S.Desc>학년</S.Desc>
          <S.OptionBox>
            {['전체', '1학년', '2학년', '3학년', '선생님'].map((grade) => (
              <S.Option
                key={grade}
                onClick={() =>
                  onGradeClick(
                    grade as '전체' | '1학년' | '2학년' | '3학년' | '선생님'
                  )
                }
                isActive={selectedGrade === grade}
              >
                {grade}
              </S.Option>
            ))}
          </S.OptionBox>
        </S.Grade>
        <S.GradeClass>
          <S.Desc>반</S.Desc>
          <S.OptionBox>
            {['전체', '1반', '2반', '3반', '4반'].map((gradeClass) => (
              <S.Option
                key={gradeClass}
                onClick={() =>
                  onGradeClassClick(
                    gradeClass as '전체' | '1반' | '2반' | '3반' | '4반'
                  )
                }
                isActive={selectedGradeClass === gradeClass}
              >
                {gradeClass}
              </S.Option>
            ))}
          </S.OptionBox>
        </S.GradeClass>
      </S.FilterBox>
    </S.FilterModal>
  );
};

export default FilterModal;
