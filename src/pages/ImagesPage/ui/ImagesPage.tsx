import { UploadImage } from "features/UploadImage"

import { ImagesTable } from "./ImagesTable/ImagesTable"

export function ImagesPage() {
    return (
        <div>
            <UploadImage />
            <ImagesTable />
        </div>
    )
}
