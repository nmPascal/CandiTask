import {
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import { FC } from "react";
import { useCandidaciesContext } from "../../../providers";

export const Appointments: FC = (): JSX.Element => {
    const { appointments } = useCandidaciesContext();

    console.log('~> ', appointments); //REMOVE

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Appointments
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell>Country</TableCell>
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
            {/* <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3 }}
            >
                See more orders
            </Link> */}
        </>
    );
};
