export function formatSize(bytes: number): string {
    if (bytes / 1024 < 512) {
        return (bytes / 1024).toFixed(2) + " KB"
    } else {
        return (bytes / 1024 / 1024).toFixed(2) + " MB"
    }
}
