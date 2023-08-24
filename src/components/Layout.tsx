import { ReactNode, FC } from 'react';
import { useUserContext } from '../contexts';

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    const { user } = useUserContext();

    return <div className={!user ? "layout" : ""}>{children}</div>
};