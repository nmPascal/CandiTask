import { FC } from "react";

// packages
import { Grid, Paper } from "@mui/material";

// components
import { Appointments } from "./Appointments";

export const Overview: FC = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                    }}
                >
                    {/* <Chart /> */}
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 240,
                    }}
                >
                    {/* <Deposits /> */}
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Appointments />
                </Paper>
            </Grid>
        </Grid>
    );
};
