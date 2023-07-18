import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./Header.module.scss"
import { Logo } from "shared/assets/Logo"

export function Header() {
    return (
        <header className={styles.container}>
            <Logo />
            <div className={styles.buttons}>
                <Button>Log In</Button>
                <Button variant={ButtonVariant.FILLED}>Get Started</Button>
            </div>
        </header>
    )
}
