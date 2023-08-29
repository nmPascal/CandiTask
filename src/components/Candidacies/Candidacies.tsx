import { FC } from 'react';

// packages
import { Grid} from '@mui/material';

// components
import { ChosenCandidacy } from './CandidacyList';
import { CurrentCandidacy } from './ChosenCandidacy';

export const Candidacies: FC = (): JSX.Element => {
    return (
        <Grid container spacing={3}>
            <ChosenCandidacy />
            <CurrentCandidacy />
        </Grid>
    );
};
