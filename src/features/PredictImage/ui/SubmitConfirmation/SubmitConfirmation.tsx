import { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { Modal } from "shared/ui/Modal"
import { v4 as uuid } from "uuid"
import { useDispatch } from "react-redux"
import { predictionsPageActions } from "pages/PredictionsPage"

interface ISubmitConfirmationProps {
    isOpen: boolean
    onClose: () => void
}

export function SubmitConfirmation(props: ISubmitConfirmationProps) {
    const { isOpen, onClose } = props
    const [predictionData, setPredictionData] = useState({ title: "", description: "" })

    const dispatch = useDispatch()

    function submitClickHandler() {
        // make request to save image

        // await fetch("/predict")

        const prediction = {
            id: uuid(),
            title: predictionData.title,
            description: predictionData.description,
            timestamp: new Date(),
        }

        //alert success
        dispatch(predictionsPageActions.addPrediction(prediction))
        //aler error
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
