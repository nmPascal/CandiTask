import { FC } from 'react';

// packages
import { Grid, Paper } from '@mui/material';

// components
import { CandidacyList } from './CandidacyList';
import { CurrentCandidacy } from './CurrentCandidacy';

export const Candidacies: FC = (): JSX.Element => {

    // TODO: useMediaQuery 

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
                    <CandidacyList />
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
