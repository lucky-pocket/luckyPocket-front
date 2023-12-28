import { create } from 'zustand';

interface SearchedUser {
  userId: number;
  grade: number;
  class: number;
  name: string;
}

interface SearchedUsersStore {
  searchedUsers: SearchedUser[];
  setSearchedUsers: (value: SearchedUser[]) => void;
}

export const useSearchedUsersState = create<SearchedUsersStore>((set) => ({
  searchedUsers: [],
  setSearchedUsers: (value) => set({ searchedUsers: value }),
}));

export default useSearchedUsersState;
