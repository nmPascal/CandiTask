/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

// interfaces
import { IAppThemeProviderProps } from "../interfaces";

// utils
import { EThemeMode } from "../utils";

// packages
import { ThemeProvider, createTheme } from "@mui/material";

type Props = {
    children: ReactNode;
};

const AppThemeContext = createContext<IAppThemeProviderProps>({
    toggleThemeMode: () => { },
});

export const useAppThemeContext = () => useContext(AppThemeContext);

export const AppThemeProvider = ({ children }: Props) => {
    const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.DARK);

    const theme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: "#00897b",
            },
            secondary: {
                main: "#967bb6",
            },
        },
    });

    const toggleThemeMode = () => {
        setThemeMode((prevThemeMode) =>
            prevThemeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
        );
    };

    const propsValues = { toggleThemeMode };

    return (
        <AppThemeContext.Provider value={propsValues}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};