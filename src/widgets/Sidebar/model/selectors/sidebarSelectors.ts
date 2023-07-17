import { StateSchema } from "app/providers/store"

export const getPredictionsData = (state: StateSchema) => state.predictionsPage.images
