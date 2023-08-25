import { FC } from "react";

// providers
import { useCandidaciesContext } from "../../../providers";

// helpers
import { getAppointedCandidacies } from "../../../helpers";

// packages
import {
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

export const Appointments: FC = (): JSX.Element => {
    const { allCandidacies } = useCandidaciesContext();
    const appointments = getAppointedCandidacies(allCandidacies);

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Appointments
            </Typography>
            {appointments.length ? (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Remote</TableCell>
                            <TableCell align="right">Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow key={row.id} style={{height: "50px"}}>
                                <TableCell>{row.position}</TableCell>
                                <TableCell>{row.country}</TableCell>
                                <TableCell>{row.remote}</TableCell>
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
            <Link
                color="primary"
                href="#"
                sx={{ mt: 3 }}
            >
                See all candidacies
            </Link>
        </>
    );
};
