export interface UsersType {
  userId: number;
  grade: number;
  class: number;
  name: string;
  userType: string;
}

export interface MyInfoType {
  userId: number;
  userRole: 'MEMBER';
  name: string;
  hasNewNotification: boolean;
}
