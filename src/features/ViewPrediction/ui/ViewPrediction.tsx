import { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { ViewImageModal } from "./ViewImageModal/ViewImageModal"

export function ViewPrediction({ id }: { id: string }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <ViewImageModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <Button onClick={() => setIsOpen(true)}>View</Button>
        </>
    )
}
