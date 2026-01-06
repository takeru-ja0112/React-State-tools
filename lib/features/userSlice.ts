import { createSlice , PayloadAction} from '@reduxjs/toolkit';

// 状態の型定義
interface UserState {
    id : number;
    name : string;
    email : string;
}

// 初期状態
const initialState : UserState = {
    id: 0,
    name: "",
    email : "",
}

// Sliceの作成
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state , action:PayloadAction<UserState>)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        deleteUser:(state)=>{
            state.id = 0;
            state.name = "";
            state.email = "";
        },
    },
});

export const { setUser , deleteUser } = userSlice.actions;

export default userSlice.reducer;