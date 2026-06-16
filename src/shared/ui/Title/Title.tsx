import styles from "./Title.module.scss";

export default function Title({ children }: { children: string }) {
    return <p className={styles.title}>{children}</p>
}