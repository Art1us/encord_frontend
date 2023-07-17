import { ImagesPageSchema } from "../types/imagesPageSchema"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUploadedImage } from "../types/types"

const initialState: ImagesPageSchema = {
    images: [],
}

const imagesPageSlice = createSlice({
    name: "imagesPage",
    initialState,
    reducers: {
        addImages: (state, { payload }: PayloadAction<IUploadedImage[]>) => {
            state.images = [...state.images, ...payload]
        },
    },
})

export const { reducer: imagesPageReducer, actions: imagesPageActions } = imagesPageSlice
