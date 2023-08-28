import React from "react";
import ReactDOM from "react-dom/client";

// providers
import { UserProvider, AppProvider, DashboardProvider, CandidaciesProvider } from "./providers";

// components
import App from "./App.tsx";

// styles
import "./index.css";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppProvider>
            <UserProvider>
                    <DashboardProvider>
                        <CandidaciesProvider>
                                <CssBaseline />
                                <App />
                        </CandidaciesProvider>
                    </DashboardProvider>
            </UserProvider>
        </AppProvider>
    </React.StrictMode>
);
