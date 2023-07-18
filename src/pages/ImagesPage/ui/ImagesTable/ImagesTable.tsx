import { PredictImage } from "features/PredictImage"
import { getImages } from "../../model/selectors/imagesSelectors"
import { useSelector } from "react-redux"
import styles from "./ImagesTable.module.scss"
import { dummyData } from "../../const/dummyData"
import { useState } from "react"
import { ISortingState } from "../../model/types/types"
import { defaultSorting } from "../../const/const"
import { SortingIndicator } from "shared/ui/SortingIndicator/SortingIndictator"
import { formatSize } from "shared/lib/formatSize/formatSize"
import { getTimeFromTimestamp } from "shared/lib/getTimeFromTimestamp/getTimeFromTimestamp"

export function ImagesTable() {
    const imagesData = dummyData // useSelector(getImages)
    const [tableData, setTableData] = useState(() => imagesData)
    const [sorting, setSorting] = useState<ISortingState>(defaultSorting)

    function nameSortHandler() {
        if (sorting.fileName === "asc") {
            setTableData(prev => [...prev.sort((a, b) => b.fileName.localeCompare(a.fileName))]) //reversed alph
            setSorting(() => ({ ...defaultSorting, fileName: "desc" }))
        } else {
            setTableData(prev => [...prev.sort((a, b) => a.fileName.localeCompare(b.fileName))]) //alph
            setSorting(() => ({ ...defaultSorting, fileName: "asc" }))
        }
    }

    function sizeSortHandler() {
        if (sorting.size === "asc") {
            setTableData(prev => [...prev.sort((a, b) => b.size - a.size)])
            setSorting(() => ({ ...defaultSorting, size: "desc" }))
        } else {
            setTableData(prev => [...prev.sort((a, b) => a.size - b.size)])
            setSorting(() => ({ ...defaultSorting, size: "asc" }))
        }
    }

    function timeSortHandler() {
        if (sorting.timestamp === "asc") {
            setTableData(prev => [...prev.sort((a, b) => b.timestamp - a.timestamp)])
            setSorting(() => ({ ...defaultSorting, time: "desc" }))
        } else {
            setTableData(prev => [...prev.sort((a, b) => b.timestamp - a.timestamp)])
            setSorting(() => ({ ...defaultSorting, time: "asc" }))
        }
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={nameSortHandler}>
                        File name
                        <SortingIndicator state={sorting.fileName} />
                    </th>
                    <th onClick={sizeSortHandler}>
                        Size
                        <SortingIndicator state={sorting.size} />
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
                    const { fileName, size, timestamp, id } = item

                    const formattedTime = getTimeFromTimestamp(timestamp)
                    const formattedSize = formatSize(size)

                    return (
                        <tr key={item.id} className={styles.item}>
                            <td>{fileName}</td>
                            <td>{formattedSize}</td>
                            <td>{formattedTime}</td>
                            <td>
                                <PredictImage id={id} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
