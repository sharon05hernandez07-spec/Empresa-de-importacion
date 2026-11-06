import { create } from 'zustand';

import type { ShipmentStatus } from '../types/shipment';

export type StatusFilter = ShipmentStatus | 'all';

interface ShipmentFilterState {
  statusFilter: StatusFilter;
  setStatusFilter: (filter: StatusFilter) => void;
  resetFilter: () => void;
}

export const useShipmentFilterStore = create<ShipmentFilterState>()((set) => ({
  statusFilter: 'all',
  setStatusFilter: (filter) => set({ statusFilter: filter }),
  resetFilter: () => set({ statusFilter: 'all' }),
}));