import * as S from './style';

interface UserItemProps {
  children: React.ReactNode;
  userId: number;
  isClicked: boolean;
  onClick: () => void;
}

const UserItem = ({ children, isClicked, onClick }: UserItemProps) => {
  return (
    <S.UserItem isClicked={isClicked} onClick={onClick}>
      {children}
    </S.UserItem>
  );
};

export default UserItem;
