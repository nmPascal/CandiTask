import { Paper, Typography } from '@mui/material';
import { FC } from 'react';

export const Settings: FC = (): JSX.Element => {

    return (
       <Paper sx={{p: 2}}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Settings
            </Typography>
       </Paper>
    );
};
