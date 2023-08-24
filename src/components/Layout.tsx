import { ReactNode, FC } from 'react';

// providers
import { useUserContext } from '../providers';

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    const { user } = useUserContext();

    return <div className={!user ? "layout" : ""}>{children}</div>
};