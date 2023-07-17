import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
            app: "/src/app",
            widgets: "/src/widgets",
            pages: "/src/pages",
            shared: "/src/shared",
            features: "/src/features",
        },
    },
})
