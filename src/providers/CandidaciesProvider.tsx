import { ReactNode } from "react";

// contexts
import { CandidaciesContext } from "../contexts";

type Props = {
    children: ReactNode;
};

export const CandidaciesProvider = ({ children }: Props) => {

    const propsValues = {};

    return (
        <CandidaciesContext.Provider value={propsValues}>
            {children}
        </CandidaciesContext.Provider>
    );
};