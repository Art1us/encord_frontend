import { StateSchema } from "app/providers/store"

export const getPredictions = (state: StateSchema) => state.predictionsPage.images
