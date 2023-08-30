/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// providers
import { useUserContext } from ".";

// interfaces
import { IAppProviderProps } from "../interfaces";

// utils
import {
    EThemeMode,
    client,
    defaultPrimaryColor,
    defaultSecondaryColor,
    defaultThemeMode
} from "../utils";

// packages
import { Databases, ID } from "appwrite";
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";

type Props = {
    children: ReactNode;
};

const AppContext = createContext<IAppProviderProps>({
    themeMode: defaultThemeMode as EThemeMode,
    primaryColor: defaultPrimaryColor,
    secondaryColor: defaultSecondaryColor,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    toggleThemeMode: () => { },
    setPrimaryColor: () => { },
    setSecondaryColor: () => { },
});

export const useAppContext = () => useContext(AppContext);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_SETTINGS_COLLECTION_ID;

export const AppProvider = ({ children }: Props) => {
    const { user } = useUserContext();

    const [appSettingsId, setAppSettingsId] = useState<string>("");
    const [themeMode, setThemeMode] = useState<EThemeMode>(defaultThemeMode as EThemeMode);
    const [primaryColor, setPrimaryColor] = useState(defaultPrimaryColor);
    const [secondaryColor, setSecondaryColor] = useState(defaultSecondaryColor);

    const databases = new Databases(client);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up(1250));
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

    /**
     * Get user's app settings
     * @returns void
     */
    const getAppSettings = () => {
        if (!user) return;
        const promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);

        promise.then(({ documents }) => {
            const settings = documents.find((settings) => settings.uid === user.userId);

            if (settings) {
                setAppSettingsId(settings.$id);
                setThemeMode(settings.themeMode);
                setPrimaryColor(settings.primaryColor);
                setSecondaryColor(settings.secondaryColor);
                return;
            }

            createAppSettingsDocument();
        }, (err) => console.error("~> err", err));
    };

    /**
     * Create user's app settings document
     * @returns void
     */
    const createAppSettingsDocument = () => {
        if (!user) return;
        const promise = databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            { uid: user.userId, themeMode, primaryColor, secondaryColor }
        );

        promise.then(() => {
            getAppSettings();
        }, (err) => console.error("~> err", err));
    };

    /**
     * Update user's app settings document
     * @returns void
     */
    const updateAppSettingsDocument = () => {
        if (!user) return;
        const promise = databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            appSettingsId,
            { themeMode, primaryColor, secondaryColor }
        );

        promise.then(() => {
            getAppSettings();
        }, (err) => console.error("~> err", err));
    };

    /**
     * Fetch user's app settings on User change
     */
    useEffect(() => {
        getAppSettings();
    }, [user]);

    /**
     * Update user's app settings on change
     */
    useEffect(() => {
        updateAppSettingsDocument();
    }, [themeMode, primaryColor, secondaryColor]);

    const propsValues = {
        themeMode,
        primaryColor,
        secondaryColor,
        isMobile,
        isTablet,
        isDesktop,
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