import { FC, useEffect, useState } from "react";

// providers
import { useCandidaciesContext } from "../../providers";

// packages
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";

type Props = {
    targetId: string;
    isOpen: boolean;
    setDialogIsOpen: (isOpen: boolean) => void;
}

export const ConfirmationDialog: FC<Props> = ({ targetId, isOpen, setDialogIsOpen }): JSX.Element => {
    const { deleteCandidacy } = useCandidaciesContext();
    const [fieldValue, setFieldValue] = useState<string>("");
    const [isValueValid, setIsValueValid] = useState<boolean>(false);

    const _handleConfirmation = () => {
        setDialogIsOpen(false);
        deleteCandidacy(targetId);
    };

    useEffect(() => {
        setFieldValue("");
    }, [isOpen]);

    useEffect(() => {
        fieldValue === "DELETE" ? setIsValueValid(true) : setIsValueValid(false);
    }, [fieldValue]);

    return (
        <Dialog open={isOpen} onClose={() => setDialogIsOpen(false)}>
            <DialogTitle>Confirmation </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To proceed with the deletion of this candidacy, please enter the word 'DELETE' in the field below. This action cannot be undone.
                </DialogContentText>
                <TextField
                    id="text"
                    type="text"
                    margin="dense"
                    variant="standard"
                    label="Confirmation"
                    autoFocus
                    fullWidth
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDialogIsOpen(false)}>Cancel</Button>
                <Button
                    disabled={!isValueValid}
                    onClick={_handleConfirmation}
                    sx={{
                        color: "red",
                        "&:hover": {
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                        }
                    }}
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

