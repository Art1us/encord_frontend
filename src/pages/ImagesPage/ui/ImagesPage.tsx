import { UploadImage } from "features/UploadImage"
import { PredictImage } from "features/PredictImage"
import { ViewPrediction } from "features/ViewPrediction"
import { ImagesTable } from "./ImagesTable/ImagesTable"

export function ImagesPage() {
    return (
        <div>
            <UploadImage />
            <ImagesTable />
            {/* 
            <PredictImage />
            <ViewPrediction /> */}
        </div>
    )
}
