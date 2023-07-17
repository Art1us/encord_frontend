import { Button } from "shared/ui/Button/Button"
import { SubmitConfirmation } from "./SubmitConfirmation/SubmitConfirmation"
import { SubmitFailure } from "./SubmitFailure/SubmitFailure"
import { useState } from "react"

export function PredictImage({ id }: { id: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/*    <SubmitFailure />*/}
            <SubmitConfirmation isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <Button onClick={() => setIsOpen(true)}>Predict</Button>
        </>
    )
}
