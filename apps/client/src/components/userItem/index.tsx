import * as S from './style';

interface UserItemProps {
  children: React.ReactNode;
  id: string;
  isClicked: boolean;
  onClick: () => void;
}

const UserItem = ({ children, id, isClicked, onClick }: UserItemProps) => {
  return (
    <S.UserItem id={id} isClicked={isClicked} onClick={onClick}>
      {children}
    </S.UserItem>
  );
};

export default UserItem;
