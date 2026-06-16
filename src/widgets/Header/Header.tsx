import { Link } from "react-router";
import styles from "./Header.module.scss";
import useUserMode from "@shared/hooks/useUserMode";
import { UserMode } from "@shared/types/UserMode.types";

export default function Header() {
    const mode = useUserMode();

    return (
        <header className={styles["header-container"]}>
            <p className={styles.title}>Mini Request System</p>
            <nav className={styles.nav}>
                { mode === UserMode.MANAGER && <Link className={styles["nav-link"]} to="/">User</Link> }
                { mode === UserMode.USER && <Link className={styles["nav-link"]} to="/manager">Manager</Link> }
            </nav>
        </header>
    );
}