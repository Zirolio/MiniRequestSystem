import { type Ticket } from "@shared/types/Ticket.types";

export type TicketProps = | {
    target: Ticket;
    mode: "manager";
} | {
    target: Ticket;
    mode?: "user";
};