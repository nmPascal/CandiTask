import { FC } from "react";

// packages
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textField: {
        "& input:-webkit-autofill, & input:-webkit-autofill:focus, & input:-webkit-autofill:hover, & input:-webkit-autofill:active":
            {
                "-webkit-box-shadow": "0 0 0 30px transparent !important",
                "-webkit-text-fill-color": "white !important",
            },
    },
});

export const SignUp: FC = (): JSX.Element => {
    const styles = useStyles();

    return (
        <Grid container spacing={2}>
            {...Array(["firstName", "lastName"].map((field, idx) => (
                <Grid key={idx} item xs={12} sm={6}>
                    <TextField
                        id={field}
                        name={field}
                        label={`${field.charAt(0).toUpperCase()}${field
                            .slice(1)
                            .replace(/([A-Z])/g, " $1")}`}
                        {...(idx === 0 && { autoFocus: true })}
                        className={styles.textField}
                        fullWidth
                    />
                </Grid>
            )))}
            {...Array(["email", "password"].map((field, idx) => (
                <Grid key={idx} item xs={12}>
                    <TextField
                        id={field}
                        name={field}
                        label={`${field[0].toUpperCase()}${field.slice(1)}`}
                        type={field}
                        className={styles.textField}
                        autoComplete="off"
                        fullWidth
                        required
                    />
                </Grid>
            )))}
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
            </Grid>
        </Grid>
    );
};
