import * as S from './style';
import { UserItem } from '..';
import { useSelectedIdState } from 'client/stores';

interface User {
  userId: number;
  grade: number;
  class: number;
  name: string;
}

interface UserListProps {
  searchedUsers: User[];
}

const UserList = ({ searchedUsers }: UserListProps) => {
  const { selectedId, setSelectedId } = useSelectedIdState();

  const handleItemClick = (userId: number) => {
    setSelectedId(userId !== selectedId ? userId : null);
  };

  return (
    <S.UserListWrapper>
      {searchedUsers.map(({ userId, grade, class: userClass, name }, idx) => (
        <UserItem
          key={idx}
          userId={userId}
          isClicked={selectedId === userId}
          onClick={() => handleItemClick(userId)}
        >
          {grade}학년 {userClass}반 {name}
        </UserItem>
      ))}
      <S.BackgroundFilter />
    </S.UserListWrapper>
  );
};

export default UserList;
