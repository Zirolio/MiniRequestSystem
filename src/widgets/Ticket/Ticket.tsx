import { TicketState } from "@shared/types/Ticket.types";
import cx from "classix";
import styles from "./Ticket.module.scss";
import type { TicketProps } from "./Ticket.interface";
import TicketFilter from "@shared/ui/TicketStateSelect/TicketStateSelect";
import { useAppDispatch } from "@store/store";
import { editTicketDescription, removeTicket, setTicketState } from "@store/slices/ticketsSlice";
import Spacer from "@shared/ui/Spacer/Spacer";
import TicketStateIndicator from "@shared/ui/TicketStateIndicator/TicketStateIndicator";
import Button from "@shared/ui/Button/Button";
import { useState } from "react";

export default function Ticket(props: TicketProps) {
    const target = props.target;

    const [state, setState] = useState<"edit" | "save">("edit");
    const [description, setDescription] = useState<string>(target.description);

    const dispatch = useAppDispatch();
    
    const onChangeFilterState = (state: TicketState) => {
        dispatch(setTicketState({
            id: target.id,
            state
        }));
    }

    const onRemove = () => {
        if (state === "save") dispatch(removeTicket(target.id));
        else if (state === "edit") setState("save");
    }

    const onEdit = () => {
        if (state === "edit") setState("save");
        else if (state === "save") {
            setState("edit");
            dispatch(editTicketDescription({
                id: target.id,
                description: description.trim() || ""
            }))
        }
    }
    

    return (
        <article className={styles["ticket"]}>
            <div className={styles["ticket-header"]}>
                <p className={styles.title}>{target.title}</p>
                <div className={styles["right-container"]}>
                    <TicketStateIndicator state={target.state} />

                    { props.mode === "manager" && <TicketFilter
                        className={styles["ticket-state-select"]}
                        onChange={(state) => onChangeFilterState(state)}
                    /> }

                    { (props.mode === "manager" || target.state === TicketState.NEW) &&
                        <>
                            <Spacer type="vertical" color="bg" weight="1" margin="2" />
                            <div className={cx(styles["spacer"], styles["v"])}></div>
                            <Button onClick={onRemove} variant="remove" />
                            { props.mode !== "manager" && <Button onClick={onEdit} variant={state} disabled={state === "save" && description.trim().length === 0} /> }
                        </>
                    }
                </div>
            </div>

            <Spacer type="horizontal" color="surface" weight="1" margin="2" />
            
            <div
                className={cx(styles["ticket-description"], state === "save" && styles["editing"])}
                contentEditable={state === "save"}
                suppressContentEditableWarning={state === "save"}
                onInput={(e) => setDescription(e.currentTarget.textContent || "")}
            >{target.description}</div>
            <div className={styles["ticket-date"]}>{target.date}</div>
        </article>
    );
}