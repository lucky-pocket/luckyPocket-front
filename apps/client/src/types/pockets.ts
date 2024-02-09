export interface MyPocketsType {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

export interface MyPocketListType {
  pockets: MyPocketsType[];
  totalCount: number;
  length?: number;
}

export interface PocketType {
  userId: number;
  name: string;
  gender: 'MALE' | 'FEMALE' | string;
  amount: number;
  userType: 'TEACHER' | 'STUDENT' | 'GRADUATE' | string;
  grade?: number | null;
  class?: number | null;
}

export interface PocketListType {
  users: PocketType[];
}

export interface StandardType {
  standard: '복주머니' | '엽전' | null;
}

export interface Sender {
  userId: number;
  name: string;
}

export interface DetailPocketType {
  content: string;
  coins: number;
  sender: Sender | null;
}
