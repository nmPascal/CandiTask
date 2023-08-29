import { FC } from 'react';

import {
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { jobBoardList } from '../../utils';

export const JobBoardList: FC = (): JSX.Element => {

    return (
       <Paper sx={{ p:2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Job Boards
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobBoardList.map((row, idx) => (
                        <TableRow key={idx} style={{height: "50px"}}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">
                                <Link href={row.url} target="_blank">
                                    Go!
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
       </Paper>
    );
};
