import { IPredictionData } from "pages/PredictionsPage"
import { useState, useRef, useEffect } from "react"
import styles from "./PredictionImage.module.scss"
import img from "../../const/img_1.jpg"
import { colors } from "features/ViewPrediction/const/colors"

export function PredictionImage({ predictions }: { predictions: IPredictionData[] }) {
    const [imageSizeCoefficient, setImageSizeCoefficient] = useState(1)
    const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 })

    const imgRef = useRef<HTMLImageElement | null>(null)

    function caluclateCoefficient() {
        if (imgRef.current) {
            const { width, naturalWidth, naturalHeight } = imgRef.current
            const coef = Number((width / naturalWidth).toFixed(3))
            setNaturalSize({ width: naturalWidth, height: naturalHeight })
            setImageSizeCoefficient(coef)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", caluclateCoefficient)
        return () => window.removeEventListener("resize", caluclateCoefficient)
    }, [])

    return (
        <div className={styles.container}>
            {predictions.map((item, index) => {
                const { x1, x2, y1, y2 } = item.bbox

                const limitedX2 = x2 > naturalSize.width ? naturalSize.width : x2
                const limitedY2 = y2 > naturalSize.height ? naturalSize.height : y2

                const width = Math.round(Math.abs(x1 - limitedX2) * imageSizeCoefficient)
                const height = Math.round(Math.abs(y1 - limitedY2) * imageSizeCoefficient)
                const top = y1 * imageSizeCoefficient
                const left = x1 * imageSizeCoefficient

                const { area, border } = colors[index]

                const style: Styles = {
                    border: `1px solid ${border}`,
                    backgroundColor: area,
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
            <img
                src={img}
                alt=""
                ref={imgRef}
                onLoad={caluclateCoefficient}
                className={styles.img}
            />
        </div>
    )
}
