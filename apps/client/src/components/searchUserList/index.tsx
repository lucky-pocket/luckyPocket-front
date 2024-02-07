import * as S from './style';
import { SearchUserItem } from '..';
import { usePocketSendState, useSearchedUsersState } from 'client/stores';
import { UsersType } from 'client/types';

interface SearchUserListProps {
  searchedUsers: UsersType[];
}

const SearchUserList = ({ searchedUsers }: SearchUserListProps) => {
  const { selectedId, setSelectedId } = useSearchedUsersState();
  const { pocketSend, setPocketSend } = usePocketSendState();

  const handleItemClick = (userId: number) => {
    setSelectedId(userId !== selectedId ? userId : null);
    setPocketSend({
      ...pocketSend,
      receiver: userId,
    });
  };

  return (
    <S.UserListWrapper>
      {searchedUsers.map(({ userId, grade, class: userClass, name }) => (
        <SearchUserItem
          key={userId}
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
