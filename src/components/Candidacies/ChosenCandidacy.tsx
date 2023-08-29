import { FC, useState } from 'react';

// providers
import { useCandidaciesContext } from '../../providers/CandidaciesProvider';

// helpers
import { getStatusColor } from '../../helpers';

// utils
import { EEditData } from '../../utils';

// packages
import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// components
import { ConfirmationDialog } from './ConfirmationDialog';
import { EditMode } from './EditMode';
import { IEditCandidacy } from '../../interfaces';
import { useAppContext } from '../../providers';

const useStyles = makeStyles({
    container: {
        height: "400px",
        display: "flex",
        flexDirection: "column",
    },
    header__details: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    status: {
        borderRadius: "5px",
        padding: "2px 5px",
        "&:first-letter": {
            textTransform: "capitalize",
        }
    },
    details: {
        display: "flex",
        alignItems: "center",
        margin: "10px 0",
    },
    details__item: {
        "&:first-letter": {
            textTransform: "capitalize",
        }
    },
    country: {
        textTransform: "uppercase",
    },
    footer: {
        marginTop: "auto",
    },
    footer__controls: {
        display: "flex",
        justifyContent: "space-between",
    },
    footer__controls__delete: {
        color: "red",
        "&:hover": {
            backgroundColor: "rgba(255, 0, 0, 0.1)",
        }
    }
});

export const ChosenCandidacy: FC = (): JSX.Element => {
    const { chosenCand, setChosenCand, editCandidacy } = useCandidaciesContext();
    const { isTablet } = useAppContext();

    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [editedValues, setEditedValues] = useState<IEditCandidacy | null>(null);

    const handleOnEdit = () => {
        if (!chosenCand) return;

        if (isEditMode && editedValues) {
            editCandidacy(editedValues);
            setIsEditMode(false);
            return;
        }

        setIsEditMode(true);
    };


    const styles = useStyles();

    return (
        <Grid item xs={12} lg={6}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {chosenCand ? (
                    <Box className={styles.container}>
                        <Box>
                            <Box className={styles.header__details}>
                                <Box>
                                    <Typography component="h2" variant="h6" color="primary">
                                        {chosenCand.position}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {chosenCand.company}
                                    </Typography>
                                </Box>
                                <Box>
                                    {isEditMode ? (
                                        <EditMode
                                            item={chosenCand}
                                            edit={EEditData.STATUS}
                                            editedValues={editedValues}
                                            setEditedValues={setEditedValues}
                                        />
                                    ) : (
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            className={styles.status}
                                            sx={{  backgroundColor: getStatusColor(chosenCand.status) }}
                                        >
                                            {chosenCand.status}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                            <Divider sx={{my: 1.5}}/>
                        </Box>
                        <Box>
                            <Box className={styles.details}>
                                <Typography variant="body2" color="text.secondary">
                                    Location:
                                </Typography>
                                <Typography variant="body2" ml={1}>
                                    {chosenCand.location},
                                </Typography>
                                <Typography className={styles.country} variant="body2" ml={1}>
                                    {chosenCand.country}
                                </Typography>
                            </Box>
                            <Box className={styles.details}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className={styles.details__item}
                                >
                                    Remote:
                                </Typography>
                                {isEditMode ? (
                                    <EditMode
                                        item={chosenCand}
                                        edit={EEditData.REMOTE}
                                        editedValues={editedValues}
                                        setEditedValues={setEditedValues}
                                    />
                                ) : (
                                    <Typography variant="body2" ml={1}>
                                        {chosenCand.remote ? chosenCand.remote : "N/A"}
                                    </Typography>
                                )}
                            </Box>        
                            <Box className={styles.details}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className={styles.details__item}
                                >
                                    Salary:
                                </Typography>
                                {isEditMode ? (
                                    <EditMode
                                        item={chosenCand}
                                        edit={EEditData.SALARY}
                                        editedValues={editedValues}
                                        setEditedValues={setEditedValues}
                                    />
                                ) : (
                                    <Typography variant="body2" ml={1}>
                                        {chosenCand.salary ? chosenCand.salary : "N/A"}
                                    </Typography>
                                )}
                            </Box>        
                            <Box className={styles.details}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className={styles.details__item}
                                >
                                    Note:
                                </Typography>
                                {isEditMode ? (
                                    <EditMode
                                        item={chosenCand}
                                        edit={EEditData.NOTE}
                                        editedValues={editedValues}
                                        setEditedValues={setEditedValues}
                                    />
                                ) : (
                                    <Typography variant="body2" ml={1}>
                                        {chosenCand.note ? chosenCand.note : "N/A"}
                                    </Typography>
                                )}
                            </Box>        
                        </Box>
                        <Box className={styles.footer}>
                            <Divider sx={{my: 1.5}}/>
                            <Box className={styles.footer__controls}>
                                <Box>
                                    <Button onClick={handleOnEdit}>
                                        {isEditMode ? "Save" : "Edit"}
                                    </Button>
                                    <Button onClick={() => window.open(chosenCand.url, "_blank")}>
                                        Link
                                    </Button>
                                    {isTablet && (
                                        <Button onClick={() => setChosenCand(null)}>
                                            Close
                                        </Button>
                                    )}
                                </Box>
                                <Button
                                    className={styles.footer__controls__delete}
                                    onClick={() => setDialogIsOpen(true)}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Box>
                        <ConfirmationDialog targetId={chosenCand?.id} isOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
                    </Box>
                ) : <Typography variant="body2" color="text.secondary" align="center">No candidacy selected</Typography>}
            </Paper>
        </Grid>
    );
};
