import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { imagesPageReducer } from "pages/ImagesPage"
import { predictionsPageReducer } from "pages/PredictionsPage"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            imagesPage: imagesPageReducer,
            predictionsPage: predictionsPageReducer,
        },
        preloadedState: initialState,
    })
}
