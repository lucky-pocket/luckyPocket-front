import { create } from 'zustand';

interface SelectedId {
  selectedId: string | null;
  setSelectedId: (value: string | null) => void;
}

const useSelectedIdState = create<SelectedId>((set) => ({
  selectedId: null,
  setSelectedId: (value) => set({ selectedId: value }),
}));

export default useSelectedIdState;
