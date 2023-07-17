import { memo } from "react"
import { SidebarItemType } from "../../model/types/types"
import styles from "./SidebarItem.module.scss"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { classNames } from "shared/lib/classNames/classNames"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    return (
        <AppLink
            to={item.path}
            className={classNames(styles.container, {
                [styles.collapsed]: collapsed,
            })}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{item.text}</span>
        </AppLink>
    )
})
