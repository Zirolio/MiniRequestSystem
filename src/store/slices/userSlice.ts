import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TicketState } from "@shared/types/Ticket.types";

interface UserSliceState {
    ticketsFilter?: TicketState;
}

const initialState: UserSliceState = {
    ticketsFilter: undefined
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserTicketsFilter(state, action: PayloadAction<UserSliceState["ticketsFilter"]>) {
            state.ticketsFilter = action.payload;
        }
    }
});

export const { setUserTicketsFilter } = userSlice.actions;
export default userSlice.reducer;