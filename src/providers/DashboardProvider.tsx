import { ReactNode, useState } from "react";
import { DashboardContext } from "../contexts";

type Props = {
    children: ReactNode;
};

export const DashboardProvider = ({ children }: Props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(true);

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    const propsValues = {
        drawerIsOpen,
        toggleDrawer,
    };

    return (
        <DashboardContext.Provider value={propsValues}>
            {children}
        </DashboardContext.Provider>
    );
};