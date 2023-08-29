import { FC } from "react";

// packages
import { Grid } from "@mui/material";

// components
import { Appointments } from "./Appointments";
import { StatusChart } from "./StatusChart";
import { PopularCompanies } from "./PopularCompanies";

export const Overview: FC = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <PopularCompanies />
            <StatusChart />
            <Appointments />
        </Grid>
    );
};