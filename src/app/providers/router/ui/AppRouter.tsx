import { memo, Suspense, useCallback } from "react"
import { Route, Routes, RouteProps } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback="">
                <div className="page-wrapper">
                    <div className="page-container">{route.element}</div>
                </div>
            </Suspense>
        )
        return <Route key={route.path} path={route.path} element={element} />
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
