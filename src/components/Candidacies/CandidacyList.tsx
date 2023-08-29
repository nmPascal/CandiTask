import { FC } from 'react';

// providers
import { useAppContext, useCandidaciesContext } from './../../providers';

// packages
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

export const ChosenCandidacy: FC = (): JSX.Element => {
    const { allCandidacies, setChosenCand } = useCandidaciesContext();
    const { isMobile } = useAppContext();

    return (
       <Grid item xs={12} lg={6}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    All Candidacies
                </Typography>
                {allCandidacies.length ? (
                    <TableContainer component={Paper} style={{ maxHeight: "65vh" }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company</TableCell>
                                    {!isMobile && (
                                        <>
                                            <TableCell>Position</TableCell>
                                        </>
                                    )}
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allCandidacies.map((row) => (
                                    <TableRow key={row.id} style={{height: "50px"}}>
                                        <TableCell>{row.company}</TableCell>
                                        {!isMobile && (
                                            <>
                                                <TableCell>{row.position}</TableCell>
                                            </>
                                        )}
                                        <TableCell align="right">
                                            <Button
                                                sx={{textTransform: 'none'}}
                                                onClick={() => setChosenCand(row)}
                                            >
                                                Details
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : <Typography variant="body2" color="text.secondary" align="center">No candidacies yet</Typography>}
            </Paper>
       </Grid>
    );
};
