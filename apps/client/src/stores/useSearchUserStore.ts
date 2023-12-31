import { create } from 'zustand';

interface SearchUser {
  searchUser: string;
  setSearchUser: (value: string) => void;
}

const useSearchUserState = create<SearchUser>((set) => ({
  searchUser: '',
  setSearchUser: (value) => set({ searchUser: value }),
}));

export default useSearchUserState;
