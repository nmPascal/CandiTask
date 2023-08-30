import { FC } from "react";

// providers
import { useAppContext, useCandidaciesContext } from "../../providers";

// helpers
import { getWaitingCandidacies } from "../../helpers";

// packages
import {
    Grid,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export const Appointments: FC = (): JSX.Element => {
    const { allCandidacies } = useCandidaciesContext();
    const { isMobile } = useAppContext(); 
    const appointments = getWaitingCandidacies(allCandidacies);

    return (
        <Grid item xs={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Appointments
                </Typography>
                {appointments.length ? (
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Company</TableCell>
                                {!isMobile && (
                                    <>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Remote</TableCell>
                                    </>
                                )}
                                <TableCell align="right">Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((row) => (
                                <TableRow key={row.id} style={{height: "50px"}}>
                                    <TableCell>{row.company}</TableCell>
                                    {!isMobile && (
                                        <>
                                            <TableCell>{row.position}</TableCell>
                                            <TableCell>{row.remote}</TableCell>
                                        </>
                                    )}
                                    <TableCell align="right">
                                        <Link href={row.url} target="_blank">
                                            Show
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : <Typography variant="body2" color="text.secondary" align="center">No appointments yet</Typography>}
            </Paper>
        </Grid>
    );
};
