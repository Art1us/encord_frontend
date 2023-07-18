export interface IUploadedImage {
    fileName: string
    size: number
    timestamp: number
    id: string
}

export interface ISortingState {
    fileName: "" | "asc" | "desc"
    size: "" | "asc" | "desc"
    timestamp: "" | "asc" | "desc"
}
