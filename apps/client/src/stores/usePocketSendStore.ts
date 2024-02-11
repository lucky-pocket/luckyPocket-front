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
}

export type PocketSendPersist = (
  config: StateCreator<PocketSendStore>,
  options: PersistOptions<PocketSendStore>
) => StateCreator<PocketSendStore>;

export const usePocketSendState = create<PocketSendStore>(
  (persist as PocketSendPersist)(
    (set) => ({
      pocketSend: {
        receiverID: 0,
        isPublic: false,
        coins: 0,
        message: '',
      },
      setPocketSend: (value) => set({ pocketSend: value }),
      receiverName: '',
      setReceiverName: (value) => set({ receiverName: value }),
    }),
    { name: 'pocketSend' }
  )
);

export default usePocketSendState;
