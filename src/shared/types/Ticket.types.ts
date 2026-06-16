export enum TicketState {
    NEW = "New",
    IN_PROGRESS = "In progress",
    DONE = "Done"
}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    date: string;
    state: TicketState;
}