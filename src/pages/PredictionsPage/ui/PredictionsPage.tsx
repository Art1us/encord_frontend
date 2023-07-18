import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { PredictionsTable } from "./PredictionsTable/PredictionsTable"
import { predictionsPageActions } from ".."

export function PredictionsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(predictionsPageActions.resetUnviewPredictions())
    }, [])

    return (
        <div>
            <PredictionsTable />
        </div>
    )
}
