export interface IPredictionData {
    bbox: {
        x1: number
        x2: number
        y1: number
        y2: number
    }
    label: string
    score: string
}

export interface IPredictionImage {
    id: string
    title: string
    description: string
    timestamp: number
    predictions: IPredictionData[]
}

export interface ISortingState {
    title: "" | "asc" | "desc"
    description: "" | "asc" | "desc"
    timestamp: "" | "asc" | "desc"
}
