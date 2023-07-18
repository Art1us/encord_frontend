import { getPredictions } from "../../model/selectors/predictionsPageSelectors"
import { useSelector } from "react-redux"
import styles from "./PredictionsTable.module.scss"
import { ViewPrediction } from "features/ViewPrediction"
import { SortingIndicator } from "shared/ui/SortingIndicator/SortingIndictator"
import { useState } from "react"
import { dummyData } from "../../const/dummyData"
import { defaultSorting } from "../../const/const"
import { ISortingState } from "../../model/types/types"
import { getTimeFromTimestamp } from "shared/lib/getTimeFromTimestamp/getTimeFromTimestamp"

export function PredictionsTable() {
    const predictionsData = dummyData //useSelector(getPredictions)
    const [tableData, setTableData] = useState(() => predictionsData)
    const [sorting, setSorting] = useState<ISortingState>(defaultSorting)

    function textSortHandler(key: "title" | "description") {
        if (sorting[key] === "asc") {
            setTableData(prev => [...prev.sort((a, b) => b[key].localeCompare(a[key]))]) //reversed alph
            setSorting(() => ({ ...defaultSorting, [key]: "desc" }))
        } else {
            setTableData(prev => [...prev.sort((a, b) => a[key].localeCompare(b[key]))]) //alph
            setSorting(() => ({ ...defaultSorting, [key]: "asc" }))
        }
    }

    function timeSortHandler() {
        if (sorting.timestamp === "asc") {
            setTableData(prev => [...prev.sort((a, b) => b.timestamp - a.timestamp)])
            setSorting(() => ({ ...defaultSorting, timestamp: "desc" }))
        } else {
            setTableData(prev => [...prev.sort((a, b) => b.timestamp - a.timestamp)])
            setSorting(() => ({ ...defaultSorting, timestamp: "asc" }))
        }
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={() => textSortHandler("title")}>
                        Title
                        <SortingIndicator state={sorting.title} />
                    </th>
                    <th onClick={() => textSortHandler("description")}>
                        Description
                        <SortingIndicator state={sorting.description} />
                    </th>
                    <th onClick={timeSortHandler}>
                        Time
                        <SortingIndicator state={sorting.timestamp} />
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(item => {
                    const { title, description, timestamp, id, predictions } = item

                    const time = getTimeFromTimestamp(timestamp)

                    return (
                        <tr key={id} className={styles.item}>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{time}</td>
                            <td>
                                <ViewPrediction predictions={predictions} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
