import { create } from 'zustand';

interface PocketSend {
  receiverID: number;
  isPublic: boolean;
  coins: number;
  message: string;
}

interface PocketSendStore {
  pocketSend: PocketSend;
  setPocketSend: (value: PocketSend) => void;
  receiverName: string;
  setReceiverName: (value: string) => void;
}

export const usePocketSendState = create<PocketSendStore>((set) => ({
  pocketSend: {
    receiverID: 0,
    isPublic: false,
    coins: 0,
    message: '',
  },
  setPocketSend: (value) => set({ pocketSend: value }),
  receiverName: '',
  setReceiverName: (value) => set({ receiverName: value }),
}));

export default usePocketSendState;
