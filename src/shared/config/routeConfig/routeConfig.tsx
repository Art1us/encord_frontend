import { ImagesPage } from "pages/ImagesPage"
import { AppRoutes, RoutePath } from "./const"
import { RouteProps } from "react-router-dom"
import { PredictionsPage } from "pages/PredictionsPage"
import { NotFoundPage } from "pages/NotFoundPage"

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.IMAGES]: {
        path: RoutePath.images,
        element: <ImagesPage />,
    },
    [AppRoutes.PREDICTIONS]: {
        path: RoutePath.predictions,
        element: <PredictionsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
