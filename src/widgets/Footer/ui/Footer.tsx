import styles from "./Footer.module.scss"

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.border} />
            <p className={styles.copyright}>© 2022 Encord. All rights reserved.</p>
        </footer>
    )
}
