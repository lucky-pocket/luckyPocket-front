'use client';

import { useState } from 'react';
import * as S from './style';

interface Props {}

const StandardArray = ['복주머니', '엽전'] as const;
const GradeArray = ['전체', '1학년', '2학년', '3학년', '선생님'] as const;
const GradeClassArray = ['전체', '1반', '2반', '3반', '4반'] as const;

type StandardType = (typeof StandardArray)[number];
type GradeType = (typeof GradeArray)[number];
type GradeClassType = (typeof GradeClassArray)[number];

const FilterModal: React.FC<Props> = () => {
  const [selectedStandard, setSelectedStandard] = useState<StandardType>(
    StandardArray[0]
  );
  const [selectedGrade, setSelectedGrade] = useState<GradeType>(GradeArray[0]);
  const [selectedGradeClass, setSelectedGradeClass] = useState<GradeClassType>(
    GradeClassArray[0]
  );

  const handleStandardClick = (standard: StandardType) => {
    setSelectedStandard(standard);
  };
  const handleGradeClick = (grade: GradeType) => {
    setSelectedGrade(grade);
  };

  const handleGradeClassClick = (gradeClass: GradeClassType) => {
    setSelectedGradeClass(gradeClass);
  };

  return (
    <S.FilterModal>
      <S.Title>필터</S.Title>
      <S.FilterBox>
        <S.Standard>
          <S.Desc>랭킹 기준</S.Desc>
          <S.OptionBox>
            {StandardArray.map((standard) => (
              <S.Option
                key={standard}
                onClick={() => handleStandardClick(standard)}
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
            {GradeArray.map((grade) => (
              <S.Option
                key={grade}
                onClick={() => handleGradeClick(grade)}
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
            {GradeClassArray.map((gradeClass) => (
              <S.Option
                key={gradeClass}
                onClick={() => handleGradeClassClick(gradeClass)}
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
