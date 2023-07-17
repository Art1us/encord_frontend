import { Modal } from "shared/ui/Modal"

interface IViewImageModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ViewImageModal(props: IViewImageModalProps) {
    const { isOpen, onClose } = props
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            123
        </Modal>
    )
}
