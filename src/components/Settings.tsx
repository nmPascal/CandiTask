import { FC } from "react";
// providers
import { useAppContext } from "../providers";

// packages
import {
    Paper,
    FormControl,
    FormGroup,
    FormControlLabel,
    Switch,
    Typography,
    TextField,
    Grid,
    Box,
} from "@mui/material";

export const Settings: FC = (): JSX.Element => {
    const {
        themeMode,
        primaryColor,
        secondaryColor,
        toggleThemeMode,
        setPrimaryColor,
        setSecondaryColor,
    } = useAppContext();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{ p: 2, height: "110px" }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Theme Mode
                    </Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={themeMode === "dark"}
                                        onChange={toggleThemeMode}
                                    />
                                }
                                label="Dark Theme"
                            />
                        </FormGroup>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, height: "110px" }}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        App Colors
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center"}}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="subtitle1">
                                Primary Color:
                            </Typography>
                            <TextField
                                type="color"
                                value={primaryColor}
                                onChange={(ev) => setPrimaryColor(ev.target.value)}
                                sx={{ ml: 2 }}
                                inputProps={{
                                    style: {
                                        width: "50px",
                                        height: "30px",
                                        padding: "0",
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", ml: 5 }}>
                            <Typography variant="subtitle1">
                                Secondary Color:
                            </Typography>
                            <TextField
                                type="color"
                                value={secondaryColor}
                                onChange={(ev) => setSecondaryColor(ev.target.value)}
                                sx={{ ml: 2 }}
                                inputProps={{
                                    style: {
                                        width: "50px",
                                        height: "30px",
                                        padding: "0",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};
