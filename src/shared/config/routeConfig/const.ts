export enum AppRoutes {
    IMAGES = "images",
    PREDICTIONS = "predictions",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.IMAGES]: "/",
    [AppRoutes.PREDICTIONS]: "/predictions",
    [AppRoutes.NOT_FOUND]: "*",
}
