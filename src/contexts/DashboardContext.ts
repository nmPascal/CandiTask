import { createContext, useContext } from "react";

// interfaces
import { IDashboardProviderProps } from "../interfaces";

export const DashboardContext = createContext<IDashboardProviderProps>({
    drawerIsOpen: true,
    toggleDrawer: () => { },
});

export const useDashboardContext = () => useContext(DashboardContext);