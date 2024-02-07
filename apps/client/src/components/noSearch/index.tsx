import Image from 'next/image';
import * as S from './style';

const noSearch = () => {
  return (
    <S.NoSearch>
      <Image
        src='/images/EmptyPocket.png'
        alt='빈 복주머니'
        width={200}
        height={200}
      />
      <S.EmptyText>
        해당 정보를 가진 학생을 찾을 수 없어요.
        <br />
        오타, 띄어쓰기 등을 확인 해주세요.
      </S.EmptyText>
    </S.NoSearch>
  );
};

export default noSearch;
