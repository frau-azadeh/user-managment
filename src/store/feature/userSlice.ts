import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "postcss";
import { v4 as uuidv4 } from "uuid";

interface User{
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

const initialState : User[] = JSON.parse(localStorage.getItem("users") || "[]");

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    addUser:(state, action:PayloadAction<{name: string; email: string}>)=>{
      const newUser : User = {
        id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        isActive: true,
      }
      state.push(newUser);
      localStorage.setItem("users", JSON.stringify(state))
    },
    updateUser:(state, action: PayloadAction<{id: string; name: string; email: string}>)=>{
      const user = state.find((user)=> user.id === action.payload.id);
      if(user){
        user.name = action.payload.name;
        user.email = action.payload.email;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    deleteUser:(state, action:PayloadAction<string>)=>{
      const updateUsers = state.filter((user)=> user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(updateUsers));
      return updateUsers;

    },
  }
})
export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;