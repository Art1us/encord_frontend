import { StateSchema } from "app/providers/store"

export const getUnviewedPredictions = (state: StateSchema) =>
    state.predictionsPage.unviewedPredictions
