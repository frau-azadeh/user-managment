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
           const newUser: User = {
            id:Date.now(),
            name: action.payload.name,
            email: action.payload.email,
            isActive: true,
           }
         state.push(newUser);
         localStorage.setItem("users", JSON.stringify(state));
          
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;