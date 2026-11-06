import { create } from 'zustand';

interface WatchlistState {
  watchedIds: string[];
  toggleWatch: (shipmentId: string) => void;
  clearWatchlist: () => void;
}

export const useWatchlistStore = create<WatchlistState>()((set) => ({
  watchedIds: [],
  toggleWatch: (shipmentId) =>
    set((state) => ({
      watchedIds: state.watchedIds.includes(shipmentId)
        ? state.watchedIds.filter((id) => id !== shipmentId)
        : [...state.watchedIds, shipmentId],
    })),
  clearWatchlist: () => set({ watchedIds: [] }),
}));