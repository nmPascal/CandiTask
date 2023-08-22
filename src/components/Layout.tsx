import { ReactNode, FC } from 'react';

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    return <div className="layout">{children}</div>
};