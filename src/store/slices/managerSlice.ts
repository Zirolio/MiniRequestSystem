import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TicketState } from "@shared/types/Ticket.types";

interface ManagerSliceState {
    ticketsFilter?: TicketState;
}

const initialState: ManagerSliceState = {
    ticketsFilter: undefined
}

const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        setTicketsFilter(state, action: PayloadAction<ManagerSliceState["ticketsFilter"]>) {
            state.ticketsFilter = action.payload;
        }
    }
});

export const { setTicketsFilter } = managerSlice.actions;
export default managerSlice.reducer;