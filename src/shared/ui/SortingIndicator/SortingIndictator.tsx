import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import styles from "./SortingIndicator.module.scss"

export function SortingIndicator({ state }: { state: "" | "asc" | "desc" }) {
    return state === "asc" ? (
        <AiFillCaretDown className={styles.icon} />
    ) : state === "desc" ? (
        <AiFillCaretUp className={styles.icon} />
    ) : (
        <AiFillCaretDown className={`${styles.icon} ${styles.invisible}`} />
    )
}
