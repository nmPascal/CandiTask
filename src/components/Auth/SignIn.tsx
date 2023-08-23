import { FC } from "react";

import { TextField, FormControlLabel, Checkbox } from "@mui/material";

export const SignIn: FC = (): JSX.Element => {
    return (
        <>
            <TextField
                id="email"
                name="email"
                label="Email Address"
                required
                autoFocus
                fullWidth
                margin="normal"
                autoComplete="email"
            />
            <TextField
                id="password"
                name="password"
                label="Password"
                required
                fullWidth
                margin="normal"
                type="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
        </>
    );
};
