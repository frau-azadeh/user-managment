import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./feature/userSlice";

export const store = configureStore({
  reducer: {
    users: useReducer,
  },
});

export type RooteStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
