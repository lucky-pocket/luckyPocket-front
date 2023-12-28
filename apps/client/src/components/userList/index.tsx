import * as S from './style';
import { UserItem } from '..';
import { useSelectedIdState } from 'client/stores';

const UserList = () => {
  const userList = [
    { id: '1', grade: '1', class: '1', name: '남도일' },
    { id: '2', grade: '2', class: '1', name: '유미란' },
    { id: '3', grade: '3', class: '3', name: '하인성' },
    { id: '4', grade: '1', class: '2', name: '서가영' },
    { id: '5', grade: '2', class: '4', name: '유명한' },
    { id: '6', grade: '1', class: '1', name: '남도일' },
    { id: '7', grade: '2', class: '1', name: '유미란' },
    { id: '8', grade: '3', class: '3', name: '하인성' },
    { id: '9', grade: '1', class: '2', name: '서가영' },
    { id: '10', grade: '2', class: '4', name: '유명한' },
    { id: '11', grade: '1', class: '1', name: '남도일' },
    { id: '12', grade: '2', class: '1', name: '유미란' },
    { id: '13', grade: '3', class: '3', name: '하인성' },
    { id: '14', grade: '1', class: '2', name: '서가영' },
    { id: '15', grade: '2', class: '4', name: '유명한' },
  ];

  const { selectedId, setSelectedId } = useSelectedIdState();

  const handleItemClick = (id: string) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <S.UserListWrapper>
      {userList.map(({ id, grade, class: userClass, name }, idx) => (
        <UserItem
          key={idx}
          id={id}
          isClicked={selectedId === id}
          onClick={() => handleItemClick(id)}
        >
          {grade}학년 {userClass}반 {name}
        </UserItem>
      ))}
      <S.BackgroundFilter />
    </S.UserListWrapper>
  );
};

export default UserList;
