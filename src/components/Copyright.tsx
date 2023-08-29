import { FC } from "react";

// packages
import { Link, Typography } from "@mui/material";

export const Copyright: FC = (): JSX.Element => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5, mb: 4 }}>
            {"Copyright © "}
            <Link color="inherit" href="https://code-chronicle-bypascal.netlify.app/" target="_blank">
                Akaï
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
