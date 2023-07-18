export function deepCopy(arg: unknown) {
    return JSON.parse(JSON.stringify(arg))
}
