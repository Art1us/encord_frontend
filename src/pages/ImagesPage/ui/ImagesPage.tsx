import { PredictImage } from "features/PredictImage"
import { UploadImage } from "features/UploadImage"
import { ViewPrediction } from "features/ViewPrediction"
import { Table } from "shared/ui/Table/Table"

export function ImagesPage() {
    return (
        <div>
            <UploadImage />
            <Table />
            <PredictImage />
            <ViewPrediction />
        </div>
    )
}
