/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

// interfaces
import { IDashboardProviderProps } from "../interfaces";

type Props = {
    children: ReactNode;
};

const DashboardContext = createContext<IDashboardProviderProps>({
    drawerIsOpen: true,
    currentTab: "overview",
    setCurrentTab: () => { },
    toggleDrawer: () => { },
});

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }: Props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(true);
    const [currentTab, setCurrentTab] = useState<string>("overview");

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    const propsValues = {
        drawerIsOpen,
        currentTab,
        setCurrentTab,
        toggleDrawer,
    };

    return (
        <DashboardContext.Provider value={propsValues}>
            {children}
        </DashboardContext.Provider>
    );
};