import { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { Modal } from "shared/ui/Modal"
import { Filepond } from "./Filepond"
import styles from "./UploadImage.module.scss"
import { FilePondFile } from "filepond"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import { imagesPageActions } from "pages/ImagesPage"

export function UploadImage() {
    const [isOpen, setIsOpen] = useState(false)
    const [files, setFiles] = useState<FilePondFile[]>([])

    const dispatch = useDispatch()

    function saveClickHandler() {
        if (!files.length) return

        const formattedImages = files.map(item => {
            return {
                id: uuid(),
                fileName: item.file.name,
                size: item.file.size,
                time: new Date(),
            }
        })
        dispatch(imagesPageActions.addImages(formattedImages))
    }

    function discardClickHandler() {
        setIsOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
            >
                <>
                    <Filepond setFiles={setFiles} files={files} />
                    <div className={styles.buttons}>
                        <Button className={styles.button} onClick={saveClickHandler}>
                            Save
                        </Button>
                        <Button className={styles.button} onClick={discardClickHandler}>
                            Discard
                        </Button>
                    </div>
                </>
            </Modal>
            <Button onClick={() => setIsOpen(true)}>Upload</Button>
        </>
    )
}
