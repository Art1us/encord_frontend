import { Sidebar } from "widgets/Sidebar"
import { Suspense } from "react"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import AppRouter from "./providers/router/ui/AppRouter"
import "./styles/index.scss"

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <Sidebar />
                <div className="content_page">
                    <Header />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    )
}

export default App
