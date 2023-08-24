import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./providers/UserProvider.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";
import { CandidaciesProvider } from "./providers/CandidaciesProvider.tsx";
import { DashboardProvider } from "./providers/DashboardProvider.tsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00897b",
        },
        secondary: {
            main: "#967bb6",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserProvider>
            <DashboardProvider>
                <CandidaciesProvider>
                    <ThemeProvider theme={darkTheme}>
                        <App />
                    </ThemeProvider>
                </CandidaciesProvider>
            </DashboardProvider>
        </UserProvider>
    </React.StrictMode>
);
