import React from "react";
import ReactDOM from "react-dom/client";

// providers
import { UserProvider, AppProvider, DashboardProvider, CandidaciesProvider } from "./providers";

// components
import App from "./App.tsx";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppProvider>
            <UserProvider>
                    <DashboardProvider>
                        <CandidaciesProvider>
                                <App />
                        </CandidaciesProvider>
                    </DashboardProvider>
            </UserProvider>
        </AppProvider>
    </React.StrictMode>
);
