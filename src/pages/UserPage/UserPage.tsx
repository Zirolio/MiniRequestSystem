import Ticket from "@/widgets/Ticket/Ticket";
import { useAppSelector } from "@store/store";
import styles from "./UserPage.module.scss";
import CreateTicketForm from "@/widgets/CreateTicketForm/CreateTicketForm";

export default function UserPage() {
    const tickets = useAppSelector(state => state.tickets);

    return (
        <div className={styles.container}>
            <CreateTicketForm />
            <div className={styles["tickets-container"]}>
                <p className={styles.title}>Active tickets</p>

                <div className={styles.spacer}></div>

                <div className={styles.tickets}>
                    { tickets.map(ticket => <Ticket key={ticket.id} target={ticket} />) }
                </div>
            </div>
        </div>
    );
}