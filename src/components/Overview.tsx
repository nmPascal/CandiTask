import { FC } from "react";

// packages
import { Grid } from "@mui/material";

// components
import { Appointments } from "./Candidacies/Appointments";
import { StatusChart } from "./Candidacies/StatusChart";
import { PopularCompanies } from "./Companies/PopularCompanies";

export const Overview: FC = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <PopularCompanies />
            <StatusChart />
            <Appointments />
        </Grid>
    );
};