import { create } from 'zustand';

interface PocketSendStore {
  pocketLimitModal: boolean;
  setPocketLimitModal: (value: boolean) => void;
}

export const usePocketLimitModalState = create<PocketSendStore>((set) => ({
  pocketLimitModal: false,
  setPocketLimitModal: (value: boolean) => set({ pocketLimitModal: value }),
}));

export default usePocketLimitModalState;
