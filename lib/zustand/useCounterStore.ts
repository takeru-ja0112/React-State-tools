import { create } from "zustand";

interface CounterStore {
    zustandCount: number;
    increment: () => void;
    setCount: (value : number) => void;
};

const useCounterStore = create<CounterStore>((set) => ({
    zustandCount : 0,
    increment: () => set((state) => ({zustandCount : state.zustandCount + 1})),
    setCount: (value : number) => set({zustandCount : value})
}))

export default useCounterStore;