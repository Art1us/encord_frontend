type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T

interface Styles {
    [key: string]: string | number
}
