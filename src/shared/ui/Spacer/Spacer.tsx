import cx from "classix";
import styles from "./Spacer.module.scss";

interface SpacerProps {
    type?: "vertical" | "horizontal";
    color?: "bg" | "surface" | "surface-2";
    weight?: "0" | "1" | "2" | "3" | "4"; // ...
    margin?: "0" | "1" | "2" | "3" | "4"; // ...
}

export default function Spacer({ type = "horizontal", color = "bg", weight = "1", margin = "2" }: SpacerProps) {
    return <div className={cx(
        styles.spacer,
        type === "vertical" && styles.vertical,
        type === "horizontal" && styles.horizontal,
    )} style={{
        "--bg": `var(--${color})`,
        "--weight": `var(--space-${weight})`,
        "--margin": `var(--space-${margin})`,
    } as React.CSSProperties}></div>
}