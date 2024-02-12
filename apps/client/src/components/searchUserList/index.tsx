import * as S from './style';
import { SearchUserItem } from '..';
import { usePocketSendState, useSearchedUsersState } from 'client/stores';
import { UsersType } from 'client/types';

interface SearchUserListProps {
  searchedUsers: UsersType[];
}

const SearchUserList = ({ searchedUsers }: SearchUserListProps) => {
  const { selectedId, setSelectedId } = useSearchedUsersState();
  const { pocketSend, setPocketSend, setReceiverName } = usePocketSendState();

  const handleItemClick = (userId: number, name: string) => {
    setSelectedId(userId !== selectedId ? userId : null);
    setPocketSend({
      ...pocketSend,
      receiverID: userId,
    });
    setReceiverName(name);
  };

  function base64Decode(encodedString: string) {
    return window.atob(encodedString);
  }

  let accessToken = localStorage.getItem('accessToken')?.split('.')[1] ?? '';
  let decodedObject = JSON.parse(base64Decode(accessToken));

  return (
    <S.UserListWrapper>
      {searchedUsers
        .filter((item) => decodedObject.userId !== item.userId)
        .map(({ userId, grade, class: userClass, name, userType }) => (
          <SearchUserItem
            key={userId}
            isClicked={selectedId === userId}
            onClick={() => handleItemClick(userId, name)}
          >
            {userType === 'GRADUATE'
              ? `졸업생 ${name}`
              : userType === 'TEACHER'
              ? `${name} 선생님`
              : `${grade}학년 ${userClass}반 ${name}`}
          </SearchUserItem>
        ))}
      <S.BackgroundFilter />
    </S.UserListWrapper>
  );
};

export default SearchUserList;
