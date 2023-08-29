import { FC } from "react";

// packages
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
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

export const SignIn: FC = (): JSX.Element => {
    const styles = useStyles();

    return (
        <>
            {...Array(["email", "password"].map((field, idx) => (
                <TextField
                    key={idx}
                    id={field}
                    name={field}
                    label={`${field[0].toUpperCase()}${field.slice(1)}`}
                    type={field}
                    {...(idx === 0 && { autoFocus: true })}
                    className={styles.textField}
                    margin="normal"
                    fullWidth
                    required
                />
            )))}
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
        </>
    );
};
