import React from "react"
import ReactDOM from "react-dom/client"
import App from "app/App"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
)
