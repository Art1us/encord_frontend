import { StateSchema } from "app/providers/store"

export const getImages = (state: StateSchema) => state.imagesPage.images
