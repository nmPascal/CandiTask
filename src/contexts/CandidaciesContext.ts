import { createContext, useContext } from "react";

// interfaces
import { ICandidaciesProviderProps } from "../interfaces";

export const CandidaciesContext = createContext<ICandidaciesProviderProps>({});

export const useCandidaciesContext = () => useContext(CandidaciesContext);