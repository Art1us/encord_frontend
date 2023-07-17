import { memo } from "react"
import { SidebarItemType } from "../../model/types/types"
import styles from "./SidebarItem.module.scss"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { classNames } from "shared/lib/classNames/classNames"
import { Label } from "shared/ui/Label/Label"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
    label?: string
}

export const SidebarItem = memo(({ item, collapsed, label }: SidebarItemProps) => {
    return (
        <AppLink
            to={item.path}
            className={classNames(styles.container, {
                [styles.collapsed]: collapsed,
            })}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{item.text}</span>
            {!!label && <Label value={label} />}
        </AppLink>
    )
})
