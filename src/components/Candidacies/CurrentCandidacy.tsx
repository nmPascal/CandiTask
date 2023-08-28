import { FC } from 'react';
import { ICandidacy } from '../../interfaces';

type Props = {
    candidacy: ICandidacy;
};

export const CurrentCandidacy: FC<Props> = ({ candidacy }: Props): JSX.Element => {
  
    return (
       <div>
            {candidacy.position}
       </div>
    );
};
