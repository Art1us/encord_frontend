import { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { Modal } from "shared/ui/Modal"
import { v4 as uuid } from "uuid"
import { useDispatch } from "react-redux"
import { predictionsPageActions } from "pages/PredictionsPage"
import { IPredictionData } from "pages/PredictionsPage/model/types/types"
import { Alert } from "shared/ui/CustomNotifications"

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
                timestamp: new Date(),
                predictions: fetchedPredictionsData.predictions as IPredictionData[],
            }

            dispatch(predictionsPageActions.addPrediction(newPrediction))

            Alert.success("Prediction successfully added")
        } catch (error) {
            Alert.error("An error occured. Please try again later")
        }

        onClose()
        setPredictionData({ title: "", description: "" })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Input
                value={predictionData.title}
                onChange={title => setPredictionData(prev => ({ ...prev, title }))}
            />
            <Input
                value={predictionData.description}
                onChange={description => setPredictionData(prev => ({ ...prev, description }))}
            />
            <Button onClick={submitClickHandler}>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
        </Modal>
    )
}
