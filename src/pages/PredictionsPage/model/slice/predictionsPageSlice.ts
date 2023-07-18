import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPredictionImage } from "../types/types"
import { PredictionsPageSchema } from "../types/predictionsPageSchema"

const initialState: PredictionsPageSchema = {
    images: [],
    unviewedPredictions: 0,
}

const predictionsPageSLice = createSlice({
    name: "predictionsPage",
    initialState,
    reducers: {
        addPrediction: (state, { payload }: PayloadAction<IPredictionImage>) => {
            state.images = [...state.images, payload]
        },
        addUnviewedPredictions: (state, { payload }: PayloadAction<number>) => {
            state.unviewedPredictions = state.unviewedPredictions + payload
        },
        resetUnviewPredictions: state => {
            state.unviewedPredictions = 0
        },
    },
})

export const { reducer: predictionsPageReducer, actions: predictionsPageActions } =
    predictionsPageSLice
