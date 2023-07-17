import { Button } from "shared/ui/Button/Button"
import { SubmitConfirmation } from "./SubmitConfirmation/SubmitConfirmation"
import { SubmitFailure } from "./SubmitFailure/SubmitFailure"

export function PredictImage() {
    return (
        <>
            <SubmitFailure />
            <SubmitConfirmation />
            <Button>Predict</Button>
        </>
    )
}
