import { FC, FormEvent } from "react";

// contexts
import { useUserContext } from "../../contexts";

// packages
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Box,
    Typography,
    Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// utils
import { EFormTypes } from "../../utils";

// components
import { Copyright } from "../Copyright";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export const AuthForm: FC = (): JSX.Element => {
    const { formType, toggleFormType } = useUserContext();

    const _handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log("~> e", ev); //REMOVE
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {formType === EFormTypes.LOGIN ? "Sign in" : "Sign up"}
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={(ev) => _handleSubmit(ev)}
                    sx={{ mt: 3 }}
                >
                    {formType === EFormTypes.REGISTER ? <SignUp /> : <SignIn />}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {formType === EFormTypes.LOGIN ? "Sign in" : "Sign up"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button
                                onClick={toggleFormType}
                                sx={{
                                    mt: -1,
                                    textDecoration: 'underline',
                                    textTransform: 'none',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                {formType === EFormTypes.REGISTER
                                    ? "Already have an account? Sign in"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright />
        </Container>
    );
};
