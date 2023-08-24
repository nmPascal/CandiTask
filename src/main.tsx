import React from "react";
import ReactDOM from "react-dom/client";

// providers
import { UserProvider, AppThemeProvider, DashboardProvider, CandidaciesProvider } from "./providers";

// components
import App from "./App.tsx";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserProvider>
            <AppThemeProvider>
                <DashboardProvider>
                    <CandidaciesProvider>
                            <App />
                    </CandidaciesProvider>
                </DashboardProvider>
            </AppThemeProvider>
        </UserProvider>
    </React.StrictMode>
);
