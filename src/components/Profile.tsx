import { FC } from "react";

// helpers
import { formatDateTime } from "../helpers";

// providers
import { useUserContext } from "../providers";

// packages
import {
    Avatar,
    Box,
    IconButton,
    Divider,
    Paper,
    Typography,
    useTheme
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Profile: FC = (): JSX.Element => {
    const { user, logoutUser } = useUserContext();
    const theme = useTheme();

    if (!user) return <></>;

    return (
        <Paper
            sx={{
                p: 2,
            }}
        >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Profile
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    bgcolor: theme.palette.secondary.main,
                }}>
                    <Typography variant="h3">
                        {user.name.split(" ")[0].charAt(0)}
                        {user.name.split(" ")[1].charAt(0)}
                    </Typography>
                </Avatar>
                <Typography component="h2" variant="h4" color="text.secondary">
                    {user.name}
                </Typography>
                <Typography component="h2" variant="h6" color="text.secondary">
                    {user.email}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography component="h2" variant="h6" color="text.secondary">
                    {formatDateTime(user.registration)}
                </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <IconButton onClick={logoutUser}>
                    <LogoutIcon />
                </IconButton>
            </Box>
        </Paper>
    );
};
