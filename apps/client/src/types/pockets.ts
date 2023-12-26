export interface PocketsType {
  id: number;
  isEmpty: boolean;
  sender: string | null;
  isPublic: boolean;
}

export interface PocketListType {
  pockets: PocketsType[];
  totalCount: number;
}
