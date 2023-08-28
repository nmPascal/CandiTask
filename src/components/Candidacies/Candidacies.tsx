import { FC } from 'react';

// packages
import { Paper, Typography } from '@mui/material';

export const Candidacies: FC = (): JSX.Element => {

    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Candidacies
            </Typography>
        </Paper>
    );
};
