import { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { IPredictionData } from "pages/PredictionsPage"
import { Modal } from "shared/ui/Modal"
import { PredictionImage } from "./PredictionImage/PredictionImage"
import { AiOutlineClose } from "react-icons/ai"
import styles from "./ViewPrediction.module.scss"

export function ViewPrediction({ predictions }: { predictions: IPredictionData[] }) {
    const [isOpen, setIsOpen] = useState(false)

    function onClose() {
        setIsOpen(false)
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
                <AiOutlineClose onClick={onClose} className={styles.close} />
                <PredictionImage predictions={predictions} />
            </Modal>

            <Button onClick={() => setIsOpen(true)}>View</Button>
        </>
    )
}
