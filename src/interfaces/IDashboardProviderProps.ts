export interface IDashboardProviderProps {
    drawerIsOpen: boolean;
    currentTab: string;
    setCurrentTab: (tab: string) => void;
    toggleDrawer: () => void;
}