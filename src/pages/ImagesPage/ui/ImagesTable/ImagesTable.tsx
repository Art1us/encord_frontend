import { PredictImage } from "features/PredictImage"
import { getImages } from "../../model/selectors/imagesSelectors"
import { useSelector } from "react-redux"
import styles from "./ImagesTable.module.scss"

export function ImagesTable() {
    const imagesData = useSelector(getImages)

    return (
        <div className={styles.container}>
            {imagesData.map(item => {
                const { fileName, size, time, id } = item

                const hours = time.getHours()
                const minutes = time.getMinutes()
                const seconds = time.getSeconds()

                const kilobytes = size / 1024

                return (
                    <div key={item.id} className={styles.item}>
                        <div>{fileName}</div>
                        <div>{kilobytes.toFixed(2)} KB</div>
                        <div>{`${hours}:${minutes}:${seconds}`}</div>
                        <PredictImage id={id} />
                    </div>
                )
            })}
        </div>
    )
}
