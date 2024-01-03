import { create } from "zustand";

interface LoadingState {
  Complete: boolean;
  toggleComplete: () => void;
}

export const useLoadingState = create<LoadingState>()((set) => ({
  Complete: false,
  toggleComplete: () => set((value) => ({ Complete: !value.Complete })),
}));
