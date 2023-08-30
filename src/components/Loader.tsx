import { FC } from 'react';

// packages
import { Waveform } from '@uiball/loaders';
import { useTheme } from '@mui/material';


export const Loader: FC = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Waveform 
            size={60}
            lineWeight={3.5}
            speed={1} 
            color={theme.palette.primary.main}
        />
    );
};


