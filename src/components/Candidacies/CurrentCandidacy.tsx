import { FC, useState } from 'react';

// providers
import { useCandidaciesContext } from './../../providers/CandidaciesProvider';

// helpers
import { getStatusColor } from '../../helpers';

// packages
import { Box, Button, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ConfirmationDialog } from '../ConfirmationDialog';

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

export const CurrentCandidacy: FC = (): JSX.Element => {
    const { selectedCandidacy } = useCandidaciesContext();
    const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
    const styles = useStyles();

    return (
        <>
            {selectedCandidacy ? (
                <Box className={styles.container}>
                    <Box>
                        <Box className={styles.header__details}>
                            <Box>
                                <Typography component="h2" variant="h6" color="primary">
                                    {selectedCandidacy.position}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {selectedCandidacy.company}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className={styles.status}
                                    sx={{  backgroundColor: getStatusColor(selectedCandidacy.status) }}
                                >
                                    {selectedCandidacy.status}
                                </Typography>
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
                                {selectedCandidacy.location},
                            </Typography>
                            <Typography className={styles.country} variant="body2" ml={1}>
                                {selectedCandidacy.country}
                            </Typography>
                        </Box>
                        {...Array(["remote", "salary", "note"].map((item) => {
                            const key = item as keyof typeof selectedCandidacy;
                            return (
                                <Box key={key} className={styles.details}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        className={styles.details__item}
                                    >
                                        {key}:
                                    </Typography>
                                    <Typography variant="body2" ml={1}>
                                        {selectedCandidacy[key] ? selectedCandidacy[key] : "N/A"}
                                    </Typography>
                                </Box>
                            );
                        }))}
                    </Box>
                    <Box className={styles.footer}>
                        <Divider sx={{my: 1.5}}/>
                        <Box className={styles.footer__controls}>
                            <Button onClick={() => window.open(selectedCandidacy.url, "_blank")}>
                                Link
                            </Button>
                            <Button
                                className={styles.footer__controls__delete}
                                onClick={() => setDialogIsOpen(true)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                    <ConfirmationDialog targetId={selectedCandidacy?.id} isOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
                </Box>
            ) : <Typography variant="body2" color="text.secondary" align="center">No candidacy selected</Typography>}
        </>
    );
};
