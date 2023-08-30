/* eslint-disable react-refresh/only-export-components */
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

// providers
import { useAppContext } from ".";

// interfaces
import { IDashboardProviderProps, IDrawerItem } from "../interfaces";

// helpers
import { DrawerItemsHelper } from "../helpers";

// utils
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
    const { isMobile, isTablet } = useAppContext();

    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
    const [currentTab, setCurrentTab] = useState<IDrawerItem>(
        DrawerItemsHelper.getItems(EDrawerItems.PRIMARY)[0]
    );

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    /**
     * Close the drawer when the screen size is mobile or tablet
     */
    useEffect(() => {
        setDrawerIsOpen(!isMobile && !isTablet);
    }, [isMobile, isTablet]);

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
