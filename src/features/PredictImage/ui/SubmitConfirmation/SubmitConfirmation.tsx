import { useState } from "react"
import { Button, ButtonColor } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { Modal } from "shared/ui/Modal"
import { v4 as uuid } from "uuid"
import { useDispatch } from "react-redux"
import { predictionsPageActions } from "pages/PredictionsPage"
import { IPredictionData } from "pages/PredictionsPage/model/types/types"
import { Alert } from "shared/ui/CustomNotifications"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./SubmitConfirmation.module.scss"

interface ISubmitConfirmationProps {
    isOpen: boolean
    onClose: () => void
}

export function SubmitConfirmation(props: ISubmitConfirmationProps) {
    const { isOpen, onClose } = props
    const [predictionData, setPredictionData] = useState({ title: "", description: "" })

    const dispatch = useDispatch()

    async function submitClickHandler() {
        if (!predictionData.title || !predictionData.description) {
            Alert.warning("Please fill up title and description")
            return
        }

        try {
            const response = await fetch("http://localhost:3000/predict")
            const fetchedPredictionsData = await response.json()

            const newPrediction = {
                id: uuid(),
                title: predictionData.title,
                description: predictionData.description,
                timestamp: Date.now(),
                predictions: fetchedPredictionsData.predictions as IPredictionData[],
            }

            dispatch(predictionsPageActions.addPrediction(newPrediction))
            dispatch(predictionsPageActions.addUnviewedPredictions(1))

            Alert.success("Prediction successfully added")
        } catch (error) {
            Alert.error("An error occured. Please try again later")
        }

        onClose()
        setPredictionData({ title: "", description: "" })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
            <Typography size="xl" tag="h3" className={styles.title}>
                Please fill up data
            </Typography>
            <Input
                placeholder="Image title"
                value={predictionData.title}
                onChange={title => setPredictionData(prev => ({ ...prev, title }))}
            />
            <Input
                placeholder="Image description"
                value={predictionData.description}
                onChange={description => setPredictionData(prev => ({ ...prev, description }))}
            />
            <div className={styles.buttons}>
                <Button onClick={submitClickHandler}>Submit</Button>
                <Button color={ButtonColor.ATTENTION} onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </Modal>
    )
}
