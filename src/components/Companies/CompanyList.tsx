import { FC } from 'react';

// packages
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { useAppContext, useCandidaciesContext } from '../../providers';

export const CompanyList: FC = (): JSX.Element => {
    const { allCompanies } = useCandidaciesContext();
    const { isTablet } = useAppContext();
    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                All Companies
            </Typography>
            {allCompanies.length ? (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            {!isTablet && (
                                <>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Location</TableCell>
                                </>
                            )}
                            <TableCell align="right">totalCandidacies</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allCompanies.map((row, idx) => (
                            <TableRow key={idx} style={{height: "50px"}}>
                                <TableCell>{row.name}</TableCell>
                                {!isTablet && (
                                    <>
                                        <TableCell>{row.country}</TableCell>
                                        <TableCell>{row.location}</TableCell>
                                    </>
                                )}
                                <TableCell align="right">{row.totalCandidacies}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : <Typography variant="body2" color="text.secondary" align="center">No company yet</Typography>}
        </Paper>
    );
};
