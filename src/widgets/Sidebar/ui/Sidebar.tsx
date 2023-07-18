import { useMemo } from "react"
import styles from "./Sidebar.module.scss"
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { SidebarItemsList } from "../const/sidebarItemsList"
import { useSelector } from "react-redux"
import { getUnviewedPredictions } from "../model/selectors/sidebarSelectors"

export function Sidebar() {
    const unviewedPredictions = useSelector(getUnviewedPredictions)

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map(item => {
                const label = item.text === "Predictions" ? unviewedPredictions.toString() : ""
                return <SidebarItem key={item.path} item={item} label={label} />
            }),
        [unviewedPredictions]
    )

    return (
        <aside className={styles.container}>
            <div className={styles.links}>{itemsList}</div>
        </aside>
    )
}
