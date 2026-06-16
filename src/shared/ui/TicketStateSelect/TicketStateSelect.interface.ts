import type { TicketState } from "@shared/types/Ticket.types";

export type TicketStateSelectProps = {
    value?: TicketState;
    className?: string;
} & (
    | {
        includeAll: true;
        onChange: (filter: TicketState | undefined) => void;
    }
    | {
        includeAll?: false;
        onChange: (filter: TicketState) => void;
    }
);