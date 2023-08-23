import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./providers/UserProvider.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserProvider>
            <ThemeProvider theme={darkTheme}>
                <App />
            </ThemeProvider>
        </UserProvider>
    </React.StrictMode>
);