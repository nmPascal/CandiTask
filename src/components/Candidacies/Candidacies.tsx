import { FC } from 'react';

// providers
import { useCandidaciesContext } from '../../providers';

// packages
import { List, ListItem } from '@mui/material';

export const Candidacies: FC = (): JSX.Element => {
    const { allCandidacies } = useCandidaciesContext();

    return (
       <List>
              {allCandidacies.map((candidacy) => (
                    <ListItem key={candidacy.id}>
                            {candidacy.position}
                    </ListItem>
              ))}
       </List>
    );
};
