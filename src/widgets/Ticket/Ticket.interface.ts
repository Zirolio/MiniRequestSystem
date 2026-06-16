import { type Ticket } from "@shared/types/Ticket.types";
import type { UserMode } from "@shared/types/UserMode.types";

export interface TicketProps {
    target: Ticket;
    mode?: UserMode.USER | UserMode.MANAGER;
};