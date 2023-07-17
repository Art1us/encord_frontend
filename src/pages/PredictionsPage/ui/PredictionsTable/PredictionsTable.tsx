import { getPredictions } from "../../model/selectors/predictionsPageSelectors"
import { useSelector } from "react-redux"
import styles from "./PredictionsTable.module.scss"
import { ViewPrediction } from "features/ViewPrediction"

export function PredictionsTable() {
    const predictionsData = useSelector(getPredictions)

    return (
        <div className={styles.container}>
            {predictionsData.map(item => {
                const { title, description, timestamp, id } = item

                const hours = timestamp.getHours()
                const minutes = timestamp.getMinutes()
                const seconds = timestamp.getSeconds()

                return (
                    <div key={id} className={styles.item}>
                        <div>{title}</div>
                        <div>{description}</div>
                        <div>{`${hours}:${minutes}:${seconds}`}</div>
                        <ViewPrediction id={id} />
                    </div>
                )
            })}
        </div>
    )
}
