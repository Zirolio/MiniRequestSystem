import cx from "classix";
import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes } from "react";

interface RemoveBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "edit" | "save" | "remove";
}

const icons = {
    edit: "✎",
    save: "✔",
    remove: "\u00d7",
} as const;

export default function Button({
    variant,
    className,
    ...props
}: RemoveBtnProps) {
    return (
        <button
            className={cx(styles["btn"], styles[variant], className)}
            { ...props }
        >
            { icons[variant] }
        </button>
    );
}