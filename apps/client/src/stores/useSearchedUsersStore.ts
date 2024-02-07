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
  searchUser: string;
  setSearchUser: (value: string) => void;
  selectedId: number | null;
  setSelectedId: (value: number | null) => void;
}

export const useSearchedUsersState = create<SearchedUsersStore>((set) => ({
  searchedUsers: [],
  searchUser: '',

  setSearchedUsers: (value) => set({ searchedUsers: value }),
  setSearchUser: (value) => set({ searchUser: value }),
  selectedId: null,
  setSelectedId: (value) => set({ selectedId: value }),
}));

export default useSearchedUsersState;
