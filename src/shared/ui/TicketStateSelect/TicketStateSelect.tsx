import { TicketState } from "@shared/types/Ticket.types"
import styles from "./TicketStateSelect.module.scss";
import type { TicketStateSelectProps } from "./TicketStateSelect.interface";
import cx from "classix";

export default function TicketStateSelect({ onChange, includeAll, className }: TicketStateSelectProps) {
    return (
        <select
            className={cx(styles.container, className)}
            onChange={(e) => {
                if (onChange) {
                    const value = e.target.value === "All" ? undefined : e.target.value;
                    onChange(value as TicketState);
                }
            }}
        >
            { includeAll && <option value={"All"}>All</option> }
            { Object.values(TicketState).map((state) => (
                <option className={styles.option} key={state} value={state}>
                    {state}
                </option>
            )) }
        </select>
    );
}