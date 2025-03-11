import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const initialState :User[] = [];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<{name: string; email:string;}>) =>{
           state.push({
            id:Date.now(),
            name: action.payload.name,
            email: action.payload.email,
            isActive: true,
           })
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;