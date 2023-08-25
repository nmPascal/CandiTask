import { FC } from "react";

// providers
import { useDashboardContext } from "../providers";

// packages
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// components
import { Copyright } from "./Copyright";
import { AppBar } from "./AppBar";
import { Drawer } from "./Drawer";
import { CssBaseline } from "@mui/material";

export const Dashboard: FC = (): JSX.Element => {
    const { currentTab } = useDashboardContext();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar />
            <Drawer />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {currentTab && <currentTab.component />}
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
};
