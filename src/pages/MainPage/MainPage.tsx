import CreateTicketForm from "@/widgets/CreateTicketForm/CreateTicketForm";
import useUserMode from "@shared/hooks/useUserMode";
import { UserMode } from "@shared/types/UserMode.types";
import Spacer from "@shared/ui/Spacer/Spacer";
import Ticket from "@/widgets/Ticket/Ticket";
import { useAppDispatch, useAppSelector } from "@store/store";
import TicketStateSelect from "@shared/ui/TicketStateSelect/TicketStateSelect";
import type { TicketState } from "@shared/types/Ticket.types";
import styles from "./MainPage.module.scss";
import { setUserTicketsFilter } from "@store/slices/userSlice";
import { setManagerTicketsFilter } from "@store/slices/managerSlice";

export default function MainPage() {
    const mode = useUserMode();
    const dispatch = useAppDispatch();
    const ticketsFilter = useAppSelector(state => {
        if (mode === UserMode.MANAGER) return state.manager.ticketsFilter;
        return state.user.ticketsFilter
    });
    const tickets = useAppSelector(state => state.tickets);

    const onChangeTicketsFilter = (filter: TicketState | undefined) => {
        if (mode === UserMode.MANAGER) {
            dispatch(setManagerTicketsFilter(filter));
        } else if (mode === UserMode.USER) {
            dispatch(setUserTicketsFilter(filter));
        }
    }

    const filteredTickets = tickets.filter(ticket =>
        !ticketsFilter || ticket.state === ticketsFilter
    );

    return (
        <div className={styles.container}>
            { mode === UserMode.USER && <CreateTicketForm /> }
            
            <div className={styles["tickets-container"]}>
                <div className={styles.header}>
                    <p className={styles.title}>Tickets</p>
                    <TicketStateSelect onChange={onChangeTicketsFilter} value={ticketsFilter} includeAll />
                </div>

                <Spacer color="surface-2" />

                <div className={styles.tickets}>
                    { filteredTickets.length ? filteredTickets.map(ticket => 
                        <Ticket
                            key={ticket.id}
                            target={ticket}
                            mode={mode}
                        />
                    ) : <p className={styles["empty-text"]}>No tickets</p> }
                </div>
            </div>
        </div>
    );
}