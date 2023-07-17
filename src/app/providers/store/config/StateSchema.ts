import { AxiosInstance } from "axios"
import { ImagesPageSchema } from "pages/ImagesPage"
import { PredictionsPageSchema } from "pages/PredictionsPage"

export interface StateSchema {
    imagesPage: ImagesPageSchema
    predictionsPage: PredictionsPageSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
