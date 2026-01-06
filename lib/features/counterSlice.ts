import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 状態の型定義
interface CounterState {
    value: number;
}

// 初期状態
const initialState: CounterState = {
    value: 0,
}

// Sliceの作成
const counterSlice = createSlice({
    name: "counter",//sliceの名前
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        // -1するアクション
        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount : ( state , action: PayloadAction<number>)=>{
            state.value += action.payload;
        },

        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment , decrement , incrementByAmount , reset } = counterSlice.actions;

export default counterSlice.reducer;