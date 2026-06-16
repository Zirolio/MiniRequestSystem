import { TicketState } from "@shared/types/Ticket.types";
import cx from "classix";
import styles from "./Ticket.module.scss";
import type { TicketProps } from "./Ticket.interface";
import TicketFilter from "@shared/ui/TicketStateSelect/TicketStateSelect";
import RemoveBtn from "@shared/ui/RemoveBtn/RemoveBtn";
import { useAppDispatch } from "@store/store";
import { removeTicket, setTicketState } from "@store/slices/ticketsSlice";

export default function Ticket(props: TicketProps) {
    const dispatch = useAppDispatch();
    const target = props.target;

    const getStateConf = () => {
        switch (target.state) {
            case TicketState.NEW: return { className: styles["new"], title: TicketState.NEW };
            case TicketState.IN_PROGRESS: return { className: styles["in-progress"], title: TicketState.IN_PROGRESS };
            case TicketState.DONE: return { className: styles["done"], title: TicketState.DONE };
        }
    }
    
    const onChangeFilterState = (state: TicketState) => {
        dispatch(setTicketState({
            id: target.id,
            state
        }));
    }
    
    const onRemove = () => {
        dispatch(removeTicket(target.id));
    }
    
    const stateConf = getStateConf();

    return (
        <article className={styles["ticket"]}>
            <div className={styles["ticket-header"]}>
                <p className={styles.title}>{target.title}</p>
                <div className={styles["right-container"]}>
                    <div className={cx(styles["ticket-state"], stateConf.className)}>{stateConf.title}</div>

                    { props.mode === "manager" && <TicketFilter
                        className={styles["ticket-state-select"]}
                        onChange={(state) => onChangeFilterState(state)}
                    /> }

                    { (props.mode === "manager" || target.state === TicketState.NEW) &&
                        <>
                            <div className={cx(styles["spacer"], styles["v"])}></div>
                            <RemoveBtn onClick={onRemove} />
                        </>
                    }
                </div>
            </div>
            <div className={styles["spacer"]}></div>
            <div className={styles["ticket-description"]}>{target.description}</div>
            <div className={styles["ticket-date"]}>{target.date}</div>
        </article>
    );
}