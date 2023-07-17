import { IPredictionData } from "pages/PredictionsPage"
import { useState, useRef } from "react"
import styles from "./PredictionImage.module.scss"
import img from "../../const/img_1.jpg"

export function PredictionImage({ predictions }: { predictions: IPredictionData[] }) {
    const [imageSizeCoefficient, setImageSizeCoefficient] = useState(1)

    const imgRef = useRef<HTMLImageElement | null>(null)

    function imageLoadHandler(e: Event) {
        if (imgRef.current) {
            const img = e.target as HTMLImageElement
            const { width } = img
            const { naturalWidth } = imgRef.current
            const coef = Number((width / naturalWidth).toFixed(3))
            setImageSizeCoefficient(coef)
        }
    }
    return (
        <div className={styles.container}>
            {predictions.map(item => {
                const { x1, x2, y1, y2 } = item.bbox
                const width = Math.floor(Math.abs(x1 - x2) * imageSizeCoefficient)
                const height = Math.floor(Math.abs(y1 - y2) * imageSizeCoefficient)
                const top = y1 * imageSizeCoefficient
                const left = x1 * imageSizeCoefficient

                const style = {
                    border: "1px solid red",
                    position: "absolute",
                    width,
                    height,
                    top,
                    left,
                }

                const { label, score } = item
                const percent = Math.round(+score * 100)

                return (
                    <div key={label} style={style} className={styles.rectangle}>
                        <p className={styles.stats}>
                            {label} ({percent}%)
                        </p>
                    </div>
                )
            })}
            <img src={img} alt="" ref={imgRef} onLoad={imageLoadHandler} className={styles.img} />
        </div>
    )
}
