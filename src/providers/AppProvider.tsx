/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

// interfaces
import { IAppProviderProps } from "../interfaces";

// utils
import { EThemeMode } from "../utils";

// packages
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";

type Props = {
    children: ReactNode;
};

const AppContext = createContext<IAppProviderProps>({
    isMobile: false,
    isTablet: false,
    toggleThemeMode: () => { },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    console.log('~> theme', theme.palette.primary.main); //REMOVE
    
    const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.DARK);

    const themeConfig = createTheme({
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

    const propsValues = {
        isMobile,
        isTablet,
        toggleThemeMode,
    };

    return (
        <AppContext.Provider value={propsValues}>
            <ThemeProvider theme={themeConfig}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};