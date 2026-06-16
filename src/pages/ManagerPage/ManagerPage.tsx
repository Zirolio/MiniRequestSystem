import { useAppDispatch, useAppSelector } from "@store/store";
import styles from "./ManagerPage.module.scss";
import Ticket from "@/widgets/Ticket/Ticket";
import TicketFilter from "@shared/ui/TicketStateSelect/TicketStateSelect";
import type { TicketState } from "@shared/types/Ticket.types";
import { setTicketsFilter } from "@store/slices/managerSlice";

export default function ManagerPage() {
    const dispatch = useAppDispatch();
    const ticketsFilter = useAppSelector(state => state.manager.ticketsFilter);
    const tickets = useAppSelector(state => state.tickets);

    const onFilterChange = (filter: TicketState | undefined) => {
        dispatch(setTicketsFilter(filter));
    }

    return (
        <div className={styles.container}>
            <div className={styles["tickets-container"]}>
                <div className={styles.header}>
                    <p className={styles.title}>Tickets</p>
                    <TicketFilter onChange={onFilterChange} includeAll />
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.tickets}>
                    { tickets.map(ticket => {
                        if (!ticketsFilter || ticket.state === ticketsFilter) {
                            return (
                                <Ticket
                                    key={ticket.id}
                                    target={ticket}
                                    mode="manager"
                                />
                            );
                        }
                    }) }
                </div>
            </div>
        </div>
    );
}