// utils
import { EThemeMode } from "../utils";

export interface IAppProviderProps {
    themeMode: EThemeMode;
    primaryColor: string;
    secondaryColor: string;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    toggleThemeMode: () => void;
    setPrimaryColor: (color: string) => void;
    setSecondaryColor: (color: string) => void;
}