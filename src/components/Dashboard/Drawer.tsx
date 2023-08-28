import { FC } from "react";

// providers
import { useDashboardContext } from "../../providers";

// helpers
import { DrawerItemsHelper } from "../../helpers";

// utils
import { EDrawerItems, drawerWidth } from "../../utils";

// packages
import {
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Toolbar,
    styled
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const StyledDynamicDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

export const Drawer: FC = (): JSX.Element => {
    const { drawerIsOpen, currentTab, toggleDrawer, setCurrentTab } = useDashboardContext();

    return (
        <StyledDynamicDrawer variant="permanent" open={drawerIsOpen}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {DrawerItemsHelper.getItems(EDrawerItems.PRIMARY).map((item, idx) => (
                    <ListItemButton key={idx} onClick={() => setCurrentTab(item)} selected={currentTab.name === item.name}>
                        <ListItemIcon>
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                ))}
                <Divider sx={{ my: 1 }} />
                <ListSubheader component="div" inset>
                    User Account
                </ListSubheader>
                {DrawerItemsHelper.getItems(EDrawerItems.SECONDARY).map((item, idx) => (
                    <ListItemButton key={idx} onClick={() => setCurrentTab(item)} selected={currentTab.name === item.name}>
                        <ListItemIcon>
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                ))}
            </List>
        </StyledDynamicDrawer>
    );
};
