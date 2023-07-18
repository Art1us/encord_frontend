import { IPredictionImage } from "./types"

export interface PredictionsPageSchema {
    images: IPredictionImage[]
    unviewedPredictions: number
}
