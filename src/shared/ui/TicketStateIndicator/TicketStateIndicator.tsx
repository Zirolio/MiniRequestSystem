import { TicketState } from "@shared/types/Ticket.types";
import cx from "classix";
import styles from "./TicketStateIndicator.module.scss";

interface TicketStateProps {
    state?: TicketState;
}

export default function TicketStateIndicator({ state }: TicketStateProps) {
    const getStateConf = () => {
        switch (state) {
            case TicketState.NEW: return { className: styles["new"], title: TicketState.NEW };
            case TicketState.IN_PROGRESS: return { className: styles["in-progress"], title: TicketState.IN_PROGRESS };
            case TicketState.DONE: return { className: styles["done"], title: TicketState.DONE };
            case undefined: return { className: styles["all"], title: "All" };
        }
    }

    const stateConf = getStateConf();

    return <div className={cx(styles["ticket-state"], stateConf.className)}>{stateConf.title}</div>
}