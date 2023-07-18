import { memo } from "react"
import { SidebarItemType } from "../../model/types/types"
import styles from "./SidebarItem.module.scss"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Label } from "shared/ui/Label/Label"
import { classNames } from "shared/lib/classNames/classNames"
import { useLocation } from "react-router-dom"

interface SidebarItemProps {
    item: SidebarItemType
    label?: string
}

export const SidebarItem = memo(({ item, label }: SidebarItemProps) => {
    const { pathname } = useLocation()

    const isCurrent = pathname === item.path
    return (
        <AppLink
            to={item.path}
            className={classNames(styles.container, { [styles.current]: isCurrent })}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{item.text}</span>
            {!!label && label !== "0" && <Label value={label} />}
        </AppLink>
    )
})
