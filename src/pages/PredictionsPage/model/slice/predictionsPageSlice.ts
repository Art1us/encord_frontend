import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPredictionImage } from "../types/types"
import { PredictionsPageSchema } from "../types/predictionsPageSchema"

const initialState: PredictionsPageSchema = {
    images: [],
}

const predictionsPageSLice = createSlice({
    name: "predictionsPage",
    initialState,
    reducers: {
        addPrediction: (state, { payload }: PayloadAction<IPredictionImage>) => {
            state.images = [...state.images, payload]
        },
    },
})

export const { reducer: predictionsPageReducer, actions: predictionsPageActions } =
    predictionsPageSLice
