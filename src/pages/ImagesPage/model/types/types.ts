export interface IUploadedImage {
    fileName: string
    size: number
    time: Date
    id: string
}

export interface ISortingState {
    fileName: "" | "asc" | "desc"
    size: "" | "asc" | "desc"
    time: "" | "asc" | "desc"
}
