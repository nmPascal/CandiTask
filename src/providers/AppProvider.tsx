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
    themeMode: EThemeMode.DARK,
    primaryColor: "#00897b",
    secondaryColor: "#967bb6",
    isMobile: false,
    isTablet: false,
    toggleThemeMode: () => { },
    setPrimaryColor: () => { },
    setSecondaryColor: () => { },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: Props) => {
    const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.DARK);
    const [primaryColor, setPrimaryColor] = useState("#00897b");
    const [secondaryColor, setSecondaryColor] = useState("#967bb6");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    console.log('~> theme', theme.palette.primary.main); //REMOVE
    

    const themeConfig = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: primaryColor,
            },
            secondary: {
                main: secondaryColor,
            },
        },
    });

    const toggleThemeMode = () => {
        setThemeMode((prevThemeMode) =>
            prevThemeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
        );
    };

    const propsValues = {
        themeMode,
        primaryColor,
        secondaryColor,
        isMobile,
        isTablet,
        toggleThemeMode,
        setPrimaryColor,
        setSecondaryColor,
    };

    return (
        <AppContext.Provider value={propsValues}>
            <ThemeProvider theme={themeConfig}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};