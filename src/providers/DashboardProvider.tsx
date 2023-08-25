/* eslint-disable react-refresh/only-export-components */
import {
    ReactNode,
    createContext,
    useContext,
    useState,
} from "react";

// interfaces
import { IDashboardProviderProps, IDrawerItem } from "../interfaces";
import { DrawerItemsHelper } from "../helpers";
import { EDrawerItems } from "../utils";

type Props = {
    children: ReactNode;
};

const DashboardContext = createContext<IDashboardProviderProps>({
    drawerIsOpen: true,
    currentTab: DrawerItemsHelper.getItems(EDrawerItems.PRIMARY)[0],
    toggleDrawer: () => {},
    setCurrentTab: () => {},
});

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }: Props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(true);
    const [currentTab, setCurrentTab] = useState<IDrawerItem>(
        DrawerItemsHelper.getItems(EDrawerItems.PRIMARY)[0]
    );

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    const propsValues = {
        drawerIsOpen,
        currentTab,
        toggleDrawer,
        setCurrentTab,
    };

    return (
        <DashboardContext.Provider value={propsValues}>
            {children}
        </DashboardContext.Provider>
    );
};
