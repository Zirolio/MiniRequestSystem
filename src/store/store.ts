import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./slices/ticketsSlice";
import managerReducer from "./slices/managerSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        manager: managerReducer,
        tickets: ticketsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;