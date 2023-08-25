// interface
import { IDrawerItem } from ".";

export interface IDashboardProviderProps {
    drawerIsOpen: boolean;
    currentTab: IDrawerItem;
    toggleDrawer: () => void;
    setCurrentTab: (currentTab: IDrawerItem) => void;
}