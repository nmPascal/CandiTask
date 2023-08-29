import { FC } from 'react';

// providers
import { useAppContext, useCandidaciesContext } from '../../providers';

// packages
import { Grid, Paper} from '@mui/material';

// components
import { CandidacyList } from './CandidacyList';
import { ChosenCandidacy } from './ChosenCandidacy';


export const Candidacies: FC = (): JSX.Element => {
    const { isTablet } = useAppContext();
    const { chosenCand } = useCandidaciesContext();

    if (isTablet) {
        return (
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {chosenCand ? <ChosenCandidacy /> : <CandidacyList />}
            </Paper>
        );
    }

    return (
        <Grid container spacing={3}>
            <CandidacyList />
            <ChosenCandidacy />
        </Grid>
    );
};
