import { FC } from "react";

// packages
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
} from "@mui/material";

export const SignUp: FC = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    required
                    fullWidth
                    autoComplete="email"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    required
                    type="password"
                    fullWidth
                    autoComplete="new-password"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
            </Grid>
        </Grid>
    );
};
