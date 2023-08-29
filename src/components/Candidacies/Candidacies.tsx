import { FC } from 'react';

// packages
import { Grid, Paper} from '@mui/material';

// components
import { ChosenCandidacy } from './CandidacyList';
import { CurrentCandidacy } from './ChosenCandidacy';

export const Candidacies: FC = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <ChosenCandidacy />
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CurrentCandidacy />
                </Paper>
            </Grid>
        </Grid>

    );
};
