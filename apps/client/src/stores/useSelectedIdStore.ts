import { create } from 'zustand';

interface SelectedId {
  selectedId: number | null;
  setSelectedId: (value: number | null) => void;
}

const useSelectedIdState = create<SelectedId>((set) => ({
  selectedId: null,
  setSelectedId: (value) => set({ selectedId: value }),
}));

export default useSelectedIdState;
