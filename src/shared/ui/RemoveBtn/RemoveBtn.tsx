import styles from "./RemoveBtn.module.scss";

interface RemoveBtnProps {
    onClick?: () => void;
}

export default function RemoveBtn({ onClick }: RemoveBtnProps) {
    return (
        <button className={styles["remove-btn"]} onClick={onClick}>
            {"\u00d7"}
        </button>
    );
    
}