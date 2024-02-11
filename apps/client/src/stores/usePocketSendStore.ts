import { StateCreator, create } from 'zustand';
import { PersistOptions, persist } from 'zustand/middleware';

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
  reset: () => void;
}

export type PocketSendPersist = (
  config: StateCreator<PocketSendStore>,
  options: PersistOptions<PocketSendStore>
) => StateCreator<PocketSendStore>;

const initialState = {
  receiverID: 0,
  isPublic: false,
  coins: 0,
  message: '',
};

export const usePocketSendState = create<PocketSendStore>(
  (persist as PocketSendPersist)(
    (set) => ({
      pocketSend: initialState,
      setPocketSend: (value) => set({ pocketSend: value }),
      receiverName: '',
      setReceiverName: (value) => set({ receiverName: value }),
      reset: () => set({ pocketSend: initialState }),
    }),
    { name: 'pocketSend' }
  )
);

export default usePocketSendState;
