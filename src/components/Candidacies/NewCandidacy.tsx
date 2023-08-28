import { FC, FormEvent, useState } from 'react';

// providers
import { useAppContext, useCandidaciesContext } from '../../providers';

// utils
import { ECandidacyRemote, ECandidacyStatus } from '../../utils';

// packages
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

export const NewCandidacy: FC = (): JSX.Element => {
    const { isTablet } = useAppContext();
    const { error, createCandidacy } = useCandidaciesContext();
    
    const [remoteValue, setRemoteValue] = useState<ECandidacyRemote | null>(null);
    const [statusValue, setStatusValue] = useState<ECandidacyStatus | null>(null);

    const _handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const { currentTarget } = ev;
        const formData = {
            remote: remoteValue && remoteValue || ECandidacyRemote.NO,
            status: statusValue && statusValue || ECandidacyStatus.PENDING,
            position: currentTarget.position.value,
            company: currentTarget.company.value,
            country: currentTarget.country.value,
            location: currentTarget.location.value,
            url: currentTarget.url.value,
            salary: currentTarget.salary.value
        };

        createCandidacy(formData);
        currentTarget.reset();
        setRemoteValue(null);
        setStatusValue(null);
    };

    return (
        <Paper sx={{ py: 5, px: isTablet ? 2 : 20 }}>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <AddHomeWorkIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Candidacy
                </Typography>
            </Box>
            <Box
                component="form"
                noValidate
                onSubmit={(ev) => _handleSubmit(ev)}
                sx={{ mt: isTablet ? 1 : 3 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={isTablet ? 12 : 6}>
                        <TextField
                            id="position"
                            name="position"
                            label="Position"
                            autoComplete="position"
                            fullWidth
                            autoFocus
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={isTablet ? 12 : 6}>
                        <TextField
                            id="company"
                            name="company"
                            label="Company"
                            autoComplete="company"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={isTablet ? 12 : 6}>
                        <TextField
                            id="country"
                            name="country"
                            label="Country"
                            autoComplete="country"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={isTablet ? 12 : 6}>
                        <TextField
                            id="location"
                            name="location"
                            label="Location"
                            autoComplete="location"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="url"
                            name="url"
                            label="URL"
                            autoComplete="url"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="remote-label">Remote</InputLabel>
                            <Select
                                labelId="remote-label"
                                id="remote"
                                label="remote"
                                value={remoteValue && remoteValue || ""}
                                onChange={(ev) => setRemoteValue(ev.target.value as ECandidacyRemote)}
                            >
                                {Object.values(ECandidacyRemote).map((remote) => (
                                    <MenuItem key={remote} value={remote}>{remote}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="status-label">Status</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status"
                                label="status"
                                value={statusValue && statusValue || ""}
                                onChange={(ev) => setStatusValue(ev.target.value as ECandidacyStatus)}
                            >
                                {Object.values(ECandidacyStatus).map((remote) => (
                                    <MenuItem key={remote} value={remote}>{remote}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="salary"
                            name="salary"
                            label="Salary"
                            autoComplete="salary"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: isTablet ? 3 : 5, mb: 2 }}
                >
                    Create
                </Button>
            </Box>
            {error && <Typography color="error" sx={{textAlign: "center", mt: 2}}>{error}</Typography>}
        </Paper>
    );
};
