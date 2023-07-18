import { useState } from "react"
import { Button, ButtonColor, ButtonVariant } from "shared/ui/Button/Button"
import { Modal } from "shared/ui/Modal"
import { Filepond } from "./Filepond"
import styles from "./UploadImage.module.scss"
import { FilePondFile } from "filepond"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import { imagesPageActions } from "pages/ImagesPage"
import { Alert } from "shared/ui/CustomNotifications"

export function UploadImage() {
    const [isOpen, setIsOpen] = useState(false)
    const [files, setFiles] = useState<FilePondFile[]>([])

    const dispatch = useDispatch()

    function saveClickHandler() {
        if (!files.length) {
            Alert.warning("Nothing to save")
            return
        }

        const formattedImages = files.map(item => {
            return {
                id: uuid(),
                fileName: item.file.name,
                size: item.file.size,
                time: new Date(),
            }
        })
        dispatch(imagesPageActions.addImages(formattedImages))
        Alert.success("Your image successfully uploaded")
        setIsOpen(false)
        setFiles([])
    }

    function discardClickHandler() {
        setIsOpen(false)
        setFiles([])
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
                className={styles.modal}
            >
                <Filepond setFiles={setFiles} files={files} />
                <div className={styles.buttons}>
                    <Button className={styles.button} onClick={saveClickHandler}>
                        Save
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={discardClickHandler}
                        color={ButtonColor.ATTENTION}
                    >
                        Discard
                    </Button>
                </div>
            </Modal>
            <Button onClick={() => setIsOpen(true)}>Upload Images</Button>
        </>
    )
}
