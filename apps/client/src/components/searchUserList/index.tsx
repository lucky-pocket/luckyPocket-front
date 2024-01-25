import * as S from './style';
import { SearchUserItem } from '..';
import { useSearchedUsersState } from 'client/stores';

interface User {
  userId: number;
  grade: number;
  class: number;
  name: string;
}

interface SearchUserListProps {
  searchedUsers: User[];
}

const SearchUserList = ({ searchedUsers }: SearchUserListProps) => {
  const { selectedId, setSelectedId } = useSearchedUsersState();

  const handleItemClick = (userId: number) => {
    setSelectedId(userId !== selectedId ? userId : null);
  };

  return (
    <S.UserListWrapper>
      {searchedUsers.map(({ userId, grade, class: userClass, name }, idx) => (
        <SearchUserItem
          key={idx}
          userId={userId}
          isClicked={selectedId === userId}
          onClick={() => handleItemClick(userId)}
        >
          {grade}학년 {userClass}반 {name}
        </SearchUserItem>
      ))}
      <S.BackgroundFilter />
    </S.UserListWrapper>
  );
};

export default SearchUserList;
