import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./slices/ticketsSlice";
import managerReducer from "./slices/managerSlice";
import userReducer from "./slices/userSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        manager: managerReducer,
        user: userReducer,
        tickets: ticketsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;