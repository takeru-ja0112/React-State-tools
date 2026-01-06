import { create } from "zustand";

interface CounterStore {
    count: number;
    increment: () => void;
    setCount: (value : number) => void;
};

const useCounterStore = create<CounterStore>((set) => ({
    count : 0,
    increment: () => set((state) => ({count : state.count + 1})),
    setCount: (value : number) => set({count : value})
}))

export default useCounterStore;