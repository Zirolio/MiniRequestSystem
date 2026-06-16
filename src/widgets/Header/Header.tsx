import { Link } from "react-router";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles["header-container"]}>
            <p className={styles.title}>Mini Request System</p>
            <nav className={styles.nav}>
                <Link className={styles["nav-link"]} to="/">User</Link>
                <Link className={styles["nav-link"]} to="/manager">Manager</Link>
            </nav>
        </header>
    );
}