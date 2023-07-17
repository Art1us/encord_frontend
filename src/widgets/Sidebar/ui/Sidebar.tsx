import { useMemo, useState } from "react"
import styles from "./Sidebar.module.scss"
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { SidebarItemsList } from "../const/sidebarItemsList"

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map(item => (
                <SidebarItem item={item} collapsed={isCollapsed} key={item.path} />
            )),
        [isCollapsed]
    )

    return (
        <aside className={styles.container}>
            <div className={styles.links}>{itemsList}</div>
        </aside>
    )
}
