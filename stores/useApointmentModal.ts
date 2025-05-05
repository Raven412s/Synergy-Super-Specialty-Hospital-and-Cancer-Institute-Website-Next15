// stores/useAppointmentDialog.ts
import { create } from "zustand";

interface AppointmentDialogStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useAppointmentDialog = create<AppointmentDialogStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
