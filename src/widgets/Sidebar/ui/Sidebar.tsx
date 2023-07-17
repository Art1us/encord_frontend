import { useMemo, useState } from "react"
import styles from "./Sidebar.module.scss"
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { SidebarItemsList } from "../const/sidebarItemsList"
import { useSelector } from "react-redux"
import { getPredictionsData } from "../model/selectors/sidebarSelectors"

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const predictionsData = useSelector(getPredictionsData)

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map(item => {
                const label = item.text === "Predictions" ? predictionsData.length.toString() : ""
                return (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={isCollapsed}
                        label={label}
                    />
                )
            }),
        [isCollapsed, predictionsData]
    )

    return (
        <aside className={styles.container}>
            <div className={styles.links}>{itemsList}</div>
        </aside>
    )
}
