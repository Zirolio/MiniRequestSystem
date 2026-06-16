import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { TicketState, type Ticket } from "../../shared/types/Ticket.types";

type TicketsState = Array<Ticket>;

const initialState: TicketsState = [
    { id: nanoid(), state: TicketState.NEW, title: "Hello 1", description: "Hello world", date: "Tue Jun 11 2026" },
    { id: nanoid(), state: TicketState.IN_PROGRESS, title: "Hello 2", description: "Hello world", date: "Tue Jun 13 2026" },
    { id: nanoid(), state: TicketState.DONE, title: "Hello 3", description: "Hello world", date: "Tue Jun 16 2026" },
];

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        addTicket(state, action: PayloadAction<Omit<Ticket, "id" | "state">>) {
            state.push({
                id: nanoid(),
                state: TicketState.NEW,
                ...action.payload,
            });
        },
        removeTicket(state, action: PayloadAction<Ticket["id"]>) {
            return state.filter(ticket => ticket.id !== action.payload);
        },
        setTicketState(state, action: PayloadAction<{ id: Ticket["id"], state: Ticket["state"] }>) {
            const ticket = state.find(ticket => ticket.id === action.payload.id);

            if (ticket) {
                ticket.state = action.payload.state;
            }
        },
        editTicketDescription(state, action: PayloadAction<{ id: Ticket["id"], description: Ticket["description"] }>) {
            const ticket = state.find(ticket => ticket.id === action.payload.id);

            if (ticket) {
                ticket.description = action.payload.description;
            }
        }
    }
});

export const { addTicket, removeTicket, setTicketState, editTicketDescription } = ticketsSlice.actions;
export default ticketsSlice.reducer;