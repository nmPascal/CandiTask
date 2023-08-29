import { FC } from 'react';

// providers
import { useCandidaciesContext } from '../../providers';

// helpers
import { getPopularCompanies } from '../../helpers';

// packages
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

export const PopularCompanies: FC = (): JSX.Element => {
    const { allCompanies } = useCandidaciesContext();
    const popularCompanies = getPopularCompanies(allCompanies);

    return (
       <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                }}
            >
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Popular Companies
                </Typography>
                {popularCompanies.length ? (
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Company</TableCell>
                                <TableCell align="right">Candidacies</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {popularCompanies.sort((a, b) => b.totalCandidacies - a.totalCandidacies).map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.totalCandidacies}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : <Typography variant="body2" color="text.secondary" align="center">No companies yet</Typography>}
            </Paper>
       </Grid>
    );
};
