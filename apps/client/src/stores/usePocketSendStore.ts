import { create } from 'zustand';

interface PocketSend {
  receiver: number;
  reveal: boolean;
  coins: number;
  message: string;
}

interface PocketSendStore {
  pocketSend: PocketSend;
  setPocketSend: (value: PocketSend) => void;
}

export const usePocketSendState = create<PocketSendStore>((set) => ({
  pocketSend: {
    receiver: 0,
    reveal: true,
    coins: 0,
    message: '',
  },
  setPocketSend: (value) => set({ pocketSend: value }),
}));

export default usePocketSendState;
