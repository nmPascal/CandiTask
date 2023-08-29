/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';

// interfaces
import { ICandidacy, IEditCandidacy } from '../../interfaces';

// utils
import { ECandidacyRemote, ECandidacyStatus, EEditData } from '../../utils';

// packages
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize
} from '@mui/material';

type Props = {
    item: ICandidacy
    edit: EEditData;
    editedValues: IEditCandidacy | null;
    setEditedValues: (editedValues: IEditCandidacy) => void;
}

export const EditMode: FC<Props> = ({ item, edit, editedValues, setEditedValues }: Props): JSX.Element => {

    useEffect(() => {
        const {
            uid,
            company,
            country,
            location,
            position,
            url,
            createdAt,
            updatedAt,
            ...rest
        } = item;

        setEditedValues(rest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    switch (edit) {
        case EEditData.STATUS:
            return (
                <FormControl>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        label="status"
                        value={editedValues?.status ? editedValues.status : item.status}
                        onChange={(ev) => setEditedValues({ ...editedValues!, status: ev.target.value as ECandidacyStatus})}
                    >
                        {Object.values(ECandidacyStatus).map((status) => (
                            <MenuItem key={status} value={status}>{status}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );

        case EEditData.REMOTE:
            return (
                <FormControl variant="standard" sx={{ ml: 1, mt: 0.3}}>
                    <Select
                        size='small'
                        value={editedValues?.remote ? editedValues.remote : item.remote}
                        onChange={(ev) => setEditedValues({ ...editedValues!, remote: ev.target.value as ECandidacyRemote})}
                    >
                        {Object.values(ECandidacyRemote).map((remote) => (
                            <MenuItem key={remote} value={remote}>{remote}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );

        case EEditData.SALARY:
            return (
                <TextField
                    size='small'
                    variant='standard'
                    sx={{ ml: 1, mt: 0.3 }}
                    value={editedValues?.salary ? editedValues.salary : item.salary}
                    onChange={(ev) => setEditedValues({ ...editedValues!, salary: ev.target.value})}
                />
            );

        case EEditData.NOTE:
            return (
                <TextareaAutosize
                    minRows={2}
                    maxRows={3}
                    style={{ marginLeft: '5px', padding: "5px", width: '100%' }}
                    placeholder="Type something..."
                    value={editedValues?.note ? editedValues.note : ""}
                    onChange={(ev) => setEditedValues({ ...editedValues!, note: ev.target.value})}
                />
            );
        default:
            return <></>;
    }

};
